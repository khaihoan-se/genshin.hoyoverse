import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

const PlayAudio = () => {
    return (
        <div className='w-full h-full flex items-center justify-center hover:rotate-180 transition duration-500'>
            <BsFillPlayFill className='text-4xl' />
        </div>
    )
}

export default React.memo(PlayAudio)