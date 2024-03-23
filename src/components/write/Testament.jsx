import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';

import Typography from '../Typography';
import TestamentSaveModal from './TestamentSaveModal';
import TopBar from '@components/bar/TopBar';

const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: end;
  // justify-content: center;
  gap: 2rem;

  background: #fff;

  overflow: auto;
`;

const ImgBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f5f5f5;
  width: 100%;
  height: 8rem;
  resize: none;
  outline: none;
  margin-top: 20px;
  margin-bottom: 10px;

  color: #a8aeb8;
  text-align: center;
`;

const ImageBox = styled.div`
  border-radius: 10px;
  margin-top: 20px;

  background: #f5f5f5;

  object-fit: cover;
`;

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

function Testament() {
  const [myTestament, setMyTestament] = useState('');
  const [saveBtnClick, setSaveBtnClick] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInputRef = useRef(null);

  const handleImageUpload = (event) => {
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
        <Typography title={'나의 흔적 남기기'} type={'bold30'} />
        <div className="my-[10px]">
          <Typography
            title={'인생에서 가장 하고 싶은 말을 적어주세요. '}
            type={'regular15'}
          />
        </div>

        <textarea
          className="bg-[#F5F5F5] w-[100%] h-[250px] rounded-[10px] p-[20px] text-start mt-[10px] mb-[10px] resize-none outline-none"
          placeholder="이 곳에 흔적을 남겨주세요."
          value={myTestament}
          onChange={(e) => {
            setMyTestament(e.target.value);
          }}
        ></textarea>
        <div className="mt-[20px]">
          <Typography
            title={'서명을 업로드하면 디지털 증거로 사용할 수 있습니다.'}
            type={'regular15'}
          />
        </div>

        <Screen>
          {selectedImage ? (
            <ImageBox>
              <img src={selectedImage} value={selectedImage} />
            </ImageBox>
          ) : (
            <ImgBtn onClick={() => imageInputRef.current.click()}>
              이미지를 업로드하려면
              <br /> 여기를 클릭해주세요!
            </ImgBtn>
          )}

          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={imageInputRef}
            onChange={handleImageUpload}
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
        {saveBtnClick && (
          <TestamentSaveModal
            myTestament={myTestament}
            selectedImage={selectedImage}
            setSaveBtnClick={setSaveBtnClick}
          />
        )}
      </div>
    </>
  );
}

export default Testament;
