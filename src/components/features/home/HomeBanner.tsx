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
                    className='w-full h-full'
                    key={index}
                >
                    <Image src={banner.bannerImage} layout='fill' objectFit='cover' alt='logo' />
                    <div className='px-12 tablet:px-4 mt-[80px] text-white absolute'>
                        <div className='relative min-w-[200px] min-h-[80px] w-full h-full mb-8'>
                            <Image src={banner.logo} layout='fill' objectFit='contain' alt='logo' className='w-full h-full' />
                        </div>
                        <div>
                            <h2 className='text-[26px] mb-3 font-light'>{banner.subTitle}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    )
}

export default React.memo(HomeBanner)