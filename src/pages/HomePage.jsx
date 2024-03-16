import React, { useState } from 'react';
import styled from 'styled-components';

import TopBar from '@components/TopBar';

const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const HomePage = () => {
  return (
    <Screen>
      <TopBar />
    </Screen>
  );
};

export default HomePage;
