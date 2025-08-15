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
} from "lucide-react";
import heroImage from "./assets/hero-exposition.jpg";
import standCorporativo from "./assets/stand-corporativo.jpg";
import feiraTecnologica from "./assets/feira-tecnologica.jpg";
import exposicaoCultural from "./assets/exposicao-cultural.jpg";
import ax37Logo from "./assets/ax37-logo.png";
import "./App.css";
import ThemeToggle from "./components/ui/theme-toggle";

function EventCard({ image, badge, title, description, alt }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="bg-white/90 text-gray-800">{badge}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

function ServiceCard({ Icon, title, description, bullets }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors border border-accent/20">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-base text-muted-foreground">
          {description}
        </CardDescription>
        <div className="mt-4 space-y-2">
          {bullets?.map((b, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-sm text-muted-foreground"
            >
              <CheckCircle className="w-4 h-4 mr-2 text-accent" />
              {b}
            </div>
          ))}
        </div>
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

const services = [
  {
    Icon: Building2,
    title: "Stands Personalizados",
    description:
      "Criação e montagem de stands únicos e personalizados, com design exclusivo que reflete a identidade da sua marca e maximiza o engajamento.",
    bullets: ["Design exclusivo", "Materiais premium", "Montagem profissional"],
  },
  {
    Icon: Users,
    title: "Estratégia de Marketing",
    description:
      "Desenvolvimento de estratégias de marketing integradas para maximizar o ROI dos seus eventos e criar conexões duradouras com o público.",
    bullets: [
      "Análise de público-alvo",
      "Campanhas integradas",
      "Métricas e resultados",
    ],
  },
  {
    Icon: Monitor,
    title: "Tecnologia Audiovisual",
    description:
      "Equipamentos de última geração para apresentações, vídeos e interações digitais que elevam a experiência do seu evento.",
    bullets: [
      "Telas de alta resolução",
      "Som profissional",
      "Interatividade digital",
    ],
  },
  {
    Icon: Lightbulb,
    title: "Experiências Imersivas",
    description:
      "Criação de experiências imersivas e envolventes que conectam emocionalmente sua marca com o público participante.",
    bullets: [
      "Design de experiência",
      "Elementos interativos",
      "Engajamento emocional",
    ],
  },
  {
    Icon: Settings,
    title: "Gestão Completa",
    description:
      "Gestão completa do seu evento, desde o planejamento inicial até a execução final, garantindo que tudo saia perfeito.",
    bullets: ["Planejamento estratégico", "Coordenação total", "Suporte 24/7"],
  },
  {
    Icon: Award,
    title: "Branding e Identidade",
    description:
      "Desenvolvimento e aplicação consistente da identidade visual da sua marca em todos os pontos de contato do evento.",
    bullets: [
      "Identidade visual",
      "Materiais gráficos",
      "Consistência de marca",
    ],
  },
  {
    Icon: Building2,
    title: "Stands Personalizados",
    description:
      "Criação e montagem de stands únicos e personalizados, com design exclusivo que reflete a identidade da sua marca e maximiza o engajamento.",
    bullets: ["Design exclusivo", "Materiais premium", "Montagem profissional"],
  },
  {
    Icon: Users,
    title: "Estratégia de Marketing",
    description:
      "Desenvolvimento de estratégias de marketing integradas para maximizar o ROI dos seus eventos e criar conexões duradouras com o público.",
    bullets: [
      "Análise de público-alvo",
      "Campanhas integradas",
      "Métricas e resultados",
    ],
  },
  {
    Icon: Monitor,
    title: "Tecnologia Audiovisual",
    description:
      "Equipamentos de última geração para apresentações, vídeos e interações digitais que elevam a experiência do seu evento.",
    bullets: [
      "Telas de alta resolução",
      "Som profissional",
      "Interatividade digital",
    ],
  },
  {
    Icon: Lightbulb,
    title: "Experiências Imersivas",
    description:
      "Criação de experiências imersivas e envolventes que conectam emocionalmente sua marca com o público participante.",
    bullets: [
      "Design de experiência",
      "Elementos interativos",
      "Engajamento emocional",
    ],
  },
  {
    Icon: Settings,
    title: "Gestão Completa",
    description:
      "Gestão completa do seu evento, desde o planejamento inicial até a execução final, garantindo que tudo saia perfeito.",
    bullets: ["Planejamento estratégico", "Coordenação total", "Suporte 24/7"],
  },
  {
    Icon: Award,
    title: "Branding e Identidade",
    description:
      "Desenvolvimento e aplicação consistente da identidade visual da sua marca em todos os pontos de contato do evento.",
    bullets: [
      "Identidade visual",
      "Materiais gráficos",
      "Consistência de marca",
    ],
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
        <div className="overflow-x-hidden overflow-y-visible -mx-2 sm:-mx-4">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, sIdx) => (
              // cada slide recebe um gutter interno para evitar corte do lado direito
              <div key={sIdx} className="w-full shrink-0 px-2 sm:px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <a
              href="#inicio"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Portfólio
            </a>
            <a
              href="#depoimentos"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Contato
            </a>
          </nav>
          <div className="flex items-center space-x-4">
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
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
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
      <section id="servicos" className="py-16 bg-background">
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
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-muted/30">
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
            renderItem={(ev) => <EventCard {...ev} />}
          />

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Camera className="w-5 h-5 mr-2" />
              Ver Portfólio Completo
            </Button>
          </div>
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
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome Completo
                    </label>
                    <Input
                      placeholder="Seu nome completo"
                      className="border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="border-border focus:border-accent"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input
                      placeholder="(11) 99999-9999"
                      className="border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Tipo de Evento
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground">
                      <option>Selecione o tipo</option>
                      <option>Evento Corporativo</option>
                      <option>Feira/Exposição</option>
                      <option>Lançamento de Produto</option>
                      <option>Conferência/Summit</option>
                      <option>Outro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Conte-nos mais sobre seu projeto..."
                    rows={4}
                    className="border-border focus:border-accent"
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Solicitação
                </Button>
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
                      <p className="text-muted-foreground">(31) 9617-5573</p>
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
                        contato@ax37marketing.com
                      </p>
                      <p className="text-muted-foreground">
                        orcamento@ax37marketing.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
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
              </Card>

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
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img
                src={ax37Logo}
                alt="AX37 Marketing Eventos"
                className="h-16 w-auto filter brightness-0 invert"
              />
              <p className="text-primary-foreground/80">
                Especialistas em marketing de eventos, criando experiências que
                conectam marcas ao seu público-alvo.
              </p>
            </div>

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

            <div>
              <h4 className="font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>(31) 9369-0883</li>
                <li>contato@ax37marketing.com</li>
                <li>Belo Horizonte - MG</li>
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
    </div>
  );
}

export default App;
