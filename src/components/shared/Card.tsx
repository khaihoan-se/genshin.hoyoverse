import React from 'react'
import Image from '@/components/shared/Image'

interface CardProps {
    coverImage: string;
    description: string;
    name: string;
    price: string;
}
const Card: React.FC<CardProps> = ({ coverImage, description, name, price }) => {
    return (
        <div className='h-[400px] card__products flex items-center justify-center flex-col'>
            <div className='w-[300px] h-[300px] relative mt-[-150px] mb-6'>
                <Image src={coverImage} layout='fill' objectFit='fill' alt='logo' />
            </div>
            <div className='w-full px-4'>
                <p className='text__3dot h-[80px] mb-6'>{description}</p>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl text-[#cca574]'>{name}</h2>
                    <div className='flex items-center text-lg'>
                        <span>{price}</span>
                        <div className='w-6 h-6 relative'>
                            <Image src='/Item_Mora.webp' layout='fill' objectFit='fill' alt='logo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Card)