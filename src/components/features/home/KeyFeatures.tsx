import React from 'react';
import TitleSection from '@/components/shared/TitleSection'
import { KeyFeaturesTypes } from '@/types'
import Image from '@/components/shared/Image'

interface KeyFeaturesProps {
    data: KeyFeaturesTypes[];
}
const KeyFeatures: React.FC<KeyFeaturesProps> = ({ data }) => {
    return (
        <React.Fragment>
            <div className='w-full md:px-16 px-4 py-10 bg-[#101010] relative'>
                <TitleSection title='Genshin Impact Key Features' />
                <div className='grid__keyfeatures w-full flex items-center overflow-hidden relative mt-10'>
                    {data.map((key, index) => (
                        <div key={index} className=''>
                            <div className='w-full h-[325px] relative rounded-xl'>
                                <Image src={key.image} layout='fill' objectFit='cover' alt={key.title} className='object-cover rounded-xl' />
                            </div>
                            <div className='w-full mt-10 h-[160px]'>
                                <h2 className='text-2xl uppercase font-light'>{key.title}</h2>
                                <p className='text-lg mt-4'>{key.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(KeyFeatures)
