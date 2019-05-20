export const View = () => [
  h1([Link({ to: 'https://magic.github.io' }, '@magic')]),
  p('magic is a module/component based generator for static pages and serverless deployments.'),
  p(
    'goal of the project is to keep the client boilerplate footprint minimal yet easily extendable',
  ),

  GitBadges('magic/core'),

  ThemeList(),
]
