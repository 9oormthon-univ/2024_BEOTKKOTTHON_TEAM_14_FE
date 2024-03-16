import React, { useState } from 'react';
import styled from 'styled-components';

import SideBar from '@components/bar/SideBar';

const Navbox = styled.div`
  position: relative;
  width: 100%;
  height: 3.125rem;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #000;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */

  svg {
    cursor: pointer;
    margin: 1rem;
  }
`;

const TopBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Navbox>
        <svg
          className="back"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="15"
          viewBox="0 0 10 15"
          fill="none"
        >
          <g clip-path="url(#clip0_368_3347)">
            <path
              d="M10 1.11727L9.04902 0L0 7.5L1.14885 8.45391L9.04902 15L10 13.8827L2.2977 7.5L10 1.11727Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_368_3347">
              <rect width="10" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <svg
          className="sidebar"
          onClick={toggleSidebar}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
        >
          <g clip-path="url(#clip0_292_2850)">
            <path
              d="M1.5 3L28.5 3C29.3284 3 30 2.32843 30 1.5C30 0.671573 29.3284 0 28.5 0L1.5 0C0.671574 0 0 0.671573 0 1.5C0 2.32843 0.671574 3 1.5 3Z"
              fill="white"
            />
            <path
              d="M1.5 11.5L28.5 11.5C29.3284 11.5 30 10.8284 30 10C30 9.17157 29.3284 8.5 28.5 8.5L1.5 8.5C0.671574 8.5 0 9.17157 0 10C0 10.8284 0.671574 11.5 1.5 11.5Z"
              fill="white"
            />
            <path
              d="M1.5 20L28.5 20C29.3284 20 30 19.3284 30 18.5C30 17.6716 29.3284 17 28.5 17L1.5 17C0.671574 17 0 17.6716 0 18.5C0 19.3284 0.671574 20 1.5 20Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_292_2850">
              <rect width="30" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Navbox>

      {showSidebar && <SideBar />}
    </>
  );
};
export default TopBar;
