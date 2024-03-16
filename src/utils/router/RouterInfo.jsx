import Layout from '@components/Layout';

import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import TestPage from '@pages/TestPage';
import CallbackPage from '@pages/CallbackPage';

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
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'test',
        element: <TestPage />,
      },
      {
        path: 'callback',
        element: <CallbackPage />,
      },
    ],
  },
];
