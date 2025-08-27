import React from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Calendar,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Building2,
  Lightbulb,
  Settings,
  Award,
  Camera,
  Palette,
  Wrench,
  Monitor,
  Package,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import {
  SiInstagram,
  SiFacebook,
  SiLinkedin,
  SiYoutube,
  SiX,
  SiWhatsapp,
} from "react-icons/si";
import heroImage from "./assets/hero-exposition.jpg";
import ax37Logo from "./assets/ax37-sem-fundo.png";
import "./App.css";
import ThemeToggle from "./components/ui/theme-toggle";
import { productCatalog } from "./data/productCatalog";
import standCorporativo from "./assets/stand-corporativo.jpg";
import feiraTecnologica from "./assets/feira-tecnologica.jpg";
import exposicaoCultural from "./assets/exposicao-cultural.jpg";

const SOCIALS = {
  instagram: "https://instagram.com/ax37marketingeventos",
  // facebook: "https://facebook.com/ax37marketing",
  // linkedin: "https://www.linkedin.com/company/ax37marketing",
  // youtube: "https://www.youtube.com/@ax37marketing",
  // twitter: "https://x.com/ax37marketing",
  whatsapp: "https://wa.me/5531993690883",
};

function HeaderLink({ href, children, label }) {
  return (
    <a
      href={href}
      className="relative inline-flex items-center font-medium text-foreground/90 hover:text-accent
                 transition-colors duration-300 motion-reduce:transition-none group"
      aria-label={label || `Ir para ${children}`}
    >
      <span className="px-1">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-2 -bottom-1 h-[2px]
                   bg-gradient-to-r from-transparent via-accent/80 to-transparent
                   scale-x-0 group-hover:scale-x-100 origin-center
                   transition-transform duration-300 motion-reduce:transition-none"
      />
    </a>
  );
}

function SocialLinks({ size = "md", className = "", useBrandColor = false }) {
  const btnSize = { sm: "h-9 w-9", md: "h-10 w-10", lg: "h-12 w-12" }[size];
  const iconPx = { sm: 16, md: 20, lg: 24 }[size];

  const entries = [
    {
      key: "instagram",
      Icon: SiInstagram,
      label: "Instagram",
      brand: "#E4405F",
    },
    { key: "facebook", Icon: SiFacebook, label: "Facebook", brand: "#1877F2" },
    { key: "linkedin", Icon: SiLinkedin, label: "LinkedIn", brand: "#0A66C2" },
    { key: "youtube", Icon: SiYoutube, label: "YouTube", brand: "#FF0000" },
    { key: "twitter", Icon: SiX, label: "X (Twitter)", brand: "#000000" },
    { key: "whatsapp", Icon: SiWhatsapp, label: "WhatsApp", brand: "#25D366" },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {entries.map(({ key, Icon, label, brand }) => {
        const href = SOCIALS[key];
        if (!href) return null;
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`group grid place-items-center rounded-full border border-accent/30
                        bg-accent/10 hover:bg-accent/20 transition ${btnSize} transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transition-none`}
            style={!useBrandColor ? undefined : { color: brand }}
          >
            {/* Por padrão herda o color via Tailwind (text-accent); 
               se useBrandColor=true, usa a cor oficial da marca */}
            <Icon
              size={iconPx}
              className={useBrandColor ? "" : "text-accent"}
            />
            <span className="sr-only">{label}</span>
          </a>
        );
      })}
    </div>
  );
}

