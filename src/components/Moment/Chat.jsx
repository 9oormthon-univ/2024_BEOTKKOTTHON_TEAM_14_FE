import React, { useState } from 'react'
import ComputerChat from './ComputerChat';

function Chat() {
    const [chatList, setChatList] = useState();

    return (
        <>
            <div className='bg-[#00000f] text-[white] w-[100%] h-[100vh]'>
                <ComputerChat/>
            </div>
        </>
    )
}

export default Chat