import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/TeamSomber.github.io/__docusaurus/debug',
    component: ComponentCreator('/TeamSomber.github.io/__docusaurus/debug', '659'),
    exact: true
  },
  {
    path: '/TeamSomber.github.io/__docusaurus/debug/config',
    component: ComponentCreator('/TeamSomber.github.io/__docusaurus/debug/config', '37d'),
    exact: true
  },
  {
    path: '/TeamSomber.github.io/__docusaurus/debug/content',
    component: ComponentCreator('/TeamSomber.github.io/__docusaurus/debug/content', 'd1a'),
    exact: true
  },
  {
    path: '/TeamSomber.github.io/__docusaurus/debug/globalData',
    component: ComponentCreator('/TeamSomber.github.io/__docusaurus/debug/globalData', 'c1d'),
    exact: true
  },
  {
    path: '/TeamSomber.github.io/__docusaurus/debug/metadata',
    component: ComponentCreator('/TeamSomber.github.io/__docusaurus/debug/metadata', 'd36'),
    exact: true
  },
  {
    path: '/TeamSomber.github.io/__docusaurus/debug/registry',
    component: ComponentCreator('/TeamSomber.github.io/__docusaurus/debug/registry', '66f'),
    exact: true
  },
  {
    path: '/TeamSomber.github.io/__docusaurus/debug/routes',
    component: ComponentCreator('/TeamSomber.github.io/__docusaurus/debug/routes', '4f5'),
    exact: true
  },
  {
    path: '/TeamSomber.github.io/',
    component: ComponentCreator('/TeamSomber.github.io/', '5f1'),
    routes: [
      {
        path: '/TeamSomber.github.io/',
        component: ComponentCreator('/TeamSomber.github.io/', '63d'),
        routes: [
          {
            path: '/TeamSomber.github.io/',
            component: ComponentCreator('/TeamSomber.github.io/', '77d'),
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
                path: '/TeamSomber.github.io/scf/overview/overview_about',
                component: ComponentCreator('/TeamSomber.github.io/scf/overview/overview_about', 'd78'),
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
