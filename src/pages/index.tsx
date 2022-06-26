import HomeBanner from '@/components/features/home/HomeBanner'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Head from '@/components/shared/Head'
import HomeCharacter from '@/components/features/home/HomeCharacter'
import ClientOnly from '@/components/shared/ClientOnly'
import HomeProminentCharacter from '@/components/features/home/HomeProminentCharacter'
import HomeBannerVideo from '@/components/features/home/HomeBannerVideo'
import HomeProducts from '@/components/features/home/HomeProducts'
import KeyFeatures from '@/components/features/home/KeyFeatures'
import axios from 'axios'
import { BASE_URL } from '@/utils/constant'
import { KeyFeaturesTypes } from '@/types'

interface HomaPageProps {
   keyFeatures: KeyFeaturesTypes;
}

const HomePage: NextPage<HomaPageProps> = ({ keyFeatures }) => {
   return (
      <React.Fragment>
         <Head
            title="Genshin Impact"
         />
         <ClientOnly>
            <HomeBanner />
            <HomeCharacter />
            <HomeProminentCharacter />
            <HomeBannerVideo />
            <HomeProducts />
            <KeyFeatures />
         </ClientOnly>
      </React.Fragment>
   )
}

export const getServerSideProps: GetServerSideProps = async () => {
   const { data: keyFeatures } = await axios.get(`${BASE_URL}/key-features`);
   return {
      props: {
         keyFeatures: keyFeatures || null
      }
   }
}

export default HomePage