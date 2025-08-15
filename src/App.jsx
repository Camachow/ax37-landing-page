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
} from "lucide-react";
import heroImage from "./assets/hero-exposition.jpg";
import standCorporativo from "./assets/stand-corporativo.jpg";
import feiraTecnologica from "./assets/feira-tecnologica.jpg";
import exposicaoCultural from "./assets/exposicao-cultural.jpg";
import ax37Logo from "./assets/ax37-logo.png";
import "./App.css";
import ThemeToggle from "./components/ui/theme-toggle";

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors border border-accent/20">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Stands Personalizados
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  Criação e montagem de stands únicos e personalizados, com
                  design exclusivo que reflete a identidade da sua marca e
                  maximiza o engajamento.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Design exclusivo
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Materiais premium
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Montagem profissional
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors border border-accent/20">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Estratégia de Marketing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  Desenvolvimento de estratégias de marketing integradas para
                  maximizar o ROI dos seus eventos e criar conexões duradouras
                  com o público.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Análise de público-alvo
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Campanhas integradas
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Métricas e resultados
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors border border-accent/20">
                  <Monitor className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Tecnologia Audiovisual
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  Equipamentos de última geração para apresentações, vídeos e
                  interações digitais que elevam a experiência do seu evento.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Telas de alta resolução
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Som profissional
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Interatividade digital
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors border border-accent/20">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Experiências Imersivas
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  Criação de experiências imersivas e envolventes que conectam
                  emocionalmente sua marca com o público participante.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Design de experiência
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Elementos interativos
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Engajamento emocional
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors border border-accent/20">
                  <Settings className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Gestão Completa
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  Gestão completa do seu evento, desde o planejamento inicial
                  até a execução final, garantindo que tudo saia perfeito.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Planejamento estratégico
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Coordenação total
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Suporte 24/7
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors border border-accent/20">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Branding e Identidade
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  Desenvolvimento e aplicação consistente da identidade visual
                  da sua marca em todos os pontos de contato do evento.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Identidade visual
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Materiais gráficos
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Consistência de marca
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={standCorporativo}
                  alt="Stand Inovador Tech Corp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-gray-800">
                    Stand Corporativo
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Stand Inovador Tech Corp
                </h3>
                <p className="text-gray-600 text-sm">
                  Stand corporativo de 200m² com tecnologia interativa,
                  iluminação LED e design moderno para feira de tecnologia.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={feiraTecnologica}
                  alt="Feira de Tecnologia 2024"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-gray-800">
                    Feira Tecnológica
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Feira de Tecnologia 2024
                </h3>
                <p className="text-gray-600 text-sm">
                  Montagem completa de pavilhão para feira tecnológica com 50
                  expositores e infraestrutura completa.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={exposicaoCultural}
                  alt="Exposição Arte Moderna"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-gray-800">
                    Exposição Cultural
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Exposição Arte Moderna
                </h3>
                <p className="text-gray-600 text-sm">
                  Cenografia especial para exposição cultural com iluminação
                  cênica e elementos interativos únicos.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={standCorporativo}
                  alt="Stand Empresarial Premium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-gray-800">
                    Stand Corporativo
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Stand Empresarial Premium
                </h3>
                <p className="text-gray-600 text-sm">
                  Design exclusivo com materiais premium, área de reunião e
                  apresentação multimídia integrada.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={feiraTecnologica}
                  alt="Pavilhão Inovação"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-gray-800">
                    Feira Tecnológica
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Pavilhão Inovação
                </h3>
                <p className="text-gray-600 text-sm">
                  Espaço completo para demonstrações tecnológicas com
                  infraestrutura audiovisual de última geração.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={exposicaoCultural}
                  alt="Galeria Contemporânea"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-gray-800">
                    Exposição Cultural
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Galeria Contemporânea
                </h3>
                <p className="text-gray-600 text-sm">
                  Ambiente museológico com iluminação especializada e sistemas
                  de segurança para obras de arte.
                </p>
              </CardContent>
            </Card>
          </div>

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
              Estamos prontos para transformar sua visão em realidade. Entre em
              contato conosco e vamos começar a planejar seu evento perfeito.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Solicite seu Orçamento
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato em até 24
                  horas.
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
                      <p className="text-muted-foreground">(11) 9999-9999</p>
                      <p className="text-muted-foreground">(11) 3333-3333</p>
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
                <li>(11) 9999-9999</li>
                <li>contato@ax37marketing.com</li>
                <li>São Paulo - SP</li>
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
