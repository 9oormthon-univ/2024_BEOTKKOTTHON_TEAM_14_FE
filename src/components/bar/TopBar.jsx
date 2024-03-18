import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbox>
        <svg
          className="back"
          onClick={goBack}
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

        {!showSidebar ? (
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
        ) : (
          <svg
            className="sidebar"
            onClick={toggleSidebar}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3.52129 22.2878L22.6132 3.19591C23.199 2.61013 23.1958 1.65727 22.6062 1.06765C22.0166 0.478032 21.0638 0.474924 20.478 1.06071L1.38608 20.1526C0.800296 20.7384 0.803403 21.6912 1.39302 22.2809C1.98264 22.8705 2.9355 22.8736 3.52129 22.2878Z"
              fill="white"
            />
            <path
              d="M1.06035 3.36015L20.1522 22.452C20.738 23.0378 21.6909 23.0347 22.2805 22.4451C22.8701 21.8555 22.8732 20.9026 22.2874 20.3168L3.19555 1.22495C2.60976 0.639165 1.65691 0.642272 1.06729 1.23189C0.477667 1.82151 0.47456 2.77437 1.06035 3.36015Z"
              fill="white"
            />
          </svg>
        )}
      </Navbox>

      {showSidebar && <SideBar />}
    </>
  );
};
export default TopBar;
