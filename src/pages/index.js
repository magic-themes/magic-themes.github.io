module.exports = () => [
  h2(Link({ to: 'https://magic.github.io' }, '@magic')),
  p('magic is a module/component based generator for static pages and serverless deployments.'),
  p(
    'goal of the project is to keep the client boilerplate footprint minimal yet easily extendable',
  ),
  GitBadges({
    project: 'magic/core',
    appveyor: 'jaeh/core',
  }),

  h2({ id: 'magic-themes' }, Link({ to: 'https://github.com/magic-themes' }, '@magic-themes')),
  p('javascript css-in-js objects ready for usage in the @magic app.'),

  ThemeList,
]
