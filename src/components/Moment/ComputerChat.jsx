import React from 'react'

function ComputerChat() {
    return (
        <>
            <div></div>
            <Computer>이용자 님 만나서 반갑습니다. 가장 기억하고 싶은 행복한 순간을 자세히 적어주세요.  </Computer>
        </>
    )
}

export default ComputerChat


const Computer = styled.div`
  width: 200px;
  border-radius: 10px;
  background-color: white;
`;
