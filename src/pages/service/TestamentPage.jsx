import React, { useEffect } from 'react';
import Testament from '@components/write/Testament';
import TestamentCheck from '../../components/write/TestamentCheck';
import { useRecoilState } from 'recoil';
import { testamentResultAtom } from '../../store/atom';
import axios from 'axios';

function TestamentPage() {
  const [result, setResult] = useRecoilState(testamentResultAtom);

  useEffect(() => {
    axios
      .get('/api/will/get')
      .then((res) => {
        setResult(res.data.result);
      })
      .catch(() => {
        setResult(null);
      });
  }, []);
  return (
    <>
      {result ? (
        <TestamentCheck
          answerFree={result.answerFree}
          signature={result.signature}
        />
      ) : (
        <Testament className="view-page" />
      )}
    </>
  );
}

export default TestamentPage;
