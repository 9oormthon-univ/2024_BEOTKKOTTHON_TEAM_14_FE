import React from 'react';
import { useRecoilState } from 'recoil';

import { writePageStateAtom } from '@store/atom';
import Message from '@components/write/MessageList';
import Write from '@components/write/Write';
import Testament from '@components/write/Testament';
import Question from '@components/write/Question';

function WritePage() {
  const [pageName, setPageName] = useRecoilState(writePageStateAtom);

  const renderComponent = () => {
    if (pageName == 'write') {
      return <Write />;
    }
    if (pageName == 'message') {
      return <Message />;
    }
    if (pageName == 'testament') {
      return <Testament />;
    }
    if (pageName == 'question') {
      return <Question />;
    }
  };

  return <>{renderComponent()}</>;
}

export default WritePage;
