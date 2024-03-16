import React, { useState } from 'react';
import styled from 'styled-components';

import TopBar from '@components/TopBar';

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
`;

const MaximArea = styled.div`
  width: 100%;
  height: 3.125rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3.125rem;
  background: #fff;

  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */
`;

const ContentArea = styled.div`
  width: 100%;
  height: 20rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
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
        <svg
          className="logo"
          xmlns="http://www.w3.org/2000/svg"
          width="320"
          height="120"
          viewBox="0 0 80 30"
          fill="none"
        >
          <path
            d="M10.6979 10.1511H5.87814V7.48984H7.08308C8.35716 7.48984 9.24605 6.62855 9.24605 5.54468C9.24605 4.46081 8.35716 3.58984 7.08308 3.58984H4.55469V26.4092H10.7078C15.2411 26.4092 18.0757 24.5221 18.0757 20.3705V16.4898C18.0757 12.3673 15.3596 10.1511 10.7078 10.1511H10.6979ZM5.87814 4.55759H6.6979C7.42876 4.55759 7.92259 4.86726 7.92259 5.54468C7.92259 6.2221 7.42876 6.53178 6.6979 6.53178H5.87814V4.55759ZM14.3423 19.9156C14.3423 22.4511 13.4633 23.6415 10.451 23.6415H8.28802V12.8898H10.451C13.5423 12.8898 14.3423 14.6608 14.3423 17.0705V19.906V19.9156Z"
            fill="white"
          />
          <path
            d="M23.6451 19.6362H30.7859V16.8588H23.6451V12.9298H31.734V10.1523H19.9414V26.4104H31.9809V23.6427H23.6451V19.6362Z"
            fill="white"
          />
          <path
            d="M42.7885 10.1523H39.075L32.9219 26.4104H36.5169L37.6231 23.4104H44.2108L45.3367 26.4104H48.9318L42.7787 10.1523H42.7885ZM38.6009 20.7588L40.9317 14.5169L43.233 20.7588H38.6009Z"
            fill="white"
          />
          <path
            d="M71.7447 10.1523V16.4911H65.6607V10.1523H61.957V26.4104H65.6607V19.2104H71.7447V26.4104H75.4484V10.1523H71.7447Z"
            fill="white"
          />
          <path
            d="M55.8239 3.58203H52.209V10.153H47.5078V12.8917H52.1597V26.4111H55.8732V12.8917H60.5251V10.153H55.8239V3.58203Z"
            fill="white"
          />
          <path
            d="M13.7806 8.37235H11.1534V3.58203H9.83984V9.35945H13.7806V8.37235Z"
            fill="white"
          />
          <path
            d="M16.2101 3.58203L14.0273 9.34977H15.3014L15.6965 8.28526H18.0372L18.4422 9.34977H19.7162L17.5335 3.58203H16.2199H16.2101ZM16.0422 7.34655L16.8718 5.13042L17.6915 7.34655H16.052H16.0422Z"
            fill="white"
          />
          <path
            d="M21.5539 5.69171L23.8947 9.35945H25.0996V3.58203H23.8255V7.25945L21.4552 3.58203H20.2305V9.35945H21.5539V5.69171Z"
            fill="white"
          />
        </svg>
      </Logo>

      <MaximArea>명언 : 어쩌고저쩌고</MaximArea>

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
