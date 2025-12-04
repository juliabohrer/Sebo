import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Diz ao VitePress que os .md estão na raiz do projeto
  srcDir: ".",

  title: "Sebo Eclipse",
  description:
    "O Sebo Digital é uma plataforma de e-commerce focada em livros usados. Sua finalidade principal é criar um ponto de encontro digital para o mercado de segunda mão de livros, garantindo que títulos raros e esgotados possam ser facilmente encontrados e adquiridos.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
