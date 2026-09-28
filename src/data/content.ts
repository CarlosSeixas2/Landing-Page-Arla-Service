import media01 from "../assets/midia/01.mp4";
import media02 from "../assets/midia/02.mp4";
import media03 from "../assets/midia/03.mp4";
import media04 from "../assets/midia/04.mp4";
import media05 from "../assets/midia/05.mp4";
import media06 from "../assets/midia/06.mp4";
import media07 from "../assets/midia/07.mp4";
import media08 from "../assets/midia/08.mp4";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag?: string;
}

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  span?: string;
}

export const SITE_CONFIG = {
  name: "ARLA Service",
  tagline: "Oficina Mecânica Automotiva de Alta Precisão",
  city: "Parnaíba - PI",
  address: "Parnaíba - PI",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Arla+Service%2C+Parna%C3%ADba%2C+PI",
  whatsappNumber: "5586999999999",
  whatsappMessage: "Olá! Gostaria de agendar uma avaliação na ARLA Service.",
  instagramUrl: "https://www.instagram.com/arla_service/",
  instagramHandle: "@arla_service",
  phone: "Confira os canais oficiais",
  stats: {
    satisfiedClients: "+500",
    experienceYears: "Atendimento local",
    satisfactionRate: "Serviços automotivos",
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "preventive",
    title: "Manutenção preventiva",
    description:
      "Revisões e cuidados programados para manter o veículo sempre em perfeitas condições de uso.",
    iconName: "Wrench01Icon",
    tag: "Essencial",
  },
  {
    id: "diagnostic",
    title: "Diagnóstico automotivo",
    description:
      "Identificação computadorizada de falhas e avaliação técnica completa do veículo.",
    iconName: "CpuIcon",
    tag: "Scanner 3D",
  },
  {
    id: "mechanics",
    title: "Mecânica geral",
    description:
      "Serviços mecânicos completos de motor, transmissão e componentes para diferentes necessidades.",
    iconName: "Car01Icon",
    tag: "Completo",
  },
  {
    id: "inspection",
    title: "Revisão",
    description:
      "Avaliação minuciosa de todos os principais itens de segurança e desempenho do veículo.",
    iconName: "ShieldCheckIcon",
    tag: "Checklist",
  },
  {
    id: "brakes-suspension",
    title: "Suspensão e freios",
    description:
      "Manutenção dos componentes vitais responsáveis por estabilidade, frenagem e segurança.",
    iconName: "Target01Icon",
    tag: "Segurança",
  },
  {
    id: "electrical",
    title: "Sistema elétrico",
    description:
      "Diagnóstico e manutenção de baterias, alternadores, chicotes e componentes elétricos.",
    iconName: "FlashIcon",
    tag: "Precisão",
  },
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    number: "01",
    title: "Experiência",
    description:
      "Anos de atuação no mercado automotivo e profundo conhecimento técnico no que fazemos.",
    iconName: "Award01Icon",
  },
  {
    number: "02",
    title: "Atendimento próximo",
    description:
      "Você fala diretamente com quem entende do assunto e que realmente se importa com seu carro.",
    iconName: "CustomerSupportIcon",
  },
  {
    number: "03",
    title: "Diagnóstico preciso",
    description:
      "Tecnologia de ponta e profissionais qualificados para identificar o problema certo sem enrolação.",
    iconName: "Target01Icon",
  },
  {
    number: "04",
    title: "Serviço de qualidade",
    description:
      "Trabalhamos exclusivamente com peças de primeira linha e total compromisso com o seu veículo.",
    iconName: "CheckmarkBadge01Icon",
  },
];

export const HOW_WE_WORK_DATA: StepItem[] = [
  {
    number: "01",
    title: "Agendamento",
    description:
      "Contato rápido via WhatsApp para escolher o melhor horário para você.",
  },
  {
    number: "02",
    title: "Avaliação",
    description:
      "Recepção do veículo com inspeção visual detalhada e checklist de entrada.",
  },
  {
    number: "03",
    title: "Diagnóstico",
    description:
      "Varredura computadorizada e emissão de orçamento transparente e claro.",
  },
  {
    number: "04",
    title: "Execução",
    description:
      "Mecânicos especializados realizam o serviço com ferramentas de alta precisão.",
  },
  {
    number: "05",
    title: "Entrega",
    description:
      "Teste de rodagem e garantia assegurada na entrega das chaves.",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    name: "João Silva",
    role: "Cliente",
    comment:
      "Excelente atendimento e serviço! Pessoal muito competente e atencioso. Meu carro ficou muito bom e pronto no prazo.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "2",
    name: "Maria Oliveira",
    role: "Cliente",
    comment:
      "Serviço rápido e muito bem feito. Já sou cliente de anos e sempre sou bem atendida com total transparência.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "3",
    name: "Rafael Souza",
    role: "Cliente",
    comment:
      "Profissionais qualificados e preços justos. Diagnosticaram um barulho que nenhuma outra oficina encontrou. Recomendo de olhos fechados!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quais veículos vocês atendem?",
    answer:
      "Atendemos veículos nacionais e importados de todas as principais montadoras, incluindo carros de passeio, SUVs, utilitários e caminhonetes leves, tanto modelos a combustão quanto híbridos.",
  },
  {
    id: "faq-2",
    question: "É necessário agendar o serviço?",
    answer:
      "Recomendamos fortemente o agendamento prévio para garantir que nossa equipe e elevadores estejam disponíveis para atendê-lo sem espera. No entanto, também atendemos emergências conforme disponibilidade.",
  },
  {
    id: "faq-3",
    question: "Posso solicitar orçamento pelo WhatsApp?",
    answer:
      "Sim! Você pode nos enviar uma mensagem detalhando a necessidade do veículo. Para serviços que exigem diagnóstico detalhado, combinamos uma avaliação presencial rápida e sem compromisso.",
  },
  {
    id: "faq-4",
    question: "Quanto tempo demora o serviço?",
    answer:
      "O tempo varia de acordo com o serviço. Manutenções preventivas e trocas de óleo costumam levar de 1 a 2 horas, enquanto intervenções mais complexas são combinadas previamente com cronograma transparente.",
  },
  {
    id: "faq-5",
    question: "Onde fica a oficina?",
    answer:
      "Estamos localizados em ponto de fácil acesso em Parnaíba - PI, com estacionamento amplo e ambiente preparado com sala de espera confortável.",
  },
  {
    id: "faq-6",
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartões de crédito (com opção de parcelamento), débito, PIX e dinheiro. Emitimos nota fiscal e certificado de garantia para todos os serviços realizados.",
  },
];

export interface InstagramMediaItem {
  id: string;
  type: "video" | "image";
  title: string;
  category: string;
  mediaUrl: string;
  thumbnailUrl: string;
  caption: string;
  likes: number;
  comments: number;
  views?: string;
  postUrl: string;
  embedUrl?: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

export const INSTAGRAM_MEDIA_DATA: InstagramMediaItem[] = [
  {
    id: "instagram-DaNt5_DvM4j",
    type: "video",
    title: "Problema resolvido",
    category: "Instagram",
    mediaUrl: media01,
    thumbnailUrl: "",
    caption:
      "100% resolvida para a alegria da criançada. Confira o post original no Instagram.",
    likes: 0,
    comments: 0,
    postUrl: "https://www.instagram.com/p/DaNt5_DvM4j/",
    aspectRatio: "square",
  },
  {
    id: "instagram-DavZVghvbT8",
    type: "video",
    title: "Conhecimento e experiência",
    category: "Instagram",
    mediaUrl: media02,
    thumbnailUrl: "",
    caption:
      "Nunca subestime ninguém. Um registro do trabalho e da experiência da ARLA Service.",
    likes: 0,
    comments: 0,
    postUrl: "https://www.instagram.com/p/DavZVghvbT8/",
    aspectRatio: "square",
  },
  {
    id: "instagram-DbOCsY8v6xJ",
    type: "video",
    title: "Diagnóstico preciso, solução eficiente",
    category: "Instagram",
    mediaUrl: media03,
    thumbnailUrl: "",
    caption: "Mais um serviço entregue com sucesso para transporte e locação.",
    likes: 0,
    comments: 0,
    postUrl: "https://www.instagram.com/p/DbOCsY8v6xJ/",
    aspectRatio: "square",
  },
  {
    id: "instagram-DYXuyBiPwYM",
    type: "video",
    title: "Problema resolvido em parceria",
    category: "Instagram",
    mediaUrl: media04,
    thumbnailUrl: "",
    caption:
      "Problema resolvido em parceria, com confiança e qualidade no trabalho.",
    likes: 0,
    comments: 0,
    postUrl: "https://www.instagram.com/p/DYXuyBiPwYM/",
    aspectRatio: "square",
  },
  {
    id: "instagram-DYUqTv_tKFg",
    type: "video",
    title: "Problema resolvido",
    category: "Instagram",
    mediaUrl: media05,
    thumbnailUrl: "",
    caption:
      "Problema resolvido. Serviço de qualidade realizado pela ARLA Service.",
    likes: 0,
    comments: 0,
    postUrl: "https://www.instagram.com/p/DYUqTv_tKFg/",
    aspectRatio: "square",
  },
  {
    id: "instagram-DXINxkBD2zk",
    type: "video",
    title: "Trabalho em parceria",
    category: "Instagram",
    mediaUrl: media06,
    thumbnailUrl: "",
    caption: "Registro de mais um atendimento realizado em parceria.",
    likes: 0,
    comments: 0,
    postUrl: "https://www.instagram.com/p/DXINxkBD2zk/",
    aspectRatio: "square",
  },
  {
    id: "instagram-DXE9kh5DT7s",
    type: "video",
    title: "Serviço resolvido",
    category: "Instagram",
    mediaUrl: media07,
    thumbnailUrl: "",
    caption:
      "Resolvido. Mais um atendimento realizado pela ARLA Service no litoral piauiense.",
    likes: 0,
    comments: 0,
    postUrl: "https://www.instagram.com/p/DXE9kh5DT7s/",
    aspectRatio: "square",
  },
  {
    id: "instagram-DWy4O2BDTv6",
    type: "video",
    title: "Diagnóstico avançado",
    category: "Instagram",
    mediaUrl: media08,
    thumbnailUrl: "",
    caption:
      "Após meses enfrentando problemas, o cliente ficou livre das falhas com diagnóstico avançado, qualidade e precisão.",
    likes: 0,
    comments: 0,
    postUrl: "https://www.instagram.com/p/DWy4O2BDTv6/",
    aspectRatio: "square",
  },
];
