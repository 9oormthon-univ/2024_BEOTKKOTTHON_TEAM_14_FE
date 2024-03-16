import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { momentPageStateAtom } from '@store/atom';

import Message from '@components/write/MessageList';
import Write from '@components/write/Write';
import Testament from '@components/write/Testament';

import Moment from '@components/moment/Moment';

function MomentPage() {
  const [pageName, setPageName] = useRecoilState(momentPageStateAtom);

  const renderComponent = () => {
    if (pageName == 'moment') {
      return <Moment />;
    }
    if (pageName == 'message') {
      return <Message />;
    }
  };

  useEffect(() => {
    console.log(pageName);
  }, [pageName]);
  return <>{renderComponent()}</>;
}

export default MomentPage;
