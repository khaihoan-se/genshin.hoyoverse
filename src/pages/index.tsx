import HomeBanner from '@/components/features/home/HomeBanner'
import { GetStaticProps, NextPage } from 'next'
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
import { KeyFeaturesTypes, CharacterProps } from '@/types'

// Data
import { PRODUCTS_HOME, KEY_FEATURES } from '@/constants'
interface HomaPageProps {
   keyFeatures: KeyFeaturesTypes[];
   homeProducts: CharacterProps[];
}

const HomePage: NextPage<HomaPageProps> = ({
   keyFeatures,
   homeProducts
}) => {   
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
            <HomeProducts data={PRODUCTS_HOME} />
            <KeyFeatures data={KEY_FEATURES} />
         </ClientOnly>
      </React.Fragment>
   )
}

// export const getStaticProps: GetStaticProps = async () => {
//    const { data: keyFeatures } = await axios.get(`${BASE_URL}/key-features`);
//    const { data: homeProducts } = await axios.get(`${BASE_URL}/all_character?limit=8`);
//    return {
//       props: {
//          keyFeatures: keyFeatures || null,
//          homeProducts: homeProducts || null
//       }
//    }
// }

export default HomePage