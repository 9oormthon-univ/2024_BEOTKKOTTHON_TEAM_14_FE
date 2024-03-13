import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import viteLogo from '/vite.svg'

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;
`;

const LogoContainer = styled.div`
  max-width: 15rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo__description {
    position: relative;

    padding: 0;
    margin: 1rem 0 0 0;

    color: #bfbfbf;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Logo = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  width: 24.375rem;
  height: 100%;

  overflow-y: auto;

  background-color: white;
`;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: black;

  z-index: -1;
`;

function Layout() {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <Container>
      {!isMobile && (
        <LogoContainer>
          <Logo>
          <img src={viteLogo} className="logo" alt="Vite logo" />
            {/* 로고 이미지 경로 */}
          </Logo>
          <h3 className="logo__description">나의 죽음을 기획해보세요.</h3>        
        </LogoContainer>
      )}
      <ContentContainer>
        <Outlet />
      </ContentContainer>

      <Background/>
    </Container>
  );
}

export default Layout;
