/* 기본(베이스) 레이아웃 */
import Layout from '@components/Layout';
/* 로그인 */
import LoginPage from '@pages/login/LoginPage';
import CallbackPage from '@pages/login/CallbackPage';
/* 서비스 */
import HomePage from '@pages/service/HomePage';
import TestPage from '@pages/service/TestPage';
import MomentPage from '@pages/service/MomentPage';
import WritePage from '@pages/service/WritePage';
import TestamentPage from '@pages/service/TestamentPage';

export const RouterInfo = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'callback',
        element: <CallbackPage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'test',
        element: <TestPage />,
      },
      {
        path: 'write',
        element: <WritePage />,
      },
      {
        path: 'testament',
        element: <TestamentPage />,
      },
      {
        path: 'moment',
        element: <MomentPage />,
      },
    ],
  },
];
