import HomeBanner from '@/components/features/home/HomeBanner'
import { NextPage } from 'next'
import React from 'react'
import Head from '@/components/shared/Head'

const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         <Head
            title="Genshin Impact"
         />
         <HomeBanner />
         <div className='h-[1000px]'>Home Page</div>
      </React.Fragment>
   )
}

export default HomePage