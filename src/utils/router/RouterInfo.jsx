/* 기본(베이스) 레이아웃 */
import Layout from '@components/Layout';
/* 로그인 */
import StartPage from '@pages/login/StartPage';
import LoginPage from '@pages/login/LoginPage';
import JoinPage from '@pages/login/JoinPage';
/* 서비스 */
import HomePage from '@pages/service/HomePage';
import MomentPage from '@pages/service/MomentPage';
import WritePage from '@pages/service/WritePage';
import RecordPage from '@pages/service/RecordPage';
/* 서비스 - 유령 테스트 */
import TestPage from '@pages/test/TestPage';
import LoadingPage from '@pages/test/LoadingPage';
import ResultPage from '@pages/test/ResultPage';
import MessagePage from '@pages/service/MessagePage';
import TestamentPage from '@pages/service/TestamentPage';
import QuestionPage from '@pages/service/QuestionPage';

export const RouterInfo = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <StartPage />,
      },
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
        path: 'record',
        element: <RecordPage />,
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
        path: 'message',
        element: <MessagePage />,
      },
      {
        path: 'testament',
        element: <TestamentPage />,
      },
      {
        path: 'question',
        element: <QuestionPage />,
      },
      {
        path: 'result/:resultNum',
        element: <ResultPage />,
      },
    ],
  },
];
