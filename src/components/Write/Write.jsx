import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { writePageStateAtom } from '@store/atom';
import Typography from '../Typography';
import ghost3D from "@assets/ghost3D_1.png";
import ghost3D3 from "@assets/ghost3D_2.png";
import logo from "@assets/logoChar.png";

function Write() {
  const [writePageState, setWritePageState] =
    useRecoilState(writePageStateAtom);
  return (
    <div className='p-[28px] w-[100%] h-[100vh] bg-[black]'>
      <div className='ml-[45px] w-[80%] py-[20px]'>
        <img src={logo} className=''/>
      </div>
      <div className='text-[white] italic'>
        {/* <Typography title={'MY RECORD'} type={'bold30'} /> */}
      </div>

      {/* 편지쓰기 */}
      <div className='flex font-[black] bg-[white] items-center rounded-[10px] my-[25px] px-[15px] py-[20px]'
        onClick={() => setWritePageState('message')}>
        <div className='w-[35%] mr-[20px]'>
          <img src={ghost3D3} />
        </div>
        <div className='flex flex-col'>
          <div
            className='items-center text-[20px] italic mb-[5px]'
          >
            <Typography title={'Dear Mine'} type={'bold20'} />
            
          </div>
          <Typography title={'사랑하는 사람에게 '} type={'regular15'} />
          <Typography title={'편지를 남기세요.'} type={'regular15'} />
        </div>
      </div>

      {/* 유서쓰기 */}
      <div className='flex font-[black] bg-[white] items-center rounded-[10px] my-[25px] px-[15px] py-[20px]'
        onClick={() => setWritePageState('testament')}>
        <div className='w-[35%] mr-[20px]'>
          <img src={ghost3D} />
        </div>
        <div className='flex flex-col'>
          <div
            className='items-center text-[20px] italic mb-[5px]'
          >
            <Typography title={'My Testament'} type={'bold20'} />
            
          </div>
          <Typography title={'당신만의 유서를 '} type={'regular15'} />
          <Typography title={'작성하세요.'} type={'regular15'} />
        </div>
      </div>
    </div>
  );
}

export default Write;
