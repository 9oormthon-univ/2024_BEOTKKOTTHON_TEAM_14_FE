import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '@assets/logo.png';
import home_1 from '@assets/home_1.png';
import home_2 from '@assets/home_2.png';
import home_3 from '@assets/home_3.png';
import home_4 from '@assets/home_4.png';

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
  gap: 1.5rem;

  color: #fff;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */
  text-align: center;

  img {
    width: 15rem;
  }
`;

const MenuArea = styled.div`
  width: 100%;
  height: 20rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  // background: yellow;
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

const HomePage = () => {
  return (
    <Screen>
      <Logo>
        <img src={logo} />

        <span>
          당신이 내일 죽는다면? <br />
          플랜데스와 함께 <br />
          삶과 죽음을 기획해보세요.
        </span>

        <br />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="27"
          viewBox="0 0 52 27"
          fill="none"
        >
          <path
            d="M26.7372 16.8651L50.1199 3.36511C50.8373 2.9509 51.081 2.02971 50.664 1.30757C50.2471 0.585439 49.3275 0.33582 48.6101 0.750033L25.2274 14.25C24.51 14.6642 24.2664 15.5854 24.6833 16.3076C25.1002 17.0297 26.0198 17.2793 26.7372 16.8651Z"
            fill="white"
          />
          <path
            d="M1.29875 3.49805L24.6814 16.998C25.3989 17.4123 26.3185 17.1626 26.7354 16.4405C27.1523 15.7184 26.9087 14.7972 26.1912 14.383L2.80856 0.882968C2.09112 0.468755 1.17154 0.718373 0.754615 1.44051C0.337691 2.16264 0.581307 3.08383 1.29875 3.49805Z"
            fill="white"
          />
          <path
            d="M26.7372 25.8651L50.1199 12.3651C50.8373 11.9509 51.081 11.0297 50.664 10.3076C50.2471 9.58544 49.3275 9.33582 48.6101 9.75003L25.2274 23.25C24.51 23.6642 24.2664 24.5854 24.6833 25.3076C25.1002 26.0297 26.0198 26.2793 26.7372 25.8651Z"
            fill="white"
          />
          <path
            d="M1.29875 12.498L24.6814 25.998C25.3989 26.4123 26.3185 26.1626 26.7354 25.4405C27.1523 24.7184 26.9087 23.7972 26.1912 23.383L2.80856 9.88297C2.09112 9.46875 1.17154 9.71837 0.754615 10.4405C0.337691 11.1626 0.581307 12.0838 1.29875 12.498Z"
            fill="white"
          />
        </svg>
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
            <img src={home_3} />
            <span>
              <span className="bold">유서</span> <br /> 쓰러가기
            </span>
          </MenuBox>
        </Link>

        <Link to={`/`}>
          <MenuBox>
            <img src={home_4} />
            <span>
              <span className="bold">메시지</span> <br /> 쓰러가기
            </span>
          </MenuBox>
        </Link>
      </MenuArea>
    </Screen>
  );
};

export default HomePage;
