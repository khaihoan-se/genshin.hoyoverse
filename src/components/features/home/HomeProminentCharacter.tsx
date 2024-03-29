import React, { useState, useMemo } from 'react'
import TitleSection from '@/components/shared/TitleSection'
import Image from '@/components/shared/Image'
import HomeCircleItem from '@/components/shared/HomeCircleItem'
import { CirSlide } from '@/constants'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { activeSliderCri } from '@/utils'

const transition = [0.33, 1, 0.68, 1];

const HomeProminentCharacter = () => {
    const [index, setIndex] = useState(0)
    const [isOpen, toggleOpen] = useState(true);
    
    const activeSlide = useMemo(() => CirSlide[index], [CirSlide, index]);

    return (
        <React.Fragment>
            <div className='w-full min-h-[100vh] md:px-16 px-4 py-20 bg-black relative'>
                <TitleSection title='Prominent Character' />
                <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="2"  className='w-full h-[90vh] relative md:mr-40 mr-10 pointer-events-none z-40'>
                    <Image src='/GENSHIN.svg' layout='fill' objectFit='fill' alt='logo' className='opacity-20' />
                </div>
                <div className='w-full h-full bg-transparent flex items-center justify-center flex-col md:mt-20 mt-10 absolute inset-0 z-40'>
                    <div className='md:w-[500px] md:h-[500px] w-[350px] h-[350px] bg-transparent rounded-full border-[2px] border-[#D9D9D9] relative'>
                        <motion.div
                            initial={isOpen ? 'closed': 'open'}
                            animate={isOpen ? "open" : "closed"}
                            exit={isOpen ? 'closed': 'open'}
                            transition={transition}
                            className='w-full h-full relative rounded-full'
                        >
                            <Image src={activeSlide.coverImage} layout='fill' objectFit='cover' alt='logo' className='rounded-full' />
                        </motion.div>
                        <div className={classNames(
                            'w-full h-full absolute inset-0 transition duration-500',
                            activeSliderCri(activeSlide.id)
                        )}>
                            <div className='w-full h-full relative'>
                                {
                                    CirSlide.map((item, indexA) => (
                                        <HomeCircleItem 
                                            key={indexA} 
                                            className={item.className} 
                                            iconImage={item.iconImage} 
                                            setIndex={setIndex}
                                            index={index}
                                            id={item.id}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(HomeProminentCharacter)