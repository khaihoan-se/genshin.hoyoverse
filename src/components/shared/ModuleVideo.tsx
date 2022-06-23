import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'

interface ModuleVideoProps {
    url?: string;
    setIsOpen: any;
}
const ModuleVideo: React.FC<ModuleVideoProps> = ({ url, setIsOpen }) => {
    useEffect(() => {
        document.addEventListener('click', (e) => {
            e.preventDefault()
            setIsOpen(false)
        })
    }, [])
    return (
        <React.Fragment>
            <div className='bg__rgba fixed inset-0 w-full h-[100vh] flex items-center justify-center z-50 pointer-events-none overflow-hidden'>
                <div className='md:w-[896px] w-full md:h-[504px] h-[400px] bg-transparent md:px-10 px-0 relative'>
                    <div className='w-full h-full'>
                        <ReactPlayer 
                            url={url}
                            width='100%'
                            height='100%'
                            playing={true}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(ModuleVideo)