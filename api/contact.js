/* eslint-env node */
import { Resend } from "resend";

const SEND_TIMEOUT_MS = 15000; // 15s de timeout p/ não "travar"

// --- CORS (ajuste CORS_ORIGIN no .env.local se quiser restringir) ---
const ORIGIN = process.env.CORS_ORIGIN || "*";
function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (ORIGIN !== "*") res.setHeader("Vary", "Origin");
}

// --- Helpers ---
/** Lê o body mesmo se o runtime não populou req.body */
async function getJson(req) {
  if (req.body && Object.keys(req.body).length) return req.body;
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString("utf8") || "{}";
  try { return JSON.parse(raw); } catch { return {}; }
}

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
  setCors(res);
  console.log("[CONTACT] hit", req.method, new Date().toISOString());

  // Libera preflight
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    // Valida envs
    if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY ausente");
    const from = process.env.CONTACT_FROM || "AX37 <onboarding@resend.dev>";

    // Lê body
    const { name, email, phone, type, message, botField } = await getJson(req);

    // Honeypot anti-spam
    if (botField) return res.status(200).json({ ok: true });

    // Campos obrigatórios
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ ok: false, error: "Campos obrigatórios ausentes (name, email, message)." });
    }

    // Instancia SDK + BCC internos
    const resend = new Resend(process.env.RESEND_API_KEY);
    const bccList = (process.env.CONTACT_INTERNALS || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    // Envio com timeout (Promise.race)
    const sendPromise = resend.emails.send({
      from,
      to: email,                                  // string OK
      bcc: bccList.length ? bccList : undefined,
      reply_to: email,                            // CORRETO: snake_case
      subject: `Recebemos sua solicitação: ${type || "Contato"} — AX37`,
      text: [
        `Olá ${name}, recebemos sua mensagem e retornaremos em breve.`,
        "",
        `Telefone: ${phone || "-"}`,
        `Tipo de evento: ${type || "-"}`,
        "",
        `Mensagem:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5">
          <h2>Obrigado pelo contato, ${escapeHtml(name)}!</h2>
          <p>Recebemos sua mensagem e retornaremos em breve.</p>
          <hr/>
          <p><strong>Telefone:</strong> ${escapeHtml(phone || "-")}</p>
          <p><strong>Tipo de evento:</strong> ${escapeHtml(type || "-")}</p>
          <p><strong>Mensagem:</strong></p>
          <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
        </div>
      `,
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("RESEND_TIMEOUT")), SEND_TIMEOUT_MS)
    );

    const result = await Promise.race([sendPromise, timeoutPromise]);

    // A Resend retorna { data, error }
    const { data, error } = result || {};
    const isDebug =
      process.env.DEBUG_CONTACT === "1" ||
      (process.env.VERCEL_ENV !== "production" && process.env.NODE_ENV !== "production");

    if (error || !data?.id) {
      const payload = {
        ok: false,
        error: error?.message || "Falha ao enviar e-mail.",
        code: error?.code,
        type: error?.type,
        details: error?.details || error || result,
      };
      console.error("[CONTACT] Resend error:", payload);
      return res.status(502).json(isDebug ? payload : { ok: false, error: "Falha ao enviar e-mail." });
    }

    console.log("[CONTACT] email enviado id:", data.id);
    return res.status(200).json({ ok: true, id: data.id, to: email });

  } catch (err) {
    if (err?.message === "RESEND_TIMEOUT") {
      console.warn("[CONTACT] Timeout no envio. Respondendo 202 e seguindo.");
      return res.status(202).json({ ok: true, queued: true });
    }

    console.error("[CONTACT] ERROR:", err);
    const debug = process.env.DEBUG_CONTACT === "1";
    return res.status(500).json(
      debug
        ? {
            ok: false,
            error: err?.message || "Falha ao enviar e-mail.",
            name: err?.name,
            code: err?.code,
            statusCode: err?.statusCode,
            cause: err?.cause,
            data: err?.data,
            response: err?.response?.data,
          }
        : { ok: false, error: "Falha ao enviar e-mail." }
    );
  }
}
