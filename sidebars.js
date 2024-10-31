/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Somber Combat Framework',
      items: [
        {
          type: 'category',
          label: 'Overview',
          items: ['scf/overview/overview_about', 'scf/overview/installation'],
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: ['scf/getting_started/quickstart'],
        },
      ],
    },
  ],
};

module.exports = sidebars; 