import React, { useState } from 'react';
import Typography from '../Typography';

function Question() {
    const [questionAnswer, setQuestionAnswer] = useState('');
    const questionTexts = [
        { questionTexts: "Q1. 비상금이 있다면, 어디에 있나요?" },
        { questionTexts: "Q2. 원하는 당신의 영정 사진을 올려보세요!" },
        { questionTexts: "Q3. 당신이 원하는 묘비명은 무엇인가요?" },
        { questionTexts: "Q4. 어떤 분위기의 장례식을 원하시나요?" },
        { questionTexts: "Q5. 부모님 혹은 친구가 나의 핸드폰을 열어보기를 원하시나요?" }
    ]

    return (
        <div className='p-[28px]'>
        {
            questionTexts.map((item) => {
                return (
                    <div className="mt-[20px] mb-[10px]">
                        <Typography title={`${item.questionTexts}`} type={'question15'} />
                        <textarea
                            className="bg-[#F5F5F5] w-[100%] rounded-[10px] px-[15px] py-[10px]"
                            value={questionAnswer} onChange={(e) => setQuestionAnswer(e.target.value)}
                            ></textarea>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Question