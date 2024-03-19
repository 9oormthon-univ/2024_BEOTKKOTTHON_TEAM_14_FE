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
  gap: 7rem;

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
  width: ${({ width }) => width}%;
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
  width: 20rem;
  height: 5rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 3.125rem;
  background: #f5f5f5;

  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;

const TestPage = () => {
  const [gauge, setGauge] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const nextQuestion = () => {
    if (gauge < questionData.length - 1) {
      setGauge(gauge + 1);
      setSelectedAnswer(null);
    } else {
      navigate('/result');
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    nextQuestion();
  };

  const questionData = [
    {
      question: <span>현재 내가 어느 한 상황에 속해야 한다면?</span>,
      answers: [
        <span>
          자연 속에서 <br />
          조용하고 고요한 순간들을 느끼고 있어..
        </span>,
        <span>
          열정 빼면 시체!
          <br /> 난 지금 엄청난 새로운 도전을 하고 있는 중이야!
        </span>,
      ],
    },
    {
      question: <span>오늘은 쉬는 날, 무엇을 하면서 쉬어야 할까?</span>,
      answers: [
        <span>책을 읽거나 음악을 들으며 집에서 쉴래</span>,
        <span>
          쉬는 날엔 친구와 함께! <br />
          오늘은 어디가서 놀까~?
        </span>,
      ],
    },
    {
      question: (
        <span>
          만약 지금 내가 죽어서 영혼이 된다면, <br />
          가장 처음 할 일은?
        </span>
      ),
      answers: [
        <span>
          영혼이면.. 가만히 있어야지.. <br />
          조용한 곳 찾아서 누워있을래..
        </span>,
        <span>
          완전 자유롭잖아? <br />
          하늘을 날아다니면서 세상 구경해야지!
        </span>,
      ],
    },
    {
      question: <span>오늘 밤 꿈을 꾼다면, 어떤 꿈을 꾸면 좋을까?</span>,
      answers: [
        <span>
          환상 가득한 동화, <br />
          드라마 속 주인공이 되는 꿈을 꾸고 싶어요.
        </span>,
        <span>
          현실 그 자체. <br />
          나한테 충분히 일어날 수도 있는 일이겠는데?
        </span>,
      ],
    },
  ];

  return (
    <Screen>
      <TopBar />

      <TestContainer>
        <Gauge>
          <span className="questionNum">
            {gauge + 1} / {questionData.length}
          </span>
          <GrayBar>
            <BlackBar width={(gauge + 1) * (100 / questionData.length)} />
          </GrayBar>
        </Gauge>

        <Question>{questionData[gauge].question}</Question>

        <AnswerContainer>
          {questionData[gauge].answers.map((answer, index) => (
            <Answer key={index} onClick={() => handleAnswerClick(answer)}>
              {answer}
            </Answer>
          ))}
        </AnswerContainer>
      </TestContainer>
    </Screen>
  );
};

export default TestPage;
