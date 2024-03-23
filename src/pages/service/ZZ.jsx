import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

const ZZ = () => {
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
    <Screen>

      {selectedImage
        ?
        <ImageBox src={selectedImage}/>
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
  );
};

export default ZZ;
