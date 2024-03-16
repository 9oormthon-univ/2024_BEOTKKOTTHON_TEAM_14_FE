import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { writePageStateAtom } from '@store/atom';

function Write() {
  const [writePageState, setWritePageState] =
    useRecoilState(writePageStateAtom);
  return (
    <>
      <div>삶의 소중한 순간을 기록해요.</div>
      <div onClick={() => setWritePageState('message')}>
        소중한 사람에게 남기는 메시지
      </div>
      <div onClick={() => setWritePageState('testament')}>나의 유서</div>
    </>
  );
}

export default Write;
