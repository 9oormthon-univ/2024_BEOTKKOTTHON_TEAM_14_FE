import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const TestContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 3.125rem);
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ;
  gap: 5rem;

  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  background: #fff;
`;

const Gauge = styled.div`
  height: 8%;
  text-align: left;
  padding-top: 3rem;

  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.375rem; /* 110% */
`;

const GrayBar = styled.div`
  position: relative;
  margin: 0.625rem auto;
  width: 18.75rem;
  height: 0.9375rem;
  flex-shrink: 0;
  background: #888;
`;

const BlackBar = styled.div`
  position: absolute;
  width: ${({ width }) => `${width * 1.875}rem`};
  height: 0.9375rem;

  background: #000;
`;

const Question = styled.div`
  pcolor: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 110% */
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Answer = styled.div`
  width: 18.75rem;
  height: 3.125rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3.125rem;
  background: #f5f5f5;

  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;

const TestPage = () => {
  let [gauge, setGauge] = useState(1);
  const navigate = useNavigate();

  return (
    <Screen>
      <TopBar />

      <TestContainer>
        <Gauge>
          <span className="questionNum">{gauge} / 10</span>
          <GrayBar>
            <BlackBar width={gauge * 1} />
          </GrayBar>
        </Gauge>

        <Question>나의 장례식을 기획해 보자면?</Question>

        <AnswerContainer>
          <Answer>부자가 되고 싶어요</Answer>
          <Answer>부자가 되고 싶어요</Answer>
          <Answer>부자가 되고 싶어요</Answer>
          <Answer>부자가 되고 싶어요</Answer>
        </AnswerContainer>
      </TestContainer>
    </Screen>
  );
};

export default TestPage;
