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

  width: 9rem;
  height: calc(100% - 3.125rem);
  flex-shrink: 0;

  border-radius: 0.9375rem 0rem 0rem 0.9375rem;
  background: #fff;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.4);

  z-index: 1000;

  .inactive {
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 9rem;
  height: 3rem;

  border-bottom: 0.25px solid #000;

  span {
    color: var(--BLACK-GREEN, #102117);
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
  }
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
        <IconContainer>
          <span>HOME</span>
        </IconContainer>
      </NavLink>

      <NavLink
        to={`/test`}
        className={({ isActive }) =>
          isActive || location.pathname === `/` ? 'active' : 'inactive'
        }
      >
        <IconContainer>
          <span>유령 찾기 테스트</span>
        </IconContainer>
      </NavLink>

      <NavLink
        to={`/moment`}
        className={({ isActive }) =>
          isActive || location.pathname === `/` ? 'active' : 'inactive'
        }
      >
        <IconContainer>
          <span>AI로 추억찾기</span>
        </IconContainer>
      </NavLink>

      <NavLink
        to={`/write`}
        className={({ isActive }) =>
          isActive || location.pathname === `/` ? 'active' : 'inactive'
        }
      >
        <IconContainer>
          <span>마지막 편지</span>
        </IconContainer>
      </NavLink>
    </Container>
  );
};

export default SideBar;
