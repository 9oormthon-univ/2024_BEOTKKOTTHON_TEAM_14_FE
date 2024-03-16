import React from 'react'
import Typography from '../Typography'
import { styled } from 'styled-components'

function Message({title, text}) {
  return (
    <MessageContent>
      <Typography title={`${title}`} type={'bold20'} />
      <Typography title={`${text}`} type={'regular15'} />
    </MessageContent>
  )
}

export default Message

const MessageContent = styled.div`
  width: 100%;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 10px #f5f5f5 ;
  border-radius: 10px;
  font-size: 15px;
  &:hover {
    background-color: #f5f5f5
  };
`;
