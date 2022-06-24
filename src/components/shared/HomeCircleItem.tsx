import classNames from 'classnames';
import React from 'react'
import Image from '@/components/shared/Image'
import Link from 'next/link';

interface HomeCircleItemProps {
    className?: string;
    iconImage?: string;
    setIndex?: any;
    id?: number;
    index?: number;
}
const HomeCircleItem: React.FC<HomeCircleItemProps> = ({ className, iconImage, setIndex, id, index }) => {
    const isActive = (active: number) => {
        if(active === index) return true
    }

    console.log(className);
    
    return (
        <div className={classNames(
            'w-[90px] h-[90px] bg-slate-900 rounded-full absolute flex items-center justify-center cursor-pointer border-[1px] border-white',
            className
        )}
            onClick={() => setIndex(id)}
        >
            <div className={classNames(
                'w-full h-full relative opacity-10 hover:opacity-100 transition duration-500',
                isActive(id) && 'opacity-[1]'
            )}>
                <Image src={iconImage} layout='fill' objectFit='fill' alt='logo' className='rounded-full' />
                {
                    isActive(id) && 
                    (<Link href={`/products/${id}`}>
                        <div className='sub--item w-[230px] h-[1px] bg-white absolute md:flex hidden'>
                            <span className='text-lg mr-1 mt-1'>100,000</span>
                            <div className='w-8 h-8 relative'>
                                <Image src='/Item_Mora.webp' layout='fill' objectFit='fill' alt='logo' />
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    )
}

export default React.memo(HomeCircleItem)