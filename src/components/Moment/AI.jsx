import React from 'react';
import styled from 'styled-components';

import logo from '@assets/logo.png';
import Ai from '@assets/test/ai.png';
import TopBar from '@components/bar/TopBar'

import { useRecoilState } from 'recoil';
import { writePageStateAtom } from '@store/atom';

const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: #000;

  overflow: hidden;

  color: var(--WHITE, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */

  .logo {
    margin-top: 6.38rem;

    width: 18rem;
    height: 7rem;
    flex-shrink: 0;
  }

  .ghost3D {
    width: 90%;
  }
`;

const Button = styled.div`
  width: 11.5625rem;
  height: 3.25rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 3.125rem;
  border: 1px solid #fff;

  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;

  &:hover {
    background: #5a5a5a;
  }
`;
function AI() {
    const [writePageState, setWritePageState] = useRecoilState(writePageStateAtom);
    return (
        <>
            <TopBar/>
            <Screen>
                <img className="logo" src={logo} />
                <span>
                    당신의 내일을 상상해보세요.
                </span>
                <div className='my-[30px]'>
                    <img className="ghost3D" src={Ai} />
                </div>

                <Button onClick={() => setWritePageState('moment')}>▶ 대화 시작하기</Button>

            </Screen>
        </>
    );
}


export default AI