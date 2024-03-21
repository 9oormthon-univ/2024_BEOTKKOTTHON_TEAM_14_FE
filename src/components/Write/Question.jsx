import React, { useState } from 'react';
import Typography from '../Typography';
import home6 from "@assets/home_6.png";
import { styled } from 'styled-components';

const SaveButton = styled.button`
    margin-top: 20px;
    border-radius: 50px;
    display: flex;
    color: white;
    background-color: black;
    font-size: 15px;
    gap: 10px;
    width: 100px;
    height: 30px;
    margin-bottom: 16px;
    justify-content: center;
    align-items: center;
`;
function Question() {
    const [questionAnswer1, setQuestionAnswer1] = useState([]);
    const [questionAnswer2, setQuestionAnswer2] = useState([]);
    const [questionAnswer3, setQuestionAnswer3] = useState([]);
    const [questionAnswer4, setQuestionAnswer4] = useState([]);
    
    const questionTexts = [
        { questionTexts: "Q1. 비상금이 있다면, 어디에 있나요?" },
        { questionTexts: "Q2. 어떤 분위기의 장례식을 원하시나요?" },
        { questionTexts: "Q3. 당신이 원하는 묘비명은 무엇인가요?" },
        { questionTexts: "Q4. 부모님 혹은 친구가 나의 핸드폰을 열어보기를 원하시나요?" }
    ]

    return (
        <>
            <div className='p-[28px]'>
                <div className='ml-[95px] mb-[20px]'>
                    <Typography title={'About ME'} type={'bold30'} />
                </div>
                {
                    questionTexts.map((item) => {
                        return (
                            <div className="mt-[20px] mb-[10px]">
                                <Typography title={`${item.questionTexts}`} type={'question15'} />
                                <textarea
                                    className="bg-[#F5F5F5] w-[100%] rounded-[10px] px-[15px] py-[10px]"
                                    value={questionAnswer1} onChange={(e) => setQuestionAnswer1(e.target.value)}
                                ></textarea>
                            </div>
                        )
                    })
                }
                <div className="flex justify-center mt-[10px]">
                    <SaveButton
                        onClick={() => {
                            setAddMessage(true);
                        }}
                    >
                        완료
                    </SaveButton>
                </div>
            </div>
        </>
    )
}

export default Question