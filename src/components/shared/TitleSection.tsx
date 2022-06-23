import React from 'react';
import Image from '@/components/shared/Image'

interface TitleSectionProps {
    title: string;
}
const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
    return (
        <div className='w-full text-center flex items-center justify-center'>
            <div className='w-[385px] h-[14px] relative mr-4'>
                <Image src='/line-section.png' layout='fill' objectFit='cover' alt='background' className='w-full h-full' />
            </div>
            <h1 className='text-4xl font-charis text-[#cca574] mr-4 active__menu'>{title}</h1>
            <div className='w-[385px] h-[14px] relative rotate-180'>
                <Image src='/line-section.png' layout='fill' objectFit='cover' alt='background' className='w-full h-full' />
            </div>
        </div>
    );
}

export default React.memo(TitleSection)
