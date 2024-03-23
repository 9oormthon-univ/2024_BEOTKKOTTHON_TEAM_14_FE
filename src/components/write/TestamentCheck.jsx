import React, { useState } from 'react';
import { styled } from 'styled-components';

import Typography from '../Typography';
import TestamentSaveModal from './TestamentSaveModal';
import TopBar from '@components/bar/TopBar';
import { useRecoilState } from 'recoil';
import { testamentResultAtom } from '../../store/atom';
import { useNavigate } from 'react-router-dom';

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

function TestamentCheck({}) {
  const navigate = useNavigate();
  const [testmentContent, setTestamentContent] = useRecoilState(testamentResultAtom)
  return (
    <>
      <TopBar/>
      <div className="relative p-[28px]">
        <Typography title={'나의 유서'} type={'bold30'} />
        <div className='my-[10px]'>
          <Typography title={'당신이 세상에 남기는 마지막 이야기입니다.'} type={'regular15'} />
        </div>

        <div
          className="bg-[#F3EDE0]/60 w-[100%] h-[250px] rounded-[10px] p-[20px] text-start mt-[20px] resize-none outline-none"
        >
          {testmentContent.answerFree}
        </div>

        <div className="flex justify-center">
          <SaveButton
            onClick={() => {
              document.startViewTransition(() => navigate('/write'))
            }}
          >
            확인
          </SaveButton>
        </div>
      </div>
    </>
  );
}

export default TestamentCheck;
