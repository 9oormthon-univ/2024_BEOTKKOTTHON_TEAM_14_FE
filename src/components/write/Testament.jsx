import React, { useState ,useRef} from 'react';
import { styled } from 'styled-components';

import Typography from '../Typography';
import TestamentSaveModal from './TestamentSaveModal';
import TopBar from '@components/bar/TopBar';
import TestamentCheck from './TestamentCheck';
import axios from 'axios';
import ZZ from '../../pages/service/ZZ';


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
const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: end;
  // justify-content: center;
  gap: 2rem;
  
  background: #Fff;
  `;

const ImgBtn = styled.textarea`
  border-radius: 10px;
  cursor: pointer;
  background-color: #f5f5f5;
  width: 100%;
  resize: none;
  outline: none;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-top: 20px;
  &::placeholder {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  
`;

const ImageBox = styled.img`
border-radius: 10px;
  width: 21rem;
  height: 10rem;
  margin-top: 20px;
  // background: #f5f5f5;

  object-fit: cover;
  z-index: 2;
`;
function Testament() {
  const [myTestament, setMyTestament] = useState('');
  const [saveBtnClick, setSaveBtnClick] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <TopBar />
      <div className="relative p-[28px]">
        <Typography title={'나의 유서 작성하기'} type={'bold30'} />
        <div className='my-[10px]'>
          <Typography title={'인생에서 가장 하고 싶은 말을 적어주세요. '} type={'regular15'} />
        </div>

        {/* <div className="flex flex-row mt-[30px] mb-[10px]">
          <Typography title={'이름 '} type={'question15'} />
          <input className="bg-[#F5F5F5] h-[30px] rounded-[10px]"></input>
        </div> */}

        <textarea
          className="bg-[#F5F5F5] w-[100%] h-[250px] rounded-[10px] p-[20px] text-start mt-[10px] mb-[10px] resize-none outline-none"
          placeholder="이 곳에 유서를 작성해 주세요."
          value={myTestament}
          onChange={(e) => {
            setMyTestament(e.target.value);
          }}
        ></textarea>
        <div className='mt-[20px]'>
          <Typography title={'법적으로 유서에는 작성자의 이름과 주소, 날인이 '} type={'regular15'} />
          <Typography title={'들어가야 합니다. 날인을 업로드해주세요.'} type={'regular15'} />
        </div>

        <Screen>

          {selectedImage
            ?
            <ImageBox src={selectedImage} />
            :
            <ImgBtn
              placeholder='Image'
              onClick={() => imageInputRef.current.click()}
            >
            </ImgBtn>}

          {/* 아래 코드는 사진 업로드 관련해서 필요함. display none이라서 어차피 안 보임! */}
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={imageInputRef}
            onChange={handleImageChange}
          />
        </Screen>
        <div className="flex justify-center">
          <SaveButton
            onClick={() => {
              setSaveBtnClick(true);
            }}
          >
            완료
          </SaveButton>
        </div>
        {saveBtnClick && <TestamentSaveModal myTestament={myTestament} setSaveBtnClick={setSaveBtnClick} />}
      </div>
    </>
  );
}

export default Testament;
