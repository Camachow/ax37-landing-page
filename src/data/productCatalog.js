// src/data/productCatalog.js
import {
  Building2,
  Wrench,
  MapPin,
  Camera,
  Package,
  Settings,
} from "lucide-react";

import { img } from "./images";



export const productCatalog = [
  {
    Icon: Building2,
    title: "Portal & Fachada de Acesso",
    caption: "Entrada principal harmonizada que destaca a marca.",
    image: img("portal"),
    alt: "Portal de acesso com branding",
    details: `Refere-se à entrada principal. Torna a chegada harmônica visualmente, informando e destacando a entrada e a marca.`,
  },
  {
    Icon: Building2,
    title: "Estandes",
    caption: "Espaço de exposição para produtos e serviços.",
    image: img("estande"),
    alt: "Estande corporativo moderno",
    details: `Espaço reservado em feiras/exposições para apresentar produtos e serviços ao público.`,
  },
  {
    Icon: Building2,
    title: "Quiosques",
    caption: "Ponto compacto em locais de fluxo para divulgação e venda.",
    image: img("quiosque"),
    alt: "Quiosque em área de circulação",
    details: `Espaço físico instalado em locais de circulação para divulgar e vender produtos e serviços.`,
  },
  {
    Icon: Wrench,
    title: "Deck para Parklet",
    caption: "Plataforma que transforma vaga em área de convivência.",
    image: img("parklet-deck"),
    details: `Plataforma instalada em área antes destinada a estacionamento para criar espaço de lazer e convívio.`,
  },
  {
    Icon: MapPin,
    title: "Meeting Point (Ponto de Encontro)",
    caption: "Área integrada ao mall para encontros e ativações.",
    image: img("meeting-point"),
    details: `Integra paisagismo, design e arquitetura ao ambiente de compras...`,
  },
  {
    Icon: Camera,
    title: "Cenários Instagramáveis",
    caption: "Cenários fotogênicos que incentivam compartilhamento.",
    image: img("instagramable-backgrounds"),
    details: `Áreas projetadas e decoradas para fotos e divulgação nas redes sociais.`,
  },
  {
    Icon: Package,
    title: "Contêineres Customizados",
    caption: "Estruturas modulares personalizadas, rápidas e sustentáveis.",
    image: img("custom-container"),
    details: `Estruturas sob medida... rapidez, economia, sustentabilidade, durabilidade e adaptação.`,
  },
  {
    Icon: Camera,
    title: "Outdoor",
    caption: "Mídia externa de grande formato e alto alcance.",
    image: img("outdoor"),
    details: `Publicidade externa impressa ou digital em grande escala...`,
  },
  // {
  //   Icon: Package,
  //   title: "Totem de Mídia",
  //   caption: "Peça vertical informativa ou publicitária (digital/estático).",
  //   image: img("totem"),
  //   details: `Pode ser informativo ou publicitário; digitais e estáticos.`,
  // },
  {
    Icon: Package,
    title: "PDV & Expositores",
    caption: "Ambiente de compra com expositores que influenciam decisão.",
    image: img("sale-point"),
    details: `PDV organizado, limpo, bem iluminado e confortável... Expositores destacam produtos.`,
  },
  {
    Icon: Wrench,
    title: "Mobiliário para Eventos",
    caption: "Conforto e funcionalidade para o seu espaço.",
    image: img("event-forniture"),
    details: `Mobiliário especializado para conforto e funcionalidade.`,
  },
  {
    Icon: Package,
    title: "Materiais Promocionais",
    caption: "Banners, flyers e brindes personalizados.",
    image: img("promotional-materials"),
    details: `Materiais promocionais de alta qualidade.`,
  },
  {
    Icon: Settings,
    title: "Soluções Completas para Eventos",
    caption: "Infra completa e gestão de equipes de apoio.",
    image: img("complete-solutions"),
    details: `Tendas, palcos, banheiros, buffet, segurança, limpeza etc.`,
  },
];
