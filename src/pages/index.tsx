import HomeBanner from '@/components/features/home/HomeBanner'
import { NextPage } from 'next'
import React from 'react'
import Head from '@/components/shared/Head'
import HomeCharacter from '@/components/features/home/HomeCharacter'
import ClientOnly from '@/components/shared/ClientOnly'

const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         <Head
            title="Genshin Impact"
         />
         <ClientOnly>
            <HomeBanner />
            <HomeCharacter />
         </ClientOnly>
      </React.Fragment>
   )
}

export default HomePage