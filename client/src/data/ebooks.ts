export interface Ebook {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  cover: string;
  description: string;
  price: number;
  modules: number;
  chapters: number;
  duration: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  color: string;
  gradient: string;
  isPurchased?: boolean;
  progress?: number;
}

export const ebooks: Ebook[] = [
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    subtitle: 'Do Zero ao Avançado',
    icon: '🎯',
    cover: '📚',
    description:
      'Aprenda tudo sobre marketing digital, desde os fundamentos até estratégias avançadas de vendas e monetização.',
    price: 197,
    modules: 7,
    chapters: 35,
    duration: '40 horas',
    level: 'Avançado',
    color: 'from-blue-600 to-indigo-600',
    gradient: 'from-blue-400 to-indigo-400',
    isPurchased: true,
    progress: 0,
  },
  {
    id: 'seo-avancado',
    title: 'SEO Avançado',
    subtitle: 'Domine os Buscadores',
    icon: '🔍',
    cover: '🔎',
    description:
      'Domine SEO técnico, on-page, link building e ferramentas para dominar os resultados de busca do Google.',
    price: 147,
    modules: 6,
    chapters: 24,
    duration: '30 horas',
    level: 'Avançado',
    color: 'from-green-600 to-emerald-600',
    gradient: 'from-green-400 to-emerald-400',
    isPurchased: false,
    progress: 0,
  },
  {
    id: 'redes-sociais',
    title: 'Redes Sociais',
    subtitle: 'Estratégia Completa',
    icon: '📱',
    cover: '📲',
    description:
      'Crie estratégias de conteúdo, aumente engajamento e converta seguidores em clientes nas principais plataformas.',
    price: 127,
    modules: 5,
    chapters: 20,
    duration: '25 horas',
    level: 'Intermediário',
    color: 'from-pink-600 to-rose-600',
    gradient: 'from-pink-400 to-rose-400',
    isPurchased: false,
    progress: 0,
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    subtitle: 'Automação e Conversão',
    icon: '📧',
    cover: '✉️',
    description:
      'Construa listas de email, crie campanhas automatizadas e maximize ROI com estratégias de email marketing.',
    price: 97,
    modules: 4,
    chapters: 16,
    duration: '20 horas',
    level: 'Intermediário',
    color: 'from-orange-600 to-red-600',
    gradient: 'from-orange-400 to-red-400',
    isPurchased: false,
    progress: 0,
  },
];
