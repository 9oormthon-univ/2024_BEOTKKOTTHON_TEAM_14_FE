import Layout from '@components/Layout';

import HomePage from '@pages/HomePage';
import WritePage from '../../pages/WritePage';

export const RouterInfo = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'write',
        element: <WritePage/>,
      },
      ]
    }
];
