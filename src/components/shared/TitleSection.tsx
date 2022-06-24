import React from 'react';
import Image from '@/components/shared/Image'

interface TitleSectionProps {
    title: string;
}
const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
    return (
        <div className='w-full text-center flex items-center justify-center mb-6'>
            <div className='w-8 h-8 relative'>
                <Image src='/Item_Primogem.webp' layout='fill' objectFit='fill' alt='background' className='w-full h-full' />
            </div>
            <div className='w-12 h-12 relative'>
                <Image src='/Item_Primogem.webp' layout='fill' objectFit='fill' alt='background' className='w-full h-full' />
            </div>
            <div className='w-16 h-16 relative md:mr-4 mr-0'>
                <Image src='/Item_Primogem.webp' layout='fill' objectFit='fill' alt='background' className='w-full h-full' />
            </div>

            <h1 className='md:text-2xl text-xl font-charis text-[#cca574] md:mr-4 mr-0'>{title}</h1>

            <div className='w-16 h-16 relative'>
                <Image src='/Item_Primogem.webp' layout='fill' objectFit='fill' alt='background' className='w-full h-full' />
            </div>
            <div className='w-12 h-12 relative'>
                <Image src='/Item_Primogem.webp' layout='fill' objectFit='fill' alt='background' className='w-full h-full' />
            </div>
            <div className='w-8 h-8 relative'>
                <Image src='/Item_Primogem.webp' layout='fill' objectFit='fill' alt='background' className='w-full h-full' />
            </div>
        </div>
    );
}

export default React.memo(TitleSection)
