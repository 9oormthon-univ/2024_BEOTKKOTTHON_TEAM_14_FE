import React, { useState, useEffect } from 'react';
import Question from '@components/write/Question';
import QuestionCheck from '../../components/write/QuestionCheck';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { questionResultAtom } from '../../store/atom';

function QuestionPage() {
  const [result, setResult] = useRecoilState(questionResultAtom);

  useEffect(() => {
    axios
      .get('/api/answer/get')
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
        <QuestionCheck
          ques1={result.answer1}
          ques2={result.answer2}
          ques3={result.answer3}
          ques4={result.answer4}
          picture={result.picture}
        />
      ) : (
        <Question />
      )}
    </>
  );
}

export default QuestionPage;
