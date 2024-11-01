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
    component: ComponentCreator('/TeamSomber.github.io/', '4c4'),
    routes: [
      {
        path: '/TeamSomber.github.io/',
        component: ComponentCreator('/TeamSomber.github.io/', '703'),
        routes: [
          {
            path: '/TeamSomber.github.io/',
            component: ComponentCreator('/TeamSomber.github.io/', '4f5'),
            routes: [
              {
                path: '/TeamSomber.github.io/scf/getting_started/quickstart',
                component: ComponentCreator('/TeamSomber.github.io/scf/getting_started/quickstart', '3c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TeamSomber.github.io/scf/overview/installation',
                component: ComponentCreator('/TeamSomber.github.io/scf/overview/installation', 'e58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TeamSomber.github.io/scf/versions/1',
                component: ComponentCreator('/TeamSomber.github.io/scf/versions/1', '844'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TeamSomber.github.io/',
                component: ComponentCreator('/TeamSomber.github.io/', 'c44'),
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
