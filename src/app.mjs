export const state = {
  title: '@magic-themes',
  description: '@magic-themes. javascript css-in-js objects ready for usage in a @magic app.',

  branding: ['@magic', '-themes'],

  menu: [{ to: '/#gl-magic-themes', text: 'themes' }],

  seo: {
    name: '@magic-themes',
    url: `https://magic-themes.github.io/`,
    about:
      'magic is a jamstack generator. @magic-themes are packages extending the magical look and feel.',
    image: `https://magic-themes.github.io/magic-themes-preview.jpg`,
    author: {
      '@type': 'person',
      name: 'Jascha Ehrenreich',
      jobTitle: 'Technomancer',
      image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
      url: 'https://jaeh.at',
    },
  },

  hero: {
    title: 'themes',
    description: 'styles for your @magic app.',
    menu: [
      { to: '/#gl-magic-themes-li-docs', text: 'docs' },
      { to: '/#gl-magic-themes-li-example', text: 'example' },
      { to: '/#gl-magic-themes-li-project', text: 'project' },
      { to: '/#gl-magic-themes-li-reader', text: 'reader' },
    ],
  },

  footer: {
    one: {
      title: '@magic',
      before: ['themes', 'created by', 'Wizards & Witches'],
    },

    two: {
      title: 'projects',
      menu: [
        { to: 'https://github.com/magic/', text: '@magic' },
        { to: 'https://github.com/grundstein/', text: '@grundstein' },
        { to: 'https://github.com/webboot/', text: '@webboot' },
      ],
    },

    three: {
      title: 'social',
      menu: [
        { to: 'https://www.npmjs.com/org/magic-themes', text: 'npm' },
        { to: 'https://github.com/magic-themes/', text: 'github' },
      ],
    },
  },
}
