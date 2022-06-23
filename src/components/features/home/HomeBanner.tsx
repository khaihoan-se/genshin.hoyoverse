import React, { useState } from 'react'
import Image from '@/components/shared/Image'
import { AnimatePresence, motion } from 'framer-motion'
import { BsFillPlayFill } from 'react-icons/bs'
import ModuleVideo from '@/components/shared/ModuleVideo';
import DownloadBanner from './DownloadBanner';

const bannerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
  
const transition = [0.33, 1, 0.68, 1];

const HomeBanner = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <React.Fragment>
            <div className='w-full h-[100vh] relative'>
                <AnimatePresence>
                    <Image src='/banner-1.webp' layout='fill' objectFit='cover' alt='background' className='w-full h-full' />
                </AnimatePresence>
                <motion.div
                    variants={bannerVariants}
                    animate="animate"
                    initial="initial"
                    className="absolute left-12 top-1/2 -translate-y-1/2 w-full"
                    transition={{ ease: transition, duration: 1 }}
                >
                    <motion.h2
                        initial={{ y: -30, x: 0 }}
                        animate={{ y: 0, x: 0 }}
                        exit={{ y: -30, x: 0 }}
                        transition={transition}
                        className='md:text-6xl text-4xl text-[#cca574] font-charis active__menu'
                    >
                        Best Open Work
                    </motion.h2>
                    <motion.h2
                        initial={{ y: 30, x: 0 }}
                        animate={{ y: 0, x: 0 }}
                        exit={{ y: 30, x: 0 }}
                        transition={transition}
                        className='md:text-6xl text-4xl text-[#fff] font-charis mt-2'
                    >
                        Action RPG Game
                    </motion.h2>
                    <motion.p
                        initial={{ y: 0, x: 30 }}
                        animate={{ y: 0, x: 0 }}
                        exit={{ y: 0, x: 30 }}
                        transition={transition}
                        className='md:w-[50%] w-[70%] md:mt-10 mt-4 md:text-lg text-md'
                    >
                        You Have Arrived In Teyvat - A Fantasy World Where The Seven Elements Flow And Converge. In The Distant Past. The Archones Granted Mortals Unique Elemmental Abililites.
                    </motion.p>
                    <motion.div
                        initial={{ y: 0, x: -30 }}
                        animate={{ y: 0, x: 0 }}
                        exit={{ y: 0, x: -30 }}
                        transition={transition}
                        className='button__banner mb-6 mt-6 md:w-[356px] w-[256px] h-[76px] flex items-center justify-center'
                    >
                        <button className='button__banner--button relative block mx-auto my-0 w-[48px] h-[48px] rounded-full border-none bg-[#fff] text-[#000] cursor-pointer outline-none hover:bg-transparent hover:text-[#fff] transition duration-500'
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsOpen(true)
                            }}
                        >
                            <span className='w-full h-full flex items-center justify-center'>
                                <BsFillPlayFill className='text-2xl' />
                            </span>
                        </button>
                    </motion.div>
                    {/* <DownloadBanner /> */}
                </motion.div>

                <div className="absolute bottom-0 w-full h-16 banner__overlay--down"></div>
            </div>
            {isOpen && <ModuleVideo url='https://www.youtube.com/watch?v=2sie0jcXi7k' setIsOpen={setIsOpen} />}
        </React.Fragment>
    )
}

export default React.memo(HomeBanner)