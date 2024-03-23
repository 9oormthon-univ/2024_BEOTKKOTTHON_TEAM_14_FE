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

  .logo {
    cursor: default;
  }
`;

const TopBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const goBack = () => {
    document.startViewTransition(() => navigate(-1));
  };

  return (
    <>
      <Navbox>
        {!showSidebar ? (
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
        ) : (
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="50"
            viewBox="0 0 80 30"
            fill="none"
          >
            <path
              d="M10.6979 10.1511H5.87814V7.48984H7.08308C8.35716 7.48984 9.24605 6.62855 9.24605 5.54468C9.24605 4.46081 8.35716 3.58984 7.08308 3.58984H4.55469V26.4092H10.7078C15.2411 26.4092 18.0757 24.5221 18.0757 20.3705V16.4898C18.0757 12.3673 15.3596 10.1511 10.7078 10.1511H10.6979ZM5.87814 4.55759H6.6979C7.42876 4.55759 7.92259 4.86726 7.92259 5.54468C7.92259 6.2221 7.42876 6.53178 6.6979 6.53178H5.87814V4.55759ZM14.3423 19.9156C14.3423 22.4511 13.4633 23.6415 10.451 23.6415H8.28802V12.8898H10.451C13.5423 12.8898 14.3423 14.6608 14.3423 17.0705V19.906V19.9156Z"
              fill="white"
            />
            <path
              d="M23.6451 19.6362H30.7859V16.8588H23.6451V12.9298H31.734V10.1523H19.9414V26.4104H31.9809V23.6427H23.6451V19.6362Z"
              fill="white"
            />
            <path
              d="M42.7885 10.1523H39.075L32.9219 26.4104H36.5169L37.6231 23.4104H44.2108L45.3367 26.4104H48.9318L42.7787 10.1523H42.7885ZM38.6009 20.7588L40.9317 14.5169L43.233 20.7588H38.6009Z"
              fill="white"
            />
            <path
              d="M71.7447 10.1523V16.4911H65.6607V10.1523H61.957V26.4104H65.6607V19.2104H71.7447V26.4104H75.4484V10.1523H71.7447Z"
              fill="white"
            />
            <path
              d="M55.8239 3.58203H52.209V10.153H47.5078V12.8917H52.1597V26.4111H55.8732V12.8917H60.5251V10.153H55.8239V3.58203Z"
              fill="white"
            />
            <path
              d="M13.7806 8.37235H11.1534V3.58203H9.83984V9.35945H13.7806V8.37235Z"
              fill="white"
            />
            <path
              d="M16.2101 3.58203L14.0273 9.34977H15.3014L15.6965 8.28526H18.0372L18.4422 9.34977H19.7162L17.5335 3.58203H16.2199H16.2101ZM16.0422 7.34655L16.8718 5.13042L17.6915 7.34655H16.052H16.0422Z"
              fill="white"
            />
            <path
              d="M21.5539 5.69171L23.8947 9.35945H25.0996V3.58203H23.8255V7.25945L21.4552 3.58203H20.2305V9.35945H21.5539V5.69171Z"
              fill="white"
            />
          </svg>
        )}

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
            className="close"
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
