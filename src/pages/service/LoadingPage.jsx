import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';

import TopBar from '@components/bar/TopBar';

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
  height: 40rem;
  flex-shrink: 0;
  gap: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.875rem; /* 150% */
`;

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/result');
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Screen>
      <TopBar />
      <Container>
        <span>
          당신이 내일 죽는다면 <br />
          어떤 유령이 될까요 ?
        </span>
        <FadeLoader color="#2400AA" width={6} height={16} radius={1} />
      </Container>
    </Screen>
  );
};

export default LoadingPage;
