import React from 'react';
import { styled } from 'styled-components';

const User = styled.div`
  width: 210px;
  border-radius: 10px;
  background-color: #F3EDE0;
  color: black;
  padding: 10px 15px;
  font-size: 15px;
  word-break: keep-all;
  margin-bottom: 20px;
`;

function UserChat({ content }) {
  return (
    <>
      <div className="flex justify-end">
        <User>{content} </User>
      </div>
    </>
  );
}

export default UserChat;
