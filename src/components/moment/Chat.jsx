import React, { useState } from 'react';
import { styled } from 'styled-components';
import ComputerChat from './ComputerChat';
import UserChat from './UserChat';
import TopBar from '@components/bar/TopBar';
import Send from '@assets/send.png';

const ChatScreen = styled.div`
  background-color: black;
  width: 100%;
  height: calc(100vh - 106px);
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

function Chat() {
  const [chatList, setChatList] = useState([
    {
      type: 'computer',
      content:
        '이용자 님 만나서 반갑습니다. 가장 기억하고 싶은 행복한 순간을 자세히 적어주세요.',
    },
    {
      type: 'user',
      content:
        '다섯살 때 가족들과 야구장에 갔던 날 가장 행복했습니다. 빨간 유니폼을 입고 다녀왔어요.',
    },
    {
      type: 'computer',
      content:
        '정말 좋은 추억을 가지고 계시네요. 그 순간을 잊지 않도록 이미지로 생성해드릴게요. 잠시만 기다려주세요. ',
    },
  ]);

  return (
    <>
      <TopBar />
      <ChatScreen >
        {chatList.map((item) => {
          if (item.type === 'computer') {
            return <ComputerChat content={item.content} />;
          } else if (item.type === 'user') {
            return <UserChat content={item.content} />;
          }
        })}
      </ChatScreen>
        <div className='flex flex-row bg-[#575757]/40'>
          <input className='w-[85%] m-[10px] h-[36px] rounded-[50px] px-[15px]'></input>
          <img src={Send} className='object-contain'/>
        </div>
    </>
  );
}

export default Chat;
