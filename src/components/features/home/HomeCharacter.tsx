import Image from '@/components/shared/Image'
import TitleSection from '@/components/shared/TitleSection'
import { BANNER_CHARACTER_HOME } from '@/constants'
import React from 'react'
import Slider from "react-slick"
import SampleNextArrow from '@/components/shared/SampleNextArrow'
import SamplePrevArrow from '@/components/shared/SamplePrevArrow'

const HomeCharacter = () => {
    const settings = {
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <React.Fragment>
            <div className='w-full h-[100vh] md:px-16 px-4 py-20 bg-black relative'>
                <TitleSection title='Character Information' />
                <div className='w-full h-full relative rounded-xl'>
                    <Image src='/cover-banner-character.png' layout='fill' objectFit='fill' alt='logo' className='z-40 rounded-xl' />
                    <Image src='/banner-character.png' layout='fill' objectFit='fill' alt='logo' className='z-30 rounded-xl opacity-60' />
                    <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2"  className='w-full h-full relative md:ml-40 ml-10 pointer-events-none z-40'>
                        <Image src='/GENSHIN.svg' layout='fill' objectFit='fill' alt='logo' className='opacity-50' />
                    </div>
            
                    <div className='absolute inset-0 w-full h-full bg-transparent'>
                        <Slider {...settings}>
                            {
                                BANNER_CHARACTER_HOME.map((character, index) => (
                                    <div className='w-full h-full relative' key={index}>
                                        <div className='w-full h-full relative'>
                                            <Image src={character.coverImage} layout='fill' objectFit='cover' alt='logo' className='z-40' />
                                            <div className='bg__chacracter absolute top-1/2 md:left-32 left-4 md:w-[500px] w-[90%] h-[230px] p-4 text-black z-40 rounded-md md:text-lg text-md flex overflow-hidden'>
                                                <div className='min-w-[15px] min-h-[15px] h-[15px] w-[15px] relative mr-2 mt-[5px]'>
                                                    <Image src='/download.png' layout='fill' objectFit='contain' alt='logo' className='z-40' />
                                                </div>
                                                <div className='ml-4'>
                                                    <p className='text__3dot'>{character.subText}</p>
                                                    <div className='mt-4 w-[200px] h-[40px] relative flex items-center justify-center cursor-pointer text-white text-sm hover:text-[#cca574]'>
                                                        <div className='w-full h-full relative z-30'>
                                                            <Image src='/button-image.png' layout='fill' objectFit='contain' alt='logo' className='z-40' />
                                                        </div>
                                                        <span className='absolute z-40'>{character.check}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(HomeCharacter)
