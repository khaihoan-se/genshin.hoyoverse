import React, { useState } from 'react'
import Image from '@/components/shared/Image'
import { motion } from 'framer-motion'
import { BsFillPlayFill } from 'react-icons/bs'
import ModuleVideo from '@/components/shared/ModuleVideo';

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
                <Image src='/banner-1.webp' layout='fill' objectFit='cover' alt='background' className='w-full h-full' />
                <div className="absolute inset-0 flex flex-col justify-center px-4 banner__overlay md:px-12"></div>
                {/* <AnimatePresence>
                </AnimatePresence> */}
                <motion.div
                    variants={bannerVariants}
                    animate="animate"
                    initial="initial"
                    className="absolute md:left-16 left-4 top-1/2 -translate-y-1/2 w-full"
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
                        className='button__banner mb-6 mt-6 w-[356px] h-[76px] flex items-center justify-center'
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
                </motion.div>
                <div className="absolute bottom-0 w-full h-16 banner__overlay--down"></div>
            </div>
            {isOpen && <ModuleVideo url='https://www.youtube.com/watch?v=dc3eD6C6Gbk' setIsOpen={setIsOpen} />}
        </React.Fragment>
    )
}

export default React.memo(HomeBanner)