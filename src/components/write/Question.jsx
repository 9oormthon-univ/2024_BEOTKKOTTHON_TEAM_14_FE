import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';

import Typography from '../Typography';
import TopBar from '@components/bar/TopBar';
import axios from 'axios';
import { questionResultAtom } from '../../store/atom';
import { useRecoilState } from 'recoil';

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
  gap: 2rem;

  background: #fff;
`;

const ImgBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f5f5f5;
  width: 100%;
  height: 7rem;
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
  z-index: 2;
`;

function Question() {
  const [questionAnswer1, setQuestionAnswer1] = useState([]);
  const [questionAnswer2, setQuestionAnswer2] = useState([]);
  const [questionAnswer3, setQuestionAnswer3] = useState([]);
  const [questionAnswer4, setQuestionAnswer4] = useState([]);
  const [result, setResult] = useRecoilState(questionResultAtom);
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

  const handleSave = () => {
    const request = {
      answer1: questionAnswer1,
      answer2: questionAnswer2,
      answer3: questionAnswer3,
      answer4: questionAnswer4,
      picture: selectedImage,
    };

    axios.post('/api/answer/create', request).then((res) => {
      axios.get('/api/answer/get').then((res) => {
        setResult(res.data.result);
      });
    });
  };

  return (
    <>
      <TopBar />
      <div className="p-[28px]">
        <div className="ml-[95px] mb-[30px]">
          <Typography title={'About ME'} type={'bold30'} />
        </div>
        <div className="mt-[20px] mb-[10px]">
          <Typography
            title={'Q1. 비상금이 있다면, 어디에 있나요?'}
            type={'question15'}
          />
          <textarea
            className="bg-[#F5F5F5] w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
            value={questionAnswer1}
            onChange={(e) => setQuestionAnswer1(e.target.value)}
          ></textarea>
        </div>

        <div className="mt-[20px] mb-[10px]">
          <Typography
            title={'Q2. 어떤 분위기의 장례식을 원하시나요?'}
            type={'question15'}
          />
          <textarea
            className="bg-[#F5F5F5] w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
            value={questionAnswer2}
            onChange={(e) => setQuestionAnswer2(e.target.value)}
          ></textarea>
        </div>

        <div className="mt-[20px] mb-[10px]">
          <Typography
            title={'Q3. 당신이 원하는 묘비명은 무엇인가요?'}
            type={'question15'}
          />
          <textarea
            className="bg-[#F5F5F5] w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
            value={questionAnswer3}
            onChange={(e) => setQuestionAnswer3(e.target.value)}
          ></textarea>
        </div>

        <div className="mt-[20px] mb-[10px]">
          <Typography
            title={
              'Q4. 부모님 혹은 친구가 나의 핸드폰을 열어보기를 원하시나요?'
            }
            type={'question15'}
          />
          <textarea
            className="bg-[#F5F5F5] w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
            value={questionAnswer4}
            onChange={(e) => setQuestionAnswer4(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-[20px] mb-[10px]">
          <Typography
            title={'Q5. 원하는 영정사진을 업로드하세요.'}
            type={'question15'}
          />

          {selectedImage ? (
            <ImageBox>
              <img src={selectedImage} />
            </ImageBox>
          ) : (
            <ImgBtn onClick={() => imageInputRef.current.click()}>
              이미지를 업로드하려면 <br /> 여기를 클릭해주세요!
            </ImgBtn>
          )}
          <Screen>
            {/* 아래 코드는 사진 업로드 관련해서 필요함. display none이라서 어차피 안 보임! */}
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={imageInputRef}
              onChange={handleImageChange}
            />
          </Screen>
        </div>
        <div className="flex justify-center mt-[10px]">
          <SaveButton onClick={handleSave}>완료</SaveButton>
        </div>
      </div>
    </>
  );
}

export default Question;
