export const SITE = {
  website: "https://sistema10x.github.io/", // replace this with your deployed domain
  author: "Sistema 10X",
  profile: "https://github.com/Sistema10X",
  desc: "Documentação e Anotações de Projeto da 10X.",
  title: "Sistema 10X Docs",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Editar",
    url: "https://github.com/Sistema10X/Sistema10X.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "pt-BR", // html lang code. Set this empty and default will be "en"
  timezone: "America/Sao_Paulo", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
