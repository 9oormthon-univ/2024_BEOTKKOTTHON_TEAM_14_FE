import React from 'react'
import { styled } from 'styled-components';
import Profile from "../../assets/Image/ComputerProfile.png"

function ComputerChat({ content }) {
    return (
        <>
            <div className='flex items-start'>
                <img src={Profile} className='object-contain mr-[10px]'/>
                <Computer>{content}</Computer>
            </div>
        </>
    )
}

export default ComputerChat


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
