import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import ComputerChat from './ComputerChat';
import UserChat from './UserChat';
import TopBar from '@components/bar/TopBar';
import Send from '@assets/send.png';
import axios from 'axios';
import { flushSync } from 'react-dom';

const ChatScreen = styled.div`
  background-color: black;
  width: 100%;
  height: calc(100vh - 106px);
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const computerChat = [
  {
    speaker: 'computer',
    type: 'text',
    content:
      '이용자 님 만나서 반갑습니다. 가장 기억하고 싶은 행복한 순간을 자세히 적어주세요.',
  },
  {
    speaker: 'computer',
    type: 'text',
    content:
      '정말 좋은 추억을 가지고 계시네요. 그 순간을 잊지 않도록 이미지로 생성해드릴게요. 잠시만 기다려주세요. ',
  },
  {
    speaker: 'computer',
    type: 'text',
    content:
      '위 사진을 보며 좋은 기억을 떠올려봐요~~~ 화이팅!',
  },
]

function Chat() {
  const [chatList, setChatList] = useState([]);
  const [inputEnabled, setInputEnabled] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [computerChatIndex, setComputerChatIndex] = useState(0);
  
  let chatInterval = null;

  const addNextChat = (chatIndex) => {
    setChatList(org => [...org, computerChat[chatIndex]]);
  }

  const onSendClick = () => {
    if (inputEnabled) {
      setChatList(org => [...org, {
        speaker: 'user',
        type: 'text',
        content: userInput,
      }])

      setUserInput("");
      setInputEnabled(false);
      setTimeout(() => {
        addNextChat(1)
      }, 1500)

      axios.get(`/api/api/v1/image?prompt=${userInput}`)
      .then((res) => {
          setChatList(org => [...org, {
            speaker: 'computer',
            type: 'img',
            content: res.data.url,
          }]);
          setTimeout(() => {
            addNextChat(2)
          }, 1500)    
      });
    }
  }
  
  // chatInterval = setInterval(() => {
  //   if (computerChatIndex ==)
  //   setChatList(org => [...org, computerChat[computerChatIndex]]);
  //   computerChatIndex++;
  // }, 1000);
  useEffect(() => {
    setTimeout(() => {
      addNextChat(0)
      setInputEnabled(true);
    }, 500)

    return (() => {
      clearInterval(chatInterval);
    })
  }, []);

  useEffect(() => {
    console.log(computerChatIndex);
  }, [computerChatIndex]);

  return (
    <>
      <TopBar />
      <ChatScreen >
        {chatList.map((item) => {
          if (item.speaker === 'computer') {
            return <ComputerChat type={item.type} content={item.content} />;
          } else if (item.speaker === 'user') {
            return <UserChat content={item.content} />;
          }
        })}
      </ChatScreen>
        <div className='flex flex-row bg-[#575757]/40'>
          <input 
            className='w-[85%] m-[10px] h-[36px] rounded-[50px] px-[15px]' 
            disabled={!inputEnabled} 
            value={userInput}
            onChange={(e) => {
              if (e.target.value.length < 51) setUserInput(e.target.value )
            }}
          />
          <img 
            className='object-contain'
            src={Send} 
            onClick={onSendClick}
          />
        </div>
    </>
  );
}

export default Chat;
