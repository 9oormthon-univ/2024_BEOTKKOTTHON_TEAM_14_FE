import React, { useState } from 'react';
import styled from 'styled-components';

import TopBar from '@components/bar/TopBar';

import logo from '@assets/logo.png';

const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4rem;

  background: #000;
`;

const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 15rem;
  }
`;

const ContentArea = styled.div`
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
  width: 9rem;
  height: 8rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.75rem;
  background: #fff;

  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */
`;

const HomePage = () => {
  return (
    <Screen>
      <TopBar />

      <Logo>
        <img src={logo} />
      </Logo>

      <ContentArea>
        <MenuBox>메뉴 1 설명</MenuBox>
        <MenuBox>메뉴 2 설명</MenuBox>
        <MenuBox>냐냐냥</MenuBox>
        <MenuBox>냐냐냥</MenuBox>
      </ContentArea>
    </Screen>
  );
};

export default HomePage;
