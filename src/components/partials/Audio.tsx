import React from 'react'
import useAudio from '@/hooks/useAudio'
import PauseAudio from '../icons/PauseAudio';
import PlayAudio from '../icons/PlayAudio';

const Audio = () => {
    const [playing, toggleClick, toggleKeyPress] = useAudio('/audio-genshin-impact.mp3');

    return (
        <div className='fixed md:bottom-10 bottom-4 md:right-10 right-4 z-50 text-white'>
            <button onClick={toggleClick} onKeyPress={toggleKeyPress}
                className='active__color w-14 h-14 rounded-full bg-[#cca574] flex items-center justify-center outline-none'
            >{playing ? <PauseAudio /> : <PlayAudio />}</button>
        </div>
    )
}

export default Audio