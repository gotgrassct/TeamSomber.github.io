const config = {
  title: 'Modern Docs',
  tagline: 'Clean, Modern Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://your-domain.com',
  baseUrl: '/',
  organizationName: 'your-org',
  projectName: 'modern-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
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