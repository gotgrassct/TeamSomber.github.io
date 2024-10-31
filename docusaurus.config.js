// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Team Somber Documentation',
  tagline: 'Documentation for Team Somber plugins',
  url: 'https://teamsomber.github.io',
  baseUrl: '/TeamSomber.github.io/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TeamSomber',
  projectName: 'TeamSomber.github.io',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Plugins for Unreal Engine 5',
        logo: {
          alt: 'Team Somber Logo',
          src: 'assets/SOMBER.png',
        },
        items: [
          {
            href: 'https://github.com/your-org/modern-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Your Project Name`,
      },
    }),
};

module.exports = config; 