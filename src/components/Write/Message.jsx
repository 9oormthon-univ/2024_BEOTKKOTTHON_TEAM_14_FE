import React from 'react';
import { styled } from 'styled-components';

import Typography from '../Typography';

const MessageContent = styled.div`
  background-color: #ffffff;
  color: black;
  width: 100%;
  align-items: center;
  padding: 10px 15px 15px 15px;
  border-radius: 10px;
  font-size: 15px;
  &:hover {
    background-color: #F3EDE0;
  }
`;

function Message({ title, text }) {
  return (
    <MessageContent>
      <Typography title={`${title}`} type={'bold20'} />
      <Typography title={`${text}`} type={'regular15'} />
    </MessageContent>
  );
}

export default Message;
