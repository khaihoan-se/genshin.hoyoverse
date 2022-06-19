import HomeBanner from '@/components/features/home/HomeBanner'
import { NextPage } from 'next'
import React from 'react'
import Spline from '@splinetool/react-spline';

const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         <div className='w-full h-[81.1vh] tablet:h-[40.6vh] min-h-[480px] relative'>
         <Spline scene="https://prod.spline.design/W9PKcD8BXPZdb7lC/scene.splinecode" />
         </div>
      </React.Fragment>
   )
}

export default HomePage