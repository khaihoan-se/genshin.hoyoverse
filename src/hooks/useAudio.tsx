import { useEffect, useState } from 'react'

const useAudio = (url: string) => {
    const [audio] = useState<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(url) : undefined);
    const [playing, setPlaying] = useState(false);
  
    const toggle: any = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },[playing]);
  
    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);
  
    return [playing, toggle];
};

export default useAudio