import React, { useEffect } from 'react'

export default function Typography({title, type, m=0}) {
    const render = () => {
        if(type === 'bold30'){
            return <div className={`text-[30px] font-bold m-[${m}px]`}>{title}</div>
        } else if(type === 'semibold25'){
            return <div className='text-[25px] font-semibold m-[${m}px] '>{title}</div>
        } else if(type === 'regular25'){
            return <div className='text-[25px] m-[${m}px]'>{title}</div>
        } else if(type === 'bold20'){
            return <div className='text-[20px]  font-bold m-[${m}px]'>{title}</div>
        } else if(type === 'semibold20'){
            return <div className='text-[20px]  font-semibold m-[${m}px]'>{title}</div>
        } else if(type === 'regular20'){
            return <div className='text-[20px] m-[${m}px]'>{title}</div>
        } else if(type === 'bold15'){
            return <div className='text-[15px] font-semibold m-[${m}px]'>{title}</div>
        } else if(type === 'regular15'){
            return <div className='text-[15px] m-[${m}px]'>{title}</div>
        }    
    }

    return (
        <>
            {render()}
        </>
    )
}