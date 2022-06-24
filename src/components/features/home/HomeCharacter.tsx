import Image from '@/components/shared/Image';
import TitleSection from '@/components/shared/TitleSection';
import { BANNER_CHARACTER_HOME } from '@/constants';
import React from 'react';
import Slider from "react-slick";

const HomeCharacter = () => {
    const settings = {
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
                    {/* {
                        BANNER_CHARACTER_HOME.map((character) => (
                            <div className='absolute inset-0 w-full h-full bg-transparent'>
                                <div className='w-full h-full relative'>
                                    <Image src={character.coverImage} layout='fill' objectFit='cover' alt='logo' className='z-40' />
                                    <div className='bg__chacracter absolute top-1/2 md:left-32 left-4 md:w-[500px] w-[90%] p-4 text-black z-40 rounded-md md:text-lg text-md flex'>
                                        <div className='min-w-[15px] min-h-[15px] h-[15px] w-[15px] relative mr-2 mt-[5px]'>
                                            <Image src='/download.png' layout='fill' objectFit='contain' alt='logo' className='z-40' />
                                        </div>
                                        <div>
                                            <p>{character.subText}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:w-[200px] md:h-[200px] w-[100px] h-[100px] absolute top-0 md:left-44 left-0'>
                                    <div className='w-full h-full relative'>
                                        <Image src={character.erro} layout='fill' objectFit='cover' alt='logo' className='z-40' />
                                    </div>
                                </div>
                            </div>
                        ))
                    } */}
                    {/* <div className='absolute inset-0 w-full h-full bg-transparent'>
                        <div className='w-full h-full relative'>
                            <Image src='/image-03.png' layout='fill' objectFit='cover' alt='logo' className='z-40' />
                            <div className='bg__chacracter absolute top-1/2 md:left-32 left-4 md:w-[500px] w-[90%] p-4 text-black z-40 rounded-md md:text-lg text-md flex'>
                                <div className='min-w-[15px] min-h-[15px] h-[15px] w-[15px] relative mr-2 mt-[5px]'>
                                    <Image src='/download.png' layout='fill' objectFit='contain' alt='logo' className='z-40' />
                                </div>
                                <div>
                                    <p>
                                        As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.
                                    </p>
                                    <p>She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[200px] md:h-[200px] w-[100px] h-[100px] absolute top-0 md:left-44 left-0'>
                            <div className='w-full h-full relative'>
                                <Image src='/erro-01.png' layout='fill' objectFit='cover' alt='logo' className='z-40' />
                            </div>
                        </div>
                    </div> */}
                    <div className='absolute inset-0 w-full h-full bg-transparent'>
                        <Slider {...settings}>
                            {
                                BANNER_CHARACTER_HOME.map((character, index) => (
                                    <div className='w-full h-full relative' key={index}>
                                        <div className='w-full h-full relative'>
                                            <Image src={character.coverImage} layout='fill' objectFit='cover' alt='logo' className='z-40' />
                                            <div className='bg__chacracter absolute top-1/2 md:left-32 left-4 md:w-[500px] w-[90%] p-4 text-black z-40 rounded-md md:text-lg text-md flex'>
                                                <div className='min-w-[15px] min-h-[15px] h-[15px] w-[15px] relative mr-2 mt-[5px]'>
                                                    <Image src='/download.png' layout='fill' objectFit='contain' alt='logo' className='z-40' />
                                                </div>
                                                <div>
                                                    <p>{character.subText}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='md:w-[200px] md:h-[200px] w-[100px] h-[100px] absolute top-0 md:left-44 left-0'>
                                            <div className='w-full h-full relative'>
                                                <Image src={character.erro} layout='fill' objectFit='cover' alt='logo' className='z-40' />
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
