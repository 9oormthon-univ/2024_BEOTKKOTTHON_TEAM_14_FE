import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { writePageStateAtom } from '@store/atom';

import Message from '@components/write/MessageList';
import Write from '@components/write/Write';
import Testament from '@components/write/Testament';

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
  };

  useEffect(() => {
    console.log(pageName);
  }, [pageName]);
  return <>{renderComponent()}</>;
}

export default WritePage;
