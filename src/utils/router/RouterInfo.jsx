/* 기본(베이스) 레이아웃 */
import Layout from '@components/Layout';
/* 로그인 */
import StartPage from '@pages/login/StartPage';
import LoginPage from '@pages/login/LoginPage';
import JoinPage from '@pages/login/JoinPage';
/* 서비스 */
import HomePage from '@pages/service/HomePage';
import TestPage from '@pages/service/TestPage';
import MomentPage from '@pages/service/MomentPage';
import WritePage from '@pages/service/WritePage';

import LoadingPage from '@pages/service/LoadingPage';
import ResultPage from '@pages/service/ResultPage';

export const RouterInfo = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'start',
        element: <StartPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'join',
        element: <JoinPage />,
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
        path: 'moment',
        element: <MomentPage />,
      },
      {
        path: 'loading',
        element: <LoadingPage />,
      },
      {
        path: 'result',
        element: <ResultPage />,
      },
    ],
  },
];
