import React, { useState } from 'react';
import { styled } from 'styled-components';

import Typography from '../Typography';
import home6 from '@assets/home_6.png';
import TopBar from '@components/bar/TopBar';

const SaveButton = styled.button`
  margin-top: 20px;
  border-radius: 50px;
  display: flex;
  color: white;
  background-color: black;
  font-size: 15px;
  gap: 10px;
  width: 100px;
  height: 30px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;
function Question() {
  const [questionAnswer1, setQuestionAnswer1] = useState([]);
  const [questionAnswer2, setQuestionAnswer2] = useState([]);
  const [questionAnswer3, setQuestionAnswer3] = useState([]);
  const [questionAnswer4, setQuestionAnswer4] = useState([]);

  return (
    <>
      <TopBar/>
      <div className="p-[28px]">
        <div className="ml-[95px] mb-[30px]">
          <Typography title={'About ME'} type={'bold30'} />
        </div>
        <div className="mt-[20px] mb-[10px]">
            <Typography title={'Q1. 비상금이 있다면, 어디에 있나요?'} type={'question15'} />
            <textarea
            className="bg-[#F5F5F5] w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
            value={questionAnswer1}
            onChange={(e) => setQuestionAnswer1(e.target.value)}
            ></textarea>
        </div>

        <div className="mt-[20px] mb-[10px]">
            <Typography title={'Q2. 어떤 분위기의 장례식을 원하시나요?'} type={'question15'} />
            <textarea
            className="bg-[#F5F5F5] w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
            value={questionAnswer2}
            onChange={(e) => setQuestionAnswer2(e.target.value)}
            ></textarea>
        </div>

        <div className="mt-[20px] mb-[10px]">
            <Typography title={'Q3. 당신이 원하는 묘비명은 무엇인가요?'} type={'question15'} />
            <textarea
            className="bg-[#F5F5F5] w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
            value={questionAnswer3}
            onChange={(e) => setQuestionAnswer3(e.target.value)}
            ></textarea>
        </div>

        <div className="mt-[20px] mb-[10px]">
            <Typography title={'Q4. 부모님 혹은 친구가 나의 핸드폰을 열어보기를 원하시나요?'} type={'question15'} />
            <textarea
            className="bg-[#F5F5F5] w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
            value={questionAnswer4}
            onChange={(e) => setQuestionAnswer4(e.target.value)}
            ></textarea>
        </div>
        <div className="flex justify-center mt-[10px]">
          <SaveButton
            onClick={() => {
              setAddMessage(true);
            }}
          >
            완료
          </SaveButton>
        </div>
      </div>
    </>
  );
}

export default Question;
