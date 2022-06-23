import HomeBanner from '@/components/features/home/HomeBanner'
import { NextPage } from 'next'
import React from 'react'

const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         <HomeBanner />
         <div className='h-[1000px]'>Home Page</div>
      </React.Fragment>
   )
}

export default HomePage