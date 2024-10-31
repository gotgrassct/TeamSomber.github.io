const config = {
  title: 'TEAM SOMBER',
  tagline: 'TEAM SOMBER',
  favicon: 'img/favicon.ico',
  url: 'https://github.com',
  baseUrl: '/TeamSomber.github.io/',
  organizationName: 'gotgrassct',
  projectName: 'TeamSomber.github.io',
  deploymentBranch: 'gh-pages',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
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
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Your Project Name`,
    },
  },
};

module.exports = config; 