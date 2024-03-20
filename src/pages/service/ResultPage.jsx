import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import TopBar from '@components/bar/TopBar';

import { GhostInfo } from '@utils/test/GhostInfo.jsx';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background: #000;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 3.125rem);
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  position: relative;
  width: 22rem;
  flex-shrink: 0;
  gap: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 110% */
  word-wrap: break-word;

  .background {
    position: absolute;
    z-index: 1;
  }

  .value {
    font-size: 2.6rem;
    z-index: 10;
  }

  .icon {
    width: 10rem;
    z-index: 10;
    animation: ${fadeInOut} 3s infinite;
  }

  .keyword {
    z-index: 10;
  }

  .description {
    font-size: 0.9375rem;
    z-index: 10;
  }
`;

const ResultPage = () => {
  const num = 4;
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex % 3) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <Screen>
      <TopBar />
      <Container>
        <CardContainer>
          <img className="background" src={GhostInfo[num][0].background} />
          <span>당신의 유령은?</span>

          <span className="value">{GhostInfo[num][0].value}</span>
          <img className="icon" src={GhostInfo[num][0][`image${imageIndex}`]} />
          <span className="keyword">{GhostInfo[num][0].keyword}</span>
          <span className="description">{GhostInfo[num][0].description}</span>
        </CardContainer>
      </Container>
    </Screen>
  );
};

export default ResultPage;
