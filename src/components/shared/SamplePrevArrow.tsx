import React from 'react'
import Image from '@/components/shared/Image'
import classNames from 'classnames'

interface SamplePrevArrowProps {
    className?: string;
    onClick?: any;
}
const SamplePrevArrow: React.FC<SamplePrevArrowProps> = (props) => {
    const { className, onClick } = props;
    return (
        <div className={classNames(
            'w-[45px] absolute top-1/2 right-0 z-40 md:block hidden',
            className
        )} onClick={onClick}>
            <div className='w-full h-full relative'>
                <Image src='/arrow-slider-button-left.png' layout='fill' objectFit='fill' alt='logo' />
            </div>
        </div>
    );
}

export default React.memo(SamplePrevArrow)