import React from 'react';
import { styled } from 'styled-components';

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

const TitleArea = styled.textarea`
  &::placeholder {
    font-size: 14px;
  }
  all: unset;
  width: 85%;
  border-style: none;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  background-image: linear-gradient(to right, white 0px, transparent 0px),
    linear-gradient(to left, white 0px, transparent 0px),
    repeating-linear-gradient(
      #ffffff,
      #ffffff 34px,
      #ccc 34px,
      #ccc 35px,
      #ffffff 35px
    );
  line-height: 35px;
  height: 37px;
  min-height: 35px;
  margin-top: 100px;
  margin-left: 25px;
`;

const MessageArea = styled.textarea`
  &::placeholder {
    font-size: 14px;
  }
  all: unset;
  width: 85%;
  border-style: none;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  background-image: linear-gradient(to right, white 0px, transparent 0px),
    linear-gradient(to left, white 0px, transparent 0px),
    repeating-linear-gradient(
      #ffffff,
      #ffffff 34px,
      #ccc 34px,
      #ccc 35px,
      #ffffff 35px
    );
  line-height: 35px;
  height: 523px;
  min-height: 35px;
  margin-left: 25px;
`;

function MessageInput({ setAddMessage }) {
  return (
    <div className=" h-[100vh]">
      <div></div>
      <TitleArea placeholder="누구에게 편지를 보낼까요?"></TitleArea>
      <MessageArea placeholder="사랑하는 사람에게 남기고 싶은 편지를 작성하세요."></MessageArea>
      <div className="flex justify-center">
        <SaveButton
          onClick={() => {
            setAddMessage(false);
          }}
        >
          완료
        </SaveButton>
      </div>
    </div>
  );
}

export default MessageInput;
