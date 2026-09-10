import blogCoverImage from '../images/blog_cover_antigravity.png';

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'usando-figma-con-antigravity-1',
    title: 'Usando Figma con Antigravity',
    subtitle: 'Una nueva forma de desarrollar e iterrar.',
    date: '09-09-2026',
    tags: ['#UX', '#MCP', '#Antigravity'],
    image: blogCoverImage,
  },
  {
    id: 2,
    slug: 'usando-figma-con-antigravity-2',
    title: 'Usando Figma con Antigravity',
    subtitle: 'Una nueva forma de desarrollar e iterrar.',
    date: '09-09-2026',
    tags: ['#UX', '#MCP', '#Antigravity'],
    image: blogCoverImage,
  },
  {
    id: 3,
    slug: 'usando-figma-con-antigravity-3',
    title: 'Usando Figma con Antigravity',
    subtitle: 'Una nueva forma de desarrollar e iterrar.',
    date: '09-09-2026',
    tags: ['#UX', '#MCP', '#Antigravity'],
    image: blogCoverImage,
  },
  {
    id: 4,
    slug: 'diseno-de-sistemas-y-tokens-4',
    title: 'Diseño de Sistemas y Tokens',
    subtitle: 'Consistencia visual en modo día y noche.',
    date: '05-09-2026',
    tags: ['#DesignSystem', '#UI', '#Tokens'],
    image: blogCoverImage,
  },
  {
    id: 5,
    slug: 'arquitectura-css-con-sass-5',
    title: 'Arquitectura CSS con Sass',
    subtitle: 'Estructuración BEM y variables globales.',
    date: '01-09-2026',
    tags: ['#SCSS', '#Frontend', '#Arquitectura'],
    image: blogCoverImage,
  },
  {
    id: 6,
    slug: 'responsive-design-pixel-art-6',
    title: 'Responsive Design Pixel Art',
    subtitle: 'Adaptación sin distorsión en canvas flexible.',
    date: '28-08-2026',
    tags: ['#PixelArt', '#Responsive', '#CSS'],
    image: blogCoverImage,
  },
  {
    id: 7,
    slug: 'optimizacion-de-assets-svg-7',
    title: 'Optimización de Assets SVG',
    subtitle: 'Rendimiento y nitidez en pantallas Retina.',
    date: '20-08-2026',
    tags: ['#SVG', '#Performance', '#Web'],
    image: blogCoverImage,
  },
  {
    id: 8,
    slug: 'mcp-servers-en-desarrollo-web-8',
    title: 'MCP Servers en Desarrollo Web',
    subtitle: 'Integrando herramientas de diseño al flujo de código.',
    date: '15-08-2026',
    tags: ['#MCP', '#AI', '#DevTools'],
    image: blogCoverImage,
  },
  {
    id: 9,
    slug: 'animaciones-microinteracciones-9',
    title: 'Animaciones y Microinteracciones',
    subtitle: 'Detalles que elevan la experiencia del usuario.',
    date: '10-08-2026',
    tags: ['#UX', '#Animation', '#CSS'],
    image: blogCoverImage,
  },
  {
    id: 10,
    slug: 'accesibilidad-web-practica-10',
    title: 'Accesibilidad Web Práctica',
    subtitle: 'Diseñando para lectores de pantalla y teclado.',
    date: '02-08-2026',
    tags: ['#A11y', '#Inclusivo', '#HTML5'],
    image: blogCoverImage,
  },
  {
    id: 11,
    slug: 'react-hooks-avanzados-11',
    title: 'React Hooks Avanzados',
    subtitle: 'Manejando estado global y listeners dinámicos.',
    date: '25-07-2026',
    tags: ['#React', '#JavaScript', '#Hooks'],
    image: blogCoverImage,
  },
  {
    id: 12,
    slug: 'el-futuro-del-frontend-12',
    title: 'El Futuro del Frontend',
    subtitle: 'Reflexiones sobre inteligencia artificial y diseño.',
    date: '18-07-2026',
    tags: ['#Opinion', '#Tech', '#Futuro'],
    image: blogCoverImage,
  },
];

/**
 * Returns the most recent blog posts sorted by publication date (DD-MM-YYYY) descending.
 */
export const getRecentBlogPosts = (limit = 3) => {
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day).getTime();
  };

  return [...BLOG_POSTS]
    .sort((a, b) => parseDate(b.date) - parseDate(a.date) || b.id - a.id)
    .slice(0, limit);
};

export default BLOG_POSTS;
