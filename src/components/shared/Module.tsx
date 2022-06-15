import React from 'react'

interface ModuleProps {
    children: React.ReactNode;
}

const Module: React.FC<ModuleProps> = ({ children }) => {
    return (
        <div className='bg__module w-[100vw] h-[100vh] absolute inset-0 z-50 flex items-center justify-center'>
            <div className='min-w-[400px] bg-[#23272f] pt-[50px] px-[65px] pb-[40px] rounded-xl flex flex-col items-center relative'>
                {children}
            </div>
        </div>
    )
}

export default React.memo(Module)