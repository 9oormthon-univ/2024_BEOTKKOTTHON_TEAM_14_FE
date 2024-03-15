import React, { useEffect } from 'react'

export default function Typography({title, type, mt=0}) {
    const render = () => {
        if(type === 'bold30'){
            return <div className={`text-[30px] font-bold mt-[${mt}px]`}>{title}</div>
        } else if(type === 'bold25'){
            return <div className='text-[25px] text-[#606060] font-semibold mt-[10px]'>{title}</div>
        } else if(type === 'regular25'){
            return <div className='text-[25px] text-[#606060] mt-[7px]'>{title}</div>
        } else if(type === 'bold20'){
            return <div className='text-[20px] mr-[10px]  font-semibold mb-[10px]'>{title}</div>
        } else if(type === 'regular20'){
            return <div className='text-[20px] text-[#606060] mt-[7px]'>{title}</div>
        } else if(type === 'bold15'){
            return <div className='text-[15px] mr-[10px]  font-semibold mb-[10px]'>{title}</div>
        } else if(type === 'regular15'){
            return <div className='text-[15px] text-[#606060]'>{title}</div>
        }    
    }

    return (
        <>
            {render()}
        </>
    )
}