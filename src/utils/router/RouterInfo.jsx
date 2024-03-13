import Layout from '@components/Layout';

import HomePage from '@pages/HomePage';

export const RouterInfo = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      ]
    }
];
