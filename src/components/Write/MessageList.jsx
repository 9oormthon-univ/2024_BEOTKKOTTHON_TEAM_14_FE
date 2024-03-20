import React, { useState } from 'react';
import { styled } from 'styled-components';

import Typography from '../Typography';
import Message from './Message';
import MessageInput from './MessageInput';
import heart from '@assets/heartMessage.png'

const SaveButton = styled.button`
  margin: 20px 0;
  border-radius: 50px;
  display: flex;
  border: 1px solid white;
  background-color: black;
  font-size: 18px;
  width: 100px;
  height: 36px;
  align-items: center;
  &:hover{
    background-color: #3A3A3A;
  }
`;

function MessageList() {
  const [addMessage, setAddMessage] = useState(false);
  const testdata = [
    {
      title: '짱구에게',
      text: '그동안 고마웠어',
    },
    {
      title: '훈이에게',
      text: '그동안 행복했어 정말 또 만나자 동안 행복했어 정말 또 만나자 동안 행복했어 정말 또 만나자',
    },
    {
      title: '철수야',
      text: '나때문에 울지마',
    },
  ];
  return (
    <>
      {addMessage ? (
        <MessageInput setAddMessage={setAddMessage} />
      ) : (
        <div className="p-[28px] bg-[black] h-[100vh] text-[white]">
          <div className='ml-[120px] mb-[10px] w-[30%]'>
            <img src={heart}/>
          </div>
          <Typography title={'나의 소중한 사람에게'} type={'bold30'} />
          <Typography
            title={'사랑하는 사람에게 남기고 싶은 편지를 작성하세요.'}
            type={'regular15'}
          />
          <div className="grid grid-rows-2 grid-cols-2 gap-[15px] mt-[30px]">
            {testdata.map((data) => {
              return <Message title={data.title} text={data.text} />;
            })}
          </div>
          <div className="flex justify-center mt-[10px]">
            <SaveButton
              onClick={() => {
                setAddMessage(true);
              }}
            >
              + New
            </SaveButton>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageList;