function EventCard({ image, badge, title, description, alt, compact = false }) {
  const mediaAspect = compact ? "aspect-[21/9]" : "aspect-video";

  return (
    <Card
      className="group relative rounded-2xl shadow-lg hover:shadow-2xl
                 transition-all duration-300 hover:-translate-y-0.5 hover:z-10 transform-gpu"
    >
      <div className={`${mediaAspect} relative overflow-hidden rounded-t-2xl`}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-all duration-300" />
        <div className="absolute bottom-3 left-3 right-3">
          <Badge className="bg-white/90 text-gray-800 text-xs px-2 py-0.5">
            {badge}
          </Badge>
        </div>
      </div>
      <CardContent className={compact ? "p-4" : "p-6"}>
        <h3
          className={
            compact
              ? "text-base font-semibold mb-1"
              : "text-lg font-semibold mb-2"
          }
        >
          {title}
        </h3>
        <p
          className="text-muted-foreground text-sm"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

const events = [
  {
    image: standCorporativo,
    alt: "Stand Inovador Tech Corp",
    badge: "Stand Corporativo",
    title: "Stand Inovador Tech Corp",
    description:
      "Stand corporativo de 200m² com tecnologia interativa, iluminação LED e design moderno para feira de tecnologia.",
  },
  {
    image: feiraTecnologica,
    alt: "Feira de Tecnologia 2024",
    badge: "Feira Tecnológica",
    title: "Feira de Tecnologia 2024",
    description:
      "Montagem completa de pavilhão para feira tecnológica com 50 expositores e infraestrutura completa.",
  },
  {
    image: exposicaoCultural,
    alt: "Exposição Arte Moderna",
    badge: "Exposição Cultural",
    title: "Exposição Arte Moderna",
    description:
      "Cenografia especial para exposição cultural com iluminação cênica e elementos interativos únicos.",
  },
  {
    image: standCorporativo,
    alt: "Stand Empresarial Premium",
    badge: "Stand Corporativo",
    title: "Stand Empresarial Premium",
    description:
      "Design exclusivo com materiais premium, área de reunião e apresentação multimídia integrada.",
  },
  {
    image: feiraTecnologica,
    alt: "Pavilhão Inovação",
    badge: "Feira Tecnológica",
    title: "Pavilhão Inovação",
    description:
      "Espaço completo para demonstrações tecnológicas com infraestrutura audiovisual de última geração.",
  },
  {
    image: exposicaoCultural,
    alt: "Galeria Contemporânea",
    badge: "Exposição Cultural",
    title: "Galeria Contemporânea",
    description:
      "Ambiente museológico com iluminação especializada e sistemas de segurança para obras de arte.",
  },
  {
    image: standCorporativo,
    alt: "Stand Inovador Tech Corp",
    badge: "Stand Corporativo",
    title: "Stand Inovador Tech Corp",
    description:
      "Stand corporativo de 200m² com tecnologia interativa, iluminação LED e design moderno para feira de tecnologia.",
  },
  {
    image: feiraTecnologica,
    alt: "Feira de Tecnologia 2024",
    badge: "Feira Tecnológica",
    title: "Feira de Tecnologia 2024",
    description:
      "Montagem completa de pavilhão para feira tecnológica com 50 expositores e infraestrutura completa.",
  },
  {
    image: exposicaoCultural,
    alt: "Exposição Arte Moderna",
    badge: "Exposição Cultural",
    title: "Exposição Arte Moderna",
    description:
      "Cenografia especial para exposição cultural com iluminação cênica e elementos interativos únicos.",
  },
  {
    image: standCorporativo,
    alt: "Stand Empresarial Premium",
    badge: "Stand Corporativo",
    title: "Stand Empresarial Premium",
    description:
      "Design exclusivo com materiais premium, área de reunião e apresentação multimídia integrada.",
  },
  {
    image: feiraTecnologica,
    alt: "Pavilhão Inovação",
    badge: "Feira Tecnológica",
    title: "Pavilhão Inovação",
    description:
      "Espaço completo para demonstrações tecnológicas com infraestrutura audiovisual de última geração.",
  },
  {
    image: exposicaoCultural,
    alt: "Galeria Contemporânea",
    badge: "Exposição Cultural",
    title: "Galeria Contemporânea",
    description:
      "Ambiente museológico com iluminação especializada e sistemas de segurança para obras de arte.",
  },
];

function SimpleItemCard({
  image,
  alt,
  badge,
  Icon,
  title,
  caption,
  bullets,
  details,
  compact = false,
}) {
  const hasImage = Boolean(image);
  const mediaAspect = compact && hasImage ? "aspect-[21/9]" : "aspect-video";

  return (
    <Card
      className="group relative border border-border/60 rounded-2xl
             shadow-sm hover:shadow-xl hover:border-accent/50
             transition-all duration-300 hover:-translate-y-0.5 hover:z-10 transform-gpu bg-card"
    >
      {hasImage && (
        <div
          className={`relative ${mediaAspect} overflow-hidden rounded-t-2xl`}
        >
          <img
            src={image}
            alt={alt || title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-90" />
          {badge && (
            <div className="absolute left-3 bottom-3">
              <Badge className="bg-white/90 text-gray-800 shadow-sm text-xs px-2 py-0.5">
                {badge}
              </Badge>
            </div>
          )}
        </div>
      )}

      <CardContent
        className={compact ? "p-4" : `p-6 ${hasImage ? "" : "pt-6"}`}
      >
        {Icon ? (
          <div
            className={`${compact ? "w-10 h-10" : "w-12 h-12"} ${
              hasImage ? (compact ? "-mt-8" : "-mt-10") : ""
            }
              mb-3 rounded-full bg-background/90 backdrop-blur border border-border/70 shadow-sm
              flex items-center justify-center`}
          >
            <Icon
              className={
                compact ? "w-5 h-5 text-accent" : "w-6 h-6 text-accent"
              }
            />
          </div>
        ) : null}

        {!hasImage && badge ? (
          <div className="mb-2">
            <Badge className="bg-accent/10 text-accent border border-accent/20">
              {badge}
            </Badge>
          </div>
        ) : null}

        <h3
          className={
            compact
              ? "text-base font-semibold text-foreground"
              : "text-lg font-semibold text-foreground"
          }
        >
          {title}
        </h3>
        {caption && (
          <p
            className="mt-1 text-sm text-muted-foreground"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: compact ? 2 : 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {caption}
          </p>
        )}

        {(bullets?.length || details) && (
          <div className="mt-3 mb-2 h-px bg-border/60" />
        )}

        {bullets?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {bullets.map((b, i) => (
              <div
                key={i}
                className="flex items-start text-sm text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-accent shrink-0" />
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: compact ? 1 : 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        ) : null}

        {details ? (
          <details className="group/acc mt-3 rounded-lg border border-border bg-muted/40">
            <summary className="flex items-center justify-between cursor-pointer select-none px-3 py-2 text-sm text-accent hover:underline">
              <span>Saiba mais</span>
              <ChevronDown
                className="w-4 h-4 transition-transform duration-300 group-open/acc:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="px-3 pb-3 pt-0 text-sm text-muted-foreground whitespace-pre-line">
              {details}
            </div>
          </details>
        ) : null}
      </CardContent>
    </Card>
  );
}

const serviceTypes = [
  {
    Icon: Star,
    title: "Blitz Promocionais",
    caption: "Ação itinerante que aborda o público onde ele está.",
    bullets: [
      "Ruas e espaços públicos",
      "PDVs e supermercados",
      "Praias, escolas e empresas",
    ],
    details: `Ação que vai de encontro ao público, em qualquer dia ou hora, podendo ser realizada em vários tipos de espaços, como ruas, supermercados, festas, praias, escolas, empresas, eventos, entre outros.`,
  },
  {
    Icon: Building2,
    title: "Eventos Corporativos",
    caption: "Fortalece relações, negócios e a marca.",
    bullets: ["Gerar negócios", "Lançar produtos", "Promover networking"],
    details: `Ação utilizada para interação. O objetivo é fortalecer relacionamentos, compartilhar conhecimento, divulgar a marca e incentivar a colaboração entre os participantes. Pode ser usada para: gerar negócios, lançar produtos, anunciar campanha, promover networking, atrair investimento e reposicionar a marca. Eventos bem-sucedidos coletam feedbacks para evoluir networking e experiência.`,
  },
  {
    Icon: Award,
    title: "Seminários",
    caption: "Discussão guiada por especialistas sobre um tema.",
    bullets: ["Relatórios", "Defesa de projetos", "Âmbito científico/cultural"],
    details: `Ação que objetiva discutir, apresentar e compartilhar informações e inovações sobre um tema específico, ministrada por um ou mais especialistas. Usos: divulgação de relatórios, defesa de projetos, congresso científico ou cultural.`,
  },
  {
    Icon: Users,
    title: "Simpósios",
    caption: "Reúne especialistas para aprofundar um tópico.",
    bullets: [
      "Compartilhar conhecimentos",
      "Debates focados",
      "Certificados de participação",
    ],
    details: `Ação que reúne especialistas para discutir um tema específico, promovendo discussões e compartilhamento de conhecimento. É comum fornecer certificados de participação.`,
  },
  {
    Icon: Building2,
    title: "Feiras",
    caption: "Exposição e venda para divulgar produtos e ideias.",
    bullets: [
      "Interação comprador–fornecedor",
      "Identificar tendências",
      "Networking estratégico",
    ],
    details: `Ação em que expositores apresentam e vendem produtos ou serviços a um público variado. Além da divulgação, movimenta a economia local. Objetivos: promover interação entre compradores e fornecedores, identificar tendências, estimular networking e impulsionar crescimento e inovação.`,
  },
  {
    Icon: Users,
    title: "Mesas Redondas",
    caption: "Discussão organizada em grupo sobre um tema.",
    bullets: ["Negócios", "Política", "Educação e mídia"],
    details: `Ação em que participantes compartilham opiniões e ideias em um debate estruturado sobre tema específico. É comum em negócios, política, educação, mídia, entre outros.`,
  },
  {
    Icon: MapPin,
    title: "Roadshows",
    caption: "Exposição itinerante para promover marca/produto.",
    bullets: [
      "Apresentar a empresa",
      "Mostrar produtos",
      "Atrair leads e investidores",
    ],
    details: `Ação estratégica de marketing em diferentes locais (“na estrada”). Útil para exibir a empresa ao mercado, demonstrar produtos, atrair potenciais clientes e fortalecer a conexão com investidores.`,
  },
  {
    Icon: Wrench,
    title: "Workshops & Oficinas",
    caption: "Aprendizado prático e interativo.",
    bullets: ["Capacitação", "Treinamentos", "Inovação e trabalho em grupo"],
    details: `Reúne pessoas interessadas em aprender de forma prática e interativa, com explicação de palestrantes e atividades. Usos: capacitação profissional, treinamentos, desenvolvimento de equipes e fomento à inovação. Participantes são incentivados a compartilhar experiências, participar de dinâmicas e exercícios práticos. Oficinas: eventos curtos e essencialmente práticos. Workshops: equilibram teoria e prática, geralmente por períodos maiores. É útil manter checklist e prever momento de descontração para networking.`,
  },
  {
    Icon: Award,
    title: "Congressos",
    caption: "Estrutura robusta para debater e problematizar um tema.",
    bullets: [
      "Debates didáticos",
      "Resultados de pesquisa",
      "Minicursos e exposições",
    ],
    details: `Apresenta projetos e promove debate aprofundado sobre um tema. Possui organização robusta e múltiplos formatos: debates, apresentação de resultados, minicursos, exposição, experiências e palestras.`,
  },
  {
    Icon: Award,
    title: "Treinamentos & Cursos",
    caption: "Formações presenciais, online ou híbridas.",
    bullets: [
      "Carga horária variável",
      "Cursos mais abrangentes",
      "Duração maior que treinamentos",
    ],
    details: `Podem ser presenciais, online ou híbridos, variando de horas a semanas. Cursos tendem a ser mais abrangentes e longos do que treinamentos.`,
  },
  {
    Icon: Building2,
    title: "Convenções Empresariais",
    caption: "Integração e alinhamento de metas com o time.",
    bullets: [
      "Resultados e planejamento",
      "Motivação e engajamento",
      "Reconhecimento e premiação",
    ],
    details: `Integram e alinham objetivos, reunindo colaboradores e parceiros. Permitem apresentar resultados, planejar o próximo período, traçar estratégias de motivação e engajamento, compartilhar conhecimentos, fortalecer networking e reconhecer desempenhos.`,
  },
  {
    Icon: Wrench,
    title: "Bootcamps",
    caption: "Formação intensiva e imersiva de curta duração.",
    bullets: ["Teoria + prática", "Ritmo acelerado", "Foco em empregabilidade"],
    details: `Programa de formação intensivo e prático para capacitar profissionais rapidamente. Metodologia imersiva que intercala teoria e prática para preparar para o mercado em curto prazo.`,
  },
  {
    Icon: Building2,
    title: "Conferências Empresariais",
    caption: "Debate formal com moderador e conferencista.",
    bullets: ["Etapas bem definidas", "Mediação ativa", "Perguntas da plateia"],
    details: `Ação corporativa que reúne especialistas para discutir um assunto. Características: reuniões formais por etapas, moderador que intermedia plateia e conferencista, e condução das perguntas aos expositores.`,
  },
  {
    Icon: Star,
    title: "Palestras",
    caption: "Apresentação para informar, educar e engajar.",
    bullets: ["Liderança", "Desenvolvimento", "Inovação e bem-estar"],
    details: `Utilizadas para motivar e engajar colaboradores, alinhando valores institucionais e melhorando satisfação, produtividade e engajamento. Temas comuns: liderança e gestão, desenvolvimento pessoal/profissional, saúde e bem-estar, inovação e transformação digital, diversidade e inclusão.`,
  },
  {
    Icon: Monitor,
    title: "Eventos Online",
    caption: "Transmissões ao vivo ou gravadas com alto alcance.",
    bullets: [
      "Redes/plataformas",
      "Interação via chat/áudio/vídeo",
      "Acessibilidade e conveniência",
    ],
    details: `Acontecem no ambiente digital, transmitidos ao vivo ou gravados, via redes sociais ou plataformas especializadas. Interação online por chats, áudios e vídeos. Vantagens: maior alcance, credibilidade e reconhecimento de marca, conveniência e possibilidade de palestrantes de qualquer lugar.`,
  },
  {
    Icon: Monitor,
    title: "Eventos Híbridos",
    caption: "Combina presencial com transmissão e interação online.",
    bullets: [
      "Streaming ao vivo",
      "Participação simultânea",
      "Tecnologia de transmissão",
    ],
    details: `Combinam elementos presenciais e virtuais. Modelo comum: evento presencial com transmissão simultânea e interações online, viabilizadas por tecnologia de streaming ao vivo.`,
  },
];

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size)
    chunks.push(arr.slice(i, i + size));
  return chunks;
}

function GridCarousel({ items, renderItem }) {
  const slides = chunkArray(items, 6);
  const [index, setIndex] = React.useState(0);

  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, slides.length]);

  return (
    <div className="relative">
      {/* wrapper relativo da faixa de cards */}
      <div className="relative">
        {/* viewport: esconda só no eixo X; deixe Y visível p/ sombra não cortar */}
        <div className="overflow-x-hidden overflow-y-visible -mx-2 sm:-mx-4 py-3">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, sIdx) => (
              // cada slide recebe um gutter interno para evitar corte do lado direito
              <div key={sIdx} className="w-full shrink-0 px-2 sm:px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {slide.map((item, i) => (
                    <React.Fragment key={i}>
                      {renderItem(item, i)}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* setas centralizadas e um pouco para fora */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-14 lg:-left-16
                       bg-background/80 backdrop-blur border border-border hover:border-accent/50
                       rounded-full p-2 shadow-md z-10 hidden sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={next}
              aria-label="Próximo"
              className="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-14 lg:-right-16
                       bg-background/80 backdrop-blur border border-border hover:border-accent/50
                       rounded-full p-2 shadow-md z-10 hidden sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* dots fora do wrapper para não afetar o centramento vertical das setas */}
      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2.5 bg-muted"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
    botField: "", // honeypot anti-spam
  });
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(null); // 'success' | 'error' | null

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const API_BASE = import.meta.env.DEV ? "http://localhost:3000" : "";

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(null);

    // timeout de 20s para evitar "pendurado"
    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), 20000);

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });

      let data = {};
      try {
        data = await res.json();
      } catch {} // se voltar HTML, evita quebrar

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || `HTTP ${res.status}`);
      }

      setSent("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        type: "",
        message: "",
        botField: "",
      });
    } catch (err) {
      console.error("CONTACT FORM ERROR:", err);
      setSent("error");
    } finally {
      clearTimeout(to);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={ax37Logo}
              alt="AX37 Marketing Eventos"
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <HeaderLink href="#inicio">Início</HeaderLink>
            <HeaderLink href="#eventos">Eventos</HeaderLink>
            <HeaderLink href="#produtos">Produtos</HeaderLink>
            {/* <HeaderLink href="#portfolio">Portfólio</HeaderLink> */}
            <HeaderLink href="#contato">Contato</HeaderLink>
          </nav>

          <div className="flex items-center gap-3">
            <SocialLinks size="sm" className="hidden md:flex" />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Solicitar Orçamento
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-20 pb-16 bg-gradient-to-br from-background to-muted"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                  <Building2 className="w-4 h-4 mr-2" />
                  Especialistas em Marketing de Eventos
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transformamos
                  <span className="text-accent"> Eventos </span>
                  em Experiências
                  <span className="text-accent"> Memoráveis</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Somos especialistas em marketing e montagem de eventos,
                  exposições e experiências corporativas. Com mais de 10 anos de
                  experiência, criamos estratégias que conectam marcas ao seu
                  público-alvo de forma impactante e memorável.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button> */}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Ver Portfólio
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Eventos Realizados
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Clientes Satisfeitos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Anos de Experiência
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Exposições profissionais AX37"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent flex items-end justify-center p-8">
                  <div className="text-center text-white">
                    <Building2 className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">
                      Exposições que Impressionam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section id="servicos" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Soluções Completas em Marketing de Eventos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos serviços especializados em marketing e montagem de
              eventos, desde o planejamento estratégico até a execução,
              garantindo que cada projeto seja único e impactante.
            </p>
          </div>

          <GridCarousel
            items={services}
            renderItem={(svc) => <ServiceCard {...svc} />}
          />
        </div>
      </section> */}

      {/* Tipos de Eventos*/}
      <section id="eventos" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Eventos
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Do Planejamento à Execução
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Atendemos diferentes formatos de evento com a mesma excelência —
              do briefing ao pós-evento.
            </p>
          </div>

          <GridCarousel
            items={serviceTypes}
            renderItem={(it) => <SimpleItemCard {...it} />}
          />
        </div>
      </section>

      {/* Produtos & Estruturas */}
      <section id="produtos" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Produtos & Estruturas
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Tudo que seu Evento Precisa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções modulares e personalizadas para cenografia, exposição e
              ativação de marca.
            </p>
          </div>

          <GridCarousel
            items={productCatalog}
            renderItem={(it) => <SimpleItemCard {...it} compact />}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="depoimentos" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20">Depoimentos</Badge>
            <h2 className="text-4xl font-bold text-foreground">O que Nossos Clientes Dizem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior recompensa. Veja o que eles têm a dizer sobre nossos serviços de marketing de eventos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "A AX37 superou nossas expectativas na criação do nosso evento corporativo. A estratégia de marketing foi brilhante e os resultados excepcionais!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 border border-accent/30">
                    <span className="text-accent font-semibold">MS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Marina Silva</div>
                    <div className="text-sm text-muted-foreground">Diretora de Marketing - TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Profissionalismo exemplar! A equipe cumpriu todos os prazos e a qualidade da execução foi impecável. Parceria de longa data!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 border border-accent/30">
                    <span className="text-accent font-semibold">CA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Carlos Andrade</div>
                    <div className="text-sm text-muted-foreground">CEO - Expo Center</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "A criatividade e atenção aos detalhes da AX37 transformaram nosso lançamento em um verdadeiro sucesso. ROI excepcional!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 border border-accent/30">
                    <span className="text-accent font-semibold">LR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Lucia Rodrigues</div>
                    <div className="text-sm text-muted-foreground">CMO - StartupX</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Portfolio Section */}
      {/* <section id="portfolio" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Nosso Portfólio
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Eventos que Marcaram História
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada projeto é único e especial. Veja alguns dos nossos trabalhos
              mais marcantes em marketing de eventos, exposições e experiências
              corporativas.
            </p>
          </div>

          <GridCarousel
            items={events}
            renderItem={(ev) => <EventCard {...ev} compact />}
          />

          // <div className="text-center mt-12">
          //   <Button
          //     size="lg"
          //     variant="outline"
          //     className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          //   >
          //     <Camera className="w-5 h-5 mr-2" />
          //     Ver Portfólio Completo
          //   </Button>
          // </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Entre em Contato
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Vamos Criar Seu Próximo Evento
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos o que você precisa para um evento de sucesso. <br />
              <strong>Fale conosco</strong>, vamos te ajudar a alcançar seus
              objetivos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Solicite seu Orçamento
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Honeypot (anti-spam) */}
                <input
                  type="text"
                  name="botField"
                  value={form.botField}
                  onChange={onChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  {/* AVISO TEMPORÁRIO - remover quando o form estiver ativo */}
                  <div className="flex items-start gap-3 rounded-lg border border-yellow-300 bg-yellow-50 p-4">
                    <div className="shrink-0">
                      <svg
                        className="h-5 w-5 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-yellow-800">
                      Nosso formulário de contato está{" "}
                      <strong>temporariamente fora do ar</strong>. Em breve
                      estará disponível! Enquanto isso, entre em contato pelo{" "}
                      <a
                        href="mailto:contato@ax37marketing.com"
                        className="underline font-medium text-yellow-900 hover:text-yellow-700"
                      >
                        e-mail
                      </a>{" "}
                      ou{" "}
                      <a
                        href="https://wa.me/5531993690883?text=Olá%20AX37!%20Quero%20um%20orçamento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium text-yellow-900 hover:text-yellow-700"
                      >
                        WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                  {/* Fim do warning */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        className="border-border focus:border-accent"
                        value={form.name}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="border-border focus:border-accent"
                        value={form.email}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(11) 99999-9999"
                        className="border-border focus:border-accent"
                        value={form.phone}
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="type"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Tipo de Evento
                      </label>
                      <select
                        id="type"
                        name="type"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                        value={form.type}
                        onChange={onChange}
                        required
                      >
                        <option value="">Selecione o tipo</option>
                        {serviceTypes.map((s) => (
                          <option key={s.title} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground mb-2 block"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Conte-nos mais sobre seu projeto..."
                      rows={4}
                      className="border-border focus:border-accent"
                      value={form.message}
                      onChange={onChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    disabled={loading}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {loading ? "Enviando..." : "Enviar Solicitação"}
                  </Button>

                  {sent === "success" && (
                    <p className="text-sm text-green-600 text-center">
                      Mensagem enviada com sucesso! Em breve entraremos em
                      contato.
                    </p>
                  )}
                  {sent === "error" && (
                    <p className="text-sm text-red-600 text-center">
                      Não foi possível enviar. Tente novamente em instantes.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        Telefone
                      </h3>
                      <p className="text-muted-foreground">(31) 9369-0883</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        ax37marketingeventos@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        Endereço
                      </h3>
                      <p className="text-muted-foreground">
                        Rua dos Eventos, 123
                      </p>
                      <p className="text-muted-foreground">
                        São Paulo - SP, 01234-567
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span>8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9h às 15h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Plantão (emergências)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          {/* aumentei para 5 colunas no md+ */}
          <div className="grid md:grid-cols-5 gap-8">
            {/* Sobre + redes */}
            <div className="space-y-4">
              <img
                src={ax37Logo}
                alt="AX37 Marketing Eventos"
                className="h-12 w-auto"
              />
              <p className="text-primary-foreground/80">
                Especialistas em marketing de eventos, criando experiências que
                conectam marcas ao seu público-alvo.
              </p>
              <SocialLinks size="md" useBrandColor />
            </div>

            {/* Serviços */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Serviços</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Stands Personalizados
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Estratégia de Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Tecnologia Audiovisual
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Experiências Imersivas
                  </a>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-accent transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-accent transition-colors"
                  >
                    Portfólio
                  </a>
                </li>
                <li>
                  <a
                    href="#eventos"
                    className="hover:text-accent transition-colors"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:text-accent transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* NOVO: Fornecedores */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Fornecedores</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a
                    href="mailto:fornecedores@ax37marketing.com?subject=Parceria%20-%20Cadastro%20de%20Fornecedor&body=Olá%20AX37%2C%0A%0ARef.%3A%20Cadastro%20de%20Fornecedor.%20Segue%20resumo%20dos%20nossos%20serviços%20e%20portfólio%3A%0A-%20Empresa%3A%0A-%20CNPJ%3A%0A-%20Cidade%2FUF%3A%0A-%20Categoria%20(%20ex.%3A%20cenografia%2C%20áudio%2C%20lighting%20)%3A%0A-%20Site%2FPortfólio%3A%0A-%20Telefone%3A%0A%0AObrigado!"
                    className="hover:text-accent transition-colors"
                  >
                    fornecedores@ax37marketing.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5531993690883?text=Olá%20AX37!%20Sou%20fornecedor%20e%20gostaria%20de%20parceria."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 rounded-md border border-primary-foreground/30 bg-primary/20 px-3 py-2 text-sm hover:bg-primary/30 transition-colors"
                    aria-label="Abrir WhatsApp para fornecedores"
                    title="Seja parceiro (WhatsApp)"
                  >
                    Seja parceiro via WhatsApp
                  </a>
                </li>
                {/* opcional: link para uma página com requisitos */}
                {/* <li><a href="/fornecedores" className="hover:text-accent transition-colors">Guia de homologação</a></li> */}
              </ul>
            </div>

            {/* NOVO: Trabalhe Conosco */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Trabalhe Conosco</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a
                    href="mailto:recrutamento@ax37marketing.com?subject=Trabalhe%20Conosco%20-%20%5BSeu%20Nome%5D&body=Olá%20AX37%2C%0A%0ASegue%20meu%20currículo%20em%20anexo.%0A-%20Nome%3A%0A-%20Cidade%2FUF%3A%0A-%20Área%20de%20interesse%3A%0A-%20LinkedIn%2FPortfólio%3A%0A%0AObrigado!"
                    className="hover:text-accent transition-colors"
                  >
                    recrutamento@ax37marketing.com
                  </a>
                </li>
                <li>
                  <a
                    href="/vagas"
                    className="inline-flex items-center mt-2 rounded-md border border-primary-foreground/30 bg-primary/20 px-3 py-2 text-sm hover:bg-primary/30 transition-colors"
                    title="Ver vagas abertas"
                  >
                    Ver vagas & enviar CV
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>
              &copy; 2025 AX37 Marketing Eventos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AX37 Marketing Eventos",
            url: "https://www.ax37marketing.com",
            sameAs: Object.values(SOCIALS).filter(Boolean),
          }),
        }}
      />
    </div>
  );
}

export default App;
