import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { writePageStateAtom } from '@store/atom';
import Typography from '../Typography';
import home4 from '@assets/home_4.png';
import home5 from '@assets/home_5.png';
import home7 from '@assets/home_7.png';
import logo from '@assets/logoChar.png';
import TopBar from '@components/bar/TopBar';

const ContentBox = styled.div`
  height: 130px;
  display: flex;
  color: white;
  border: 1px solid white;
  align-items: center;
  border-radius: 15px;
  padding: 20px 15px;
  margin: 25px 0;
  &:hover {
    background-color: #3a3a3a;
  }
`;

function Write() {
  const [writePageState, setWritePageState] =
    useRecoilState(writePageStateAtom);
  return (
    <>
      <TopBar />
      <div className="px-[28px] w-[100%] h-[100vh] bg-[black]">
        <div className="ml-[45px] w-[80%] pb-[20px]">
          <img src={logo} className="" />
        </div>
        <div className="text-[white] italic">
          {/* <Typography title={'MY RECORD'} type={'bold30'} /> */}
        </div>

        {/* 편지쓰기 */}
        <ContentBox onClick={() => setWritePageState('message')}>
          <div className="w-[25%] mx-[25px]">
            <img src={home4} />
          </div>
          <div className="flex flex-col">
            <div className="items-center text-[20px] italic mb-[5px]">
              <Typography title={'Dear Mine'} type={'bold20'} />
            </div>
            <Typography title={'사랑하는 사람에게 '} type={'regular15'} />
            <Typography title={'편지를 남기세요.'} type={'regular15'} />
          </div>
        </ContentBox>

        {/* 유서쓰기 */}
        <ContentBox onClick={() => setWritePageState('testament')}>
          <div className="w-[25%] mx-[25px]">
            <img src={home5} />
          </div>
          <div className="flex flex-col">
            <div className="items-center text-[20px] italic mb-[5px]">
              <Typography title={'My Testament'} type={'bold20'} />
            </div>
            <Typography title={'당신만의 유서를 '} type={'regular15'} />
            <Typography title={'작성하세요.'} type={'regular15'} />
          </div>
        </ContentBox>

        {/* 유서쓰기 */}
        <ContentBox onClick={() => setWritePageState('question')}>
          <div className="w-[25%] mx-[25px]">
            <img src={home7} />
          </div>
          <div className="flex flex-col">
            <div className="items-center text-[20px] italic mb-[5px]">
              <Typography title={'About ME'} type={'bold20'} />
            </div>
            <Typography
              title={'당신의 이야기를 들려주세요'}
              type={'regular15'}
            />
            <Typography title={''} type={'regular15'} />
          </div>
        </ContentBox>
      </div>
    </>
  );
}

export default Write;
