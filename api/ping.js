/* eslint-env node */
export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    node: process.version,
    envLoaded: Boolean(process.env.RESEND_API_KEY),
    from: process.env.CONTACT_FROM || null,
  });
}
