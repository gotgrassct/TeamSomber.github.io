import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/TeamSomber.github.io/',
    component: ComponentCreator('/TeamSomber.github.io/', 'c41'),
    routes: [
      {
        path: '/TeamSomber.github.io/',
        component: ComponentCreator('/TeamSomber.github.io/', '168'),
        routes: [
          {
            path: '/TeamSomber.github.io/',
            component: ComponentCreator('/TeamSomber.github.io/', 'e0d'),
            routes: [
              {
                path: '/TeamSomber.github.io/scf/getting_started/quickstart',
                component: ComponentCreator('/TeamSomber.github.io/scf/getting_started/quickstart', '623'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TeamSomber.github.io/scf/overview/installation',
                component: ComponentCreator('/TeamSomber.github.io/scf/overview/installation', 'eff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TeamSomber.github.io/',
                component: ComponentCreator('/TeamSomber.github.io/', 'eb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
