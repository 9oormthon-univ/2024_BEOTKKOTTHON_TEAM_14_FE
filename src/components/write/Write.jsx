import React, { useState } from 'react';
import styled from 'styled-components';

import Typography from '../Typography';
import home5 from '@assets/home_5.png';
import home7 from '@assets/home_7.png';
import logo from '@assets/logoChar.png';
import TopBar from '@components/bar/TopBar';
import { useNavigate } from 'react-router-dom';

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
  cursor: pointer;
`;

function Write() {
  const navigate = useNavigate();
  
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

        {/* 유서쓰기 */}
        <ContentBox onClick={() => document.startViewTransition(() => navigate('/testament'))}>
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
        <ContentBox onClick={() => document.startViewTransition(() => navigate('/question'))}>
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
