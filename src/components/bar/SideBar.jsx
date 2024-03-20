import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  top: 3.125rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 24.375rem;
  height: calc(100% - 3.125rem);
  flex-shrink: 0;

  background: #000;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.4);

  z-index: 1000;

  .inactive {
    opacity: 0.7;
  }

  .active {
    opacity: 1;
  }
`;

const MenuContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  height: 3rem;

  color: #fff;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SideBar = () => {
  const location = useLocation();

  return (
    <Container>
      <NavLink
        to={`/home`}
        className={({ isActive }) =>
          isActive || location.pathname === `/` ? 'active' : 'inactive'
        }
      >
        <MenuContainer>
          <span>HOME</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
          >
            <g clip-path="url(#clip0_523_6026)">
              <path
                d="M0 1.19175L1.04607 0L11 8L9.73627 9.0175L1.04607 16L0 14.8082L8.47253 8L0 1.19175Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_523_6026">
                <rect
                  width="11"
                  height="16"
                  fill="white"
                  transform="matrix(-1 0 0 1 11 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </MenuContainer>
      </NavLink>

      <NavLink
        to={`/test`}
        className={({ isActive }) =>
          isActive ||
          location.pathname === `/` ||
          location.pathname === `/loading` ||
          location.pathname === `/result`
            ? 'active'
            : 'inactive'
        }
      >
        <MenuContainer>
          <span>유령 찾기 테스트</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
          >
            <g clip-path="url(#clip0_523_6026)">
              <path
                d="M0 1.19175L1.04607 0L11 8L9.73627 9.0175L1.04607 16L0 14.8082L8.47253 8L0 1.19175Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_523_6026">
                <rect
                  width="11"
                  height="16"
                  fill="white"
                  transform="matrix(-1 0 0 1 11 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </MenuContainer>
      </NavLink>

      <NavLink
        to={`/moment`}
        className={({ isActive }) =>
          isActive || location.pathname === `/` ? 'active' : 'inactive'
        }
      >
        <MenuContainer>
          <span>AI로 추억찾기</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
          >
            <g clip-path="url(#clip0_523_6026)">
              <path
                d="M0 1.19175L1.04607 0L11 8L9.73627 9.0175L1.04607 16L0 14.8082L8.47253 8L0 1.19175Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_523_6026">
                <rect
                  width="11"
                  height="16"
                  fill="white"
                  transform="matrix(-1 0 0 1 11 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </MenuContainer>
      </NavLink>

      <NavLink
        to={`/write`}
        className={({ isActive }) =>
          isActive || location.pathname === `/` ? 'active' : 'inactive'
        }
      >
        <MenuContainer>
          <span>유서 쓰기</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
          >
            <g clip-path="url(#clip0_523_6026)">
              <path
                d="M0 1.19175L1.04607 0L11 8L9.73627 9.0175L1.04607 16L0 14.8082L8.47253 8L0 1.19175Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_523_6026">
                <rect
                  width="11"
                  height="16"
                  fill="white"
                  transform="matrix(-1 0 0 1 11 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </MenuContainer>
      </NavLink>

      <NavLink
        to={`/`}
        className={({ isActive }) =>
          isActive || location.pathname === `/` ? 'active' : 'inactive'
        }
      >
        <MenuContainer>
          <span>마지막 편지</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
          >
            <g clip-path="url(#clip0_523_6026)">
              <path
                d="M0 1.19175L1.04607 0L11 8L9.73627 9.0175L1.04607 16L0 14.8082L8.47253 8L0 1.19175Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_523_6026">
                <rect
                  width="11"
                  height="16"
                  fill="white"
                  transform="matrix(-1 0 0 1 11 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </MenuContainer>
      </NavLink>
    </Container>
  );
};

export default SideBar;
