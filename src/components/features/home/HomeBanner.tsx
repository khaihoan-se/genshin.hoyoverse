import React from 'react';
import { BANNER_DATA } from '@/constants/index'
import Slider from 'react-slick'
import Image from '@/components/shared/Image';

const HomeBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    return (
        <Slider {...settings}>
            {BANNER_DATA.map((banner: any, index: number) => (
                <div 
                    className='w-full h-full absolute inset-0'
                    key={index}
                >
                    <Image src={banner.bannerImage} layout='fill' objectFit='cover' alt='logo' />
                </div>
            ))}
        </Slider>
    )
}

export default React.memo(HomeBanner)