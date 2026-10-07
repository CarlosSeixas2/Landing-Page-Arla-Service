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
  iconName: string;
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
  tagline:
    "Oficina Especializada em Linha Diesel • Softwares de Montadora para Caminhões, Pick-Ups, Ônibus, Máquinas e Vans",
  city: "Parnaíba - PI",
  address: "Av. Evandro Lins e Silva",
  neighborhood: "Bairro Primavera",
  cep: "64.213-210",
  email: "arlaservicephb@gmail.com",
  coordinates: {
    lat: -2.96476,
    lng: -41.7620,
  },
  entranceCoordinates: {
    lat: -2.9650705,
    lng: -41.7597557,
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=-2.9650705%2C-41.7597557",
  whatsappNumber: "86995469234",
  whatsappMessage:
    "Olá! Gostaria de agendar uma avaliação técnica na ARLA Service.",
  instagramUrl: "https://www.instagram.com/arla_service/",
  instagramHandle: "@arla_service",
  phone: "Confira os canais oficiais",
  stats: {
    satisfiedClients: "+500",
    experienceYears: "Atendimento técnico local",
    satisfactionRate: "Especialistas em Linha Diesel",
  },
};

export const DIESEL_SPECIALTIES = [
  {
    id: "euro5",
    label: "Euro 5",
    desc: "Injeção e Emissões",
    iconName: "ShieldCheckIcon",
  },
  {
    id: "euro6",
    label: "Euro 6",
    desc: "Pós-tratamento & SCR",
    iconName: "CpuIcon",
  },
  {
    id: "pickups",
    label: "Pick-Ups",
    desc: "Linha Diesel Leve",
    iconName: "Car01Icon",
  },
  {
    id: "caminhoes",
    label: "Caminhões",
    desc: "Linha Diesel Pesada",
    iconName: "DumpTruckIcon",
  },
  {
    id: "diesel-leve",
    label: "Diesel Leve",
    desc: "Utilitários & Vans",
    iconName: "GarbageTruckIcon",
  },
  {
    id: "diesel-pesado",
    label: "Diesel Pesado",
    desc: "Cavalos & Frotas",
    iconName: "SemiTruckIcon",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "preventive",
    title: "Manutenção Preventiva e Corretiva",
    description:
      "Revisões programadas, troca técnica de fluidos, filtros de combustível/óleo e checagem completa para evitar paradas inesperadas da sua operação.",
    iconName: "Wrench01Icon",
    tag: "Linha Diesel",
  },
  {
    id: "diagnostic",
    title: "Diagnóstico Avançado",
    description:
      "Temos todos os softwares de montadora para o diagnóstico do seu veículo: caminhão, pick-up, ônibus, máquinas e vans.",
    iconName: "CpuIcon",
    tag: "Software de Montadora",
  },
  {
    id: "mechanics",
    title: "Reparação Mecânica de Motores",
    description:
      "Desmontagem, ajuste e reparo técnico de motores diesel, cabeçotes, turbinas, bombas de alta pressão e componentes mecânicos de alta exigência.",
    iconName: "ToolsIcon",
    tag: "Alta Precisão",
  },
  {
    id: "euro-systems",
    title: "Sistemas Euro 5 e Euro 6",
    description:
      "Diagnóstico e manutenção técnica em sistemas de controle de emissões, catalisadores SCR, filtros de partículas (DPF) e dosagem de ARLA 32.",
    iconName: "DeliveryTruck02Icon",
    tag: "Euro 5 & Euro 6",
  },
  {
    id: "pickups-light",
    title: "Pick-Ups e Linha Diesel Leve",
    description:
      "Atendimento especializado para caminhonetes e utilitários diesel: suspensão reforçada, freios, transmissão, tração 4x4 e motorização.",
    iconName: "Car01Icon",
    tag: "Pick-Ups & Vans",
  },
  {
    id: "heavy-trucks",
    title: "Caminhões, Linha Pesada e Máquinas",
    description:
      "Suporte mecânico e elétrico estruturado para caminhões, cavalos mecânicos e equipamentos pesados a diesel, garantindo máxima disponibilidade.",
    iconName: "TruckIcon",
    tag: "Pesados & Máquinas",
  },
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    number: "01",
    title: "Especialização Técnica em Diesel",
    description:
      "Equipe focada na engenharia e particularidades dos motores diesel, desde utilitários leves até caminhões pesados e máquinas.",
    iconName: "Award01Icon",
  },
  {
    number: "02",
    title: "Diagnóstico Eletrônico Avançado",
    description:
      "Temos todos os softwares de montadora para o diagnóstico do seu veículo: caminhão, pick-up, ônibus, máquinas e vans.",
    iconName: "CpuIcon",
  },
  {
    number: "03",
    title: "Domínio dos Padrões Euro 5 e Euro 6",
    description:
      "Conhecimento técnico aprofundado nos sistemas modernos de injeção eletrônica common rail, ARLA 32, DPF e pós-tratamento.",
    iconName: "ShieldCheckIcon",
  },
  {
    number: "04",
    title: "Transparência e Confiabilidade",
    description:
      "Orçamento claro antes da execução, uso de peças com procedência e garantia formal de peças e serviços prestados.",
    iconName: "CheckmarkBadge01Icon",
  },
];

export const HOW_WE_WORK_DATA: StepItem[] = [
  {
    number: "01",
    title: "Contato e Triagem",
    description:
      "Atendimento direto via WhatsApp para entender os sintomas e necessidades do seu veículo diesel.",
    iconName: "Clock01Icon",
  },
  {
    number: "02",
    title: "Recepção e Avaliação",
    description:
      "Inspeção visual detalhada e checklist de entrada com foco nos sistemas mecânicos e elétricos.",
    iconName: "ShieldCheckIcon",
  },
  {
    number: "03",
    title: "Diagnóstico Avançado",
    description:
      "Varredura computadorizada com scanner diesel e apresentação de orçamento transparente.",
    iconName: "CpuIcon",
  },
  {
    number: "04",
    title: "Execução Técnica",
    description:
      "Reparação e manutenção realizadas com ferramentas de precisão e peças de alto padrão.",
    iconName: "Wrench01Icon",
  },
  {
    number: "05",
    title: "Validação e Entrega",
    description:
      "Testes de funcionamento e entrega com garantia formal de serviço e peças aplicadas.",
    iconName: "CheckmarkBadge01Icon",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    name: "Carlos Mendes",
    role: "Proprietário de Pick-Up Diesel",
    comment:
      "Excelente atendimento técnico. Identificaram rapidamente uma falha de injeção na minha pick-up que outras oficinas não resolveram. Serviço preciso e transparente.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "2",
    name: "Marcos Ribeiro",
    role: "Gestor de Frota / Transporte",
    comment:
      "Atendimento ágil e diagnóstico preciso nos caminhões da nossa empresa. Reduziram o tempo de parada da nossa frota com total profissionalismo.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "3",
    name: "Antônio Ferreira",
    role: "Motorista Autônomo",
    comment:
      "Oficina com estrutura de ponta e especialistas de verdade em sistemas Euro 5 e Euro 6. Honestidade no orçamento e entrega rigorosamente no prazo.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quais tipos de veículos e equipamentos a ARLA Service atende?",
    answer:
      "Atendemos toda a linha diesel: pick-ups, caminhonetes, utilitários leves, caminhões de pequeno, médio e grande porte, cavalos mecânicos e máquinas a diesel.",
  },
  {
    id: "faq-2",
    question: "Vocês atendem veículos com tecnologia Euro 5 e Euro 6?",
    answer:
      "Sim. Possuímos capacitação e equipamentos específicos para diagnóstico e manutenção de sistemas Euro 5 e Euro 6, incluindo injeção eletrônica common rail, sistema de dosagem de ARLA 32, catalisadores SCR e filtros de partículas (DPF).",
  },
  {
    id: "faq-3",
    question: "Como funciona o diagnóstico eletrônico avançado?",
    answer:
      "Temos todos os softwares de montadora para o diagnóstico do seu veículo: caminhão, pick-up, ônibus, máquinas e vans. Nosso equipamento se comunica diretamente com a central eletrônica (ECU) para identificar falhas intermitentes, parâmetros de injeção, sensores e atuadores com extrema precisão.",
  },
  {
    id: "faq-4",
    question: "É necessário agendar antes de levar o veículo ou caminhão?",
    answer:
      "Recomendamos o agendamento prévio via WhatsApp para organizarmos o box de atendimento e diminuirmos o tempo de parada do seu veículo. Em situações de urgência técnica, atendemos conforme a disponibilidade imediata da oficina.",
  },
  {
    id: "faq-5",
    question: "Vocês atendem frotas comerciais e empresas de transporte?",
    answer:
      "Sim. Oferecemos suporte técnico para empresas, transportadoras e frotistas, com atendimento estruturado em manutenção preventiva e corretiva para manter a disponibilidade dos veículos.",
  },
  {
    id: "faq-6",
    question:
      "Quais formas de pagamento são aceitas e como funciona a garantia?",
    answer:
      "Aceitamos cartões de crédito (com parcelamento), débito, PIX e opções de faturamento para pessoas jurídicas sob consulta prévia. Todos os serviços contam com emissão de nota fiscal e termo de garantia.",
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
