import React from 'react';
import TitleSection from '@/components/shared/TitleSection'

const KeyFeatures = () => {
    return (
        <React.Fragment>
            <div className='w-full md:px-16 px-4 py-10 bg-[#101010] relative'>
                <TitleSection title='Genshin Impact Key Features' />
                <div className='w-full h-[60vh] bg-slate-400 flex items-center overflow-hidden relative'>
                   
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(KeyFeatures)
