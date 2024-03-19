import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { writePageStateAtom } from '@store/atom';

import Message from '@components/Write/MessageList';
import Write from '@components/Write/Write';
import Testament from '@components/Write/Testament';
import OpenAI from 'openai';

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

  return <>{renderComponent()}</>;
}

export default WritePage;
