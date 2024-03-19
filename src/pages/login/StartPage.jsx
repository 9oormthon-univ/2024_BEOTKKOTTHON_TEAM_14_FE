import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '@assets/logo.png';
import ghost3D from '@assets/ghost3D.png';

const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: #000;

  overflow: hidden;

  color: var(--WHITE, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */

  .logo {
    margin-top: 6.38rem;

    width: 18rem;
    height: 7rem;
    flex-shrink: 0;
  }

  .ghost3D {
    width: 13.875rem;
    height: 14.375rem;
    flex-shrink: 0;
  }
`;

const Button = styled.div`
  width: 18.5625rem;
  height: 3.25rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 3.125rem;
  border: 1px solid #fff;

  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;

  &:hover {
    background: #5a5a5a;
  }
`;

function StartPage() {
  return (
    <Screen>
      <img className="logo" src={logo} />
      <span>
        <br />
        내일 내가 죽는다면?
        <br />
        당신의 죽음을 기획하세요.
      </span>

      <img className="ghost3D" src={ghost3D} />

      <Link to={`/login`}>
        <Button>로그인</Button>
      </Link>
      <Link to={`/join`}>
        <Button>회원가입</Button>
      </Link>
    </Screen>
  );
}

export default StartPage;
