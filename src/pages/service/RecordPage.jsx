import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { recordPageStateAtom } from '@store/atom';
import Testament from '@components/write/Testament';
import Record from '@components/write/Record';
import Question from '@components/write/Question';

function RecordPage() {
  const [pageName, setPageName] = useRecoilState(recordPageStateAtom);

  const renderComponent = () => {
    if (pageName == 'record') {
      return <Record />;
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

export default RecordPage;
