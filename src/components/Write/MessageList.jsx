import React, { useState } from 'react';
import { styled } from 'styled-components';

import Typography from '../Typography';
import Message from './Message';
import MessageInput from './MessageInput';

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
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
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
      text: '그동안 행복했어 정말 또 만나자',
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
        <div className="p-[28px]">
          <div></div>
          <Typography title={'나의 소중한 사람에게'} type={'bold30'} />
          <Typography
            title={'사랑하는 사람에게 남기고 싶은 편지를 작성하세요.'}
            type={'regular15'}
          />
          <div className="flex justify-end mt-[10px]">
            <SaveButton
              onClick={() => {
                setAddMessage(true);
              }}
            >
              New
            </SaveButton>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-[15px]">
            {testdata.map((data) => {
              return <Message title={data.title} text={data.text} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default MessageList;
