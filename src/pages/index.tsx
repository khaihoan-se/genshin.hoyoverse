import { NextPage } from 'next'
import React from 'react'
import Image from '@/components/shared/Image'

const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         <div className='w-[100vw] h-[100vh] relative'>
            <Image src='/1123013.jpg' layout='fill' objectFit='cover' alt='background' className='w-full h-full' />
            <div className="absolute bottom-0 w-full h-16 banner__overlay--down"></div>

         </div>
      </React.Fragment>
   )
}

export default HomePage