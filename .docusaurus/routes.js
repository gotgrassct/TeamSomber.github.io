import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '081'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'a95'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '300'),
            routes: [
              {
                path: '/scf/api/juggle/juggle_about',
                component: ComponentCreator('/scf/api/juggle/juggle_about', '355'),
                exact: true
              },
              {
                path: '/scf/getting_started/quickstart',
                component: ComponentCreator('/scf/getting_started/quickstart', '1f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scf/overview/installation',
                component: ComponentCreator('/scf/overview/installation', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '32d'),
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
