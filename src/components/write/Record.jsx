import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { recordPageStateAtom } from '@store/atom';
import Typography from '../Typography';
import ghost3D from '@assets/ghost3D_1.png';
import ghost3D3 from '@assets/ghost3D_2.png';
import logo from '@assets/logoChar.png';

function Record() {
  const [writePageState, setWritePageState] =
    useRecoilState(recordPageStateAtom);
  return (
    <div className="p-[28px] w-[100%] h-[100vh] bg-[black]">
      <div className="ml-[45px] w-[80%] py-[20px]">
        <img src={logo} className="" />
      </div>
      <div className="text-[white] italic">
        {/* <Typography title={'MY RECORD'} type={'bold30'} /> */}
      </div>

      {/* 편지쓰기 */}
      <div
        className="flex text-[white] border-2 items-center rounded-[10px] my-[25px] px-[15px] py-[20px] "
        onClick={() => setWritePageState('testament')}
      >
        <div className="w-[35%] mr-[20px]">
          <img src={ghost3D3} />
        </div>
        <div className="flex flex-col">
          <div className="items-center text-[20px] italic mb-[5px]">
            <Typography title={'My Testament'} type={'bold20'} />
          </div>
          <Typography title={'당신만의 흔적을 '} type={'regular15'} />
          <Typography title={'남겨보세요.'} type={'regular15'} />
        </div>
      </div>

      {/* 유서쓰기 */}
      <div
        className="flex text-[white] border-2 items-center rounded-[10px] my-[25px] px-[15px] py-[20px] "
        onClick={() => setWritePageState('question')}
      >
        <div className="w-[35%] mr-[20px]">
          <img src={ghost3D} />
        </div>
        <div className="flex flex-col">
          <div className="items-center text-[20px] italic mb-[5px]">
            <Typography title={'About ME'} type={'bold20'} />
          </div>
          <Typography title={'당신의 이야기를 '} type={'regular15'} />
          <Typography title={'담아주세요'} type={'regular15'} />
        </div>
      </div>
    </div>
  );
}

export default Record;
