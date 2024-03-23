import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background: #000;
`;

const Button = styled.div`
  width: 8rem;
  height: 5rem;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  background: white;
  border-radius: 3rem;

  cursor: pointer;
`;

const ImageBox = styled.img`
  width: 13rem;
  height: 13rem;
  background: #f5f5f5;

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
      <Button onClick={() => imageInputRef.current.click()}>
        사진 업로드 버튼
      </Button>

      {selectedImage && <ImageBox src={selectedImage} />}

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
