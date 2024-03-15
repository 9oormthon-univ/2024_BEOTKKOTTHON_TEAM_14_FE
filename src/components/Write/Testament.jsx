import React from 'react'
import Typography from '../Typography'
import { styled } from 'styled-components'

function Testament() {
  const [myTestament, setMyTestament] = useState()
  return (
    <>
      <Typography title={'나의 유서 작성하기'} type={'bold30'}/>
      <Typography title={'당신의 유서를 아래의 양식에 맞게 작성해 주세요.'} type={'regular15'}/>
      <Typography title={'법적으로 유서에는 작성자의 이름과 주소, 날인이 들어가야 합니다.'} type={'regular15'}/>

      <div className='flex flex-row mt-[30px] mb-[10px]'>
        <div className='mr-[20px]'>이름</div>
        <input className='bg-[#F5F5F5] h-[30px] rounded-[10px]'></input>
      </div>

      <textarea
        className='bg-[#F5F5F5] w-[100%] h-[60%] rounded-[10px] p-[20px] text-start' 
        placeholder='이 곳에 유서를 작성해 주세요.'
        value={myTestament} onChange={(e)=>{setMyTestament(e.target.value)}}
      >
      </textarea>

      <div className='flex justify-center'>
        <SaveButton>완료</SaveButton>
      </div>
    </>
  )
}

export default Testament

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