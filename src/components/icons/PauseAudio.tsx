import React from 'react'

const PlayAudio = () => {
    return (
        <div className='w-full h-full flex items-center justify-center hover:rotate-180 transition duration-500'>
            <div className='w-[80%] h-[40%] flex items-center justify-center'>
                <span className='active__audio--button w-[3px] h-full bg-[#fff] mx-[3px] rounded-full'></span>
                <span className='active__audio--button w-[3px] h-full bg-[#fff] mx-[3px] rounded-full'></span>
                <span className='active__audio--button w-[3px] h-full bg-[#fff] mx-[3px] rounded-full'></span>
                <span className='active__audio--button w-[3px] h-full bg-[#fff] mx-[3px] rounded-full'></span>
                <span className='active__audio--button w-[3px] h-full bg-[#fff] mx-[3px] rounded-full'></span>
            </div>
        </div>
    )
}

export default React.memo(PlayAudio)