import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import home_logo from '@assets/home_logo.png';
import home_1 from '@assets/home_1.png';
import home_2 from '@assets/home_2.png';
import home_3 from '@assets/home_3.png';
import home_4 from '@assets/home_4.png';
import home_6 from '@assets/home_6.png';
import home_7 from '@assets/home_7.png';

const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  background: #000;
  overflow: auto;
`;

const Logo = styled.div`
  width: 100%;
  padding-top: 3.125rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;

  color: #fff;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */
  text-align: center;

  img {
    width: 19.375rem;
    height: 9.25rem;
    flex-shrink: 0;
  }
`;

const MenuArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const MenuBox = styled.div`
  width: 8.9375rem;
  height: 12.9375rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;

  border-radius: 0.75rem;
  background: #fff;

  color: var(--BLACK, #000);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  text-align: center;

  img {
    width: 6.125rem;
    height: 5.5625rem;
    flex-shrink: 0;
  }

  .bold {
    font-weight: 800;
  }
`;

const ButtonArea = styled.div`
  width: 100%;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 7.0625rem;
    height: 2.75rem;

    border-radius: 3.125rem;
    border: 1px solid #fff;
    background: none;

    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    cursor: pointer;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  const [sessionIdExists, setSessionIdExists] = useState(false);

  useEffect(() => {
    const sessionId = document.cookie.includes('sessionId');
    setSessionIdExists(sessionId);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/auth/logout');
      if (response.data.code === 201) {
        console.log(response.data.message);

        document.cookie =
          'sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        navigate('/start');
      }
    } catch (error) {
      console.error('Error login:', error);
    }
  };

  return (
    <Screen>
      <Logo>
        <img src={home_logo} />
        <br />

        <span>
          당신이 내일 죽는다면? <br />
          플랜데스와 함께 <br />
          삶과 죽음을 기획해보세요.
        </span>
        <br />
      </Logo>

      <MenuArea>
        <Link to={`/test`}>
          <MenuBox>
            <img src={home_1} />
            <span>
              <span className="bold">난 어떤 유령?</span> <br /> 테스트하기
            </span>
          </MenuBox>
        </Link>

        <Link to={`/moment`}>
          <MenuBox>
            <img src={home_2} />
            <span>
              <span className="bold">추억 이미지</span> <br /> 생성하기
            </span>
          </MenuBox>
        </Link>

        <Link to={`/write`}>
          <MenuBox>
            <img src={home_6} />
            <span>
              <span className="bold">나의 이야기</span> <br /> 기록하기
            </span>
          </MenuBox>
        </Link>

        <Link to={`/message`}>
          <MenuBox>
            <img src={home_4} />
            <span>
              <span className="bold">메시지</span> <br /> 쓰러가기
            </span>
          </MenuBox>
        </Link>
      </MenuArea>
      <br />

      {sessionIdExists && (
        <ButtonArea onClick={handleLogout}>
          <button>로그아웃</button>
        </ButtonArea>
      )}

      <br />
    </Screen>
  );
};

export default HomePage;
