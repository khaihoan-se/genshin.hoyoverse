import HomeBanner from '@/components/features/home/HomeBanner'
import { NextPage } from 'next'
import React from 'react'
import Head from '@/components/shared/Head'
import HomeCharacter from '@/components/features/home/HomeCharacter'
import ClientOnly from '@/components/shared/ClientOnly'
import HomeProducts from '@/components/features/home/HomeProducts'

const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         <Head
            title="Genshin Impact"
         />
         <ClientOnly>
            <HomeBanner />
            <HomeCharacter />
            <HomeProducts />
         </ClientOnly>
      </React.Fragment>
   )
}

export default HomePage