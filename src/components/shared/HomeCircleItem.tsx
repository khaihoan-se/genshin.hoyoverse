import classNames from 'classnames';
import React from 'react'
import Image from '@/components/shared/Image'

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
    return (
        <div className={classNames(
            'md:w-[90px] md:h-[90px] w-[65px] h-[65px] bg-slate-900 rounded-full absolute flex items-center justify-center cursor-pointer border-[1px] border-white outline-none',
            className,
            isActive(id) && 'active__item'
        )}
            onClick={() => setIndex(id)}
        >
            <div className={classNames(
                'w-full h-full relative opacity-10 hover:opacity-100 transition duration-500',
                isActive(id) && 'opacity-[1]'
            )}>
                <Image src={iconImage} layout='fill' objectFit='fill' alt='logo' className='rounded-full' />
            </div>
        </div>
    )
}

export default React.memo(HomeCircleItem)