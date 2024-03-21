import React from 'react';
import { styled } from 'styled-components';

import profile from '@assets/com_profile.png';

const Computer = styled.div`
  width: 210px;
  border-radius: 10px;
  background-color: white;
  color: black;
  padding: 10px 15px;
  font-size: 15px;
  word-break: keep-all;
  margin-bottom: 20px;
`;

function ComputerChat({ content }) {
  return (
    <>
      <div className="flex items-start">
        <img src={profile} className="object-contain mr-[10px]" />
        <Computer>{content}</Computer>
      </div>
    </>
  );
}

export default ComputerChat;
