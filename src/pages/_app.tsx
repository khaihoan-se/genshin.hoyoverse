import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/card.scss'

import BaseLayout from '@/components/layouts/BaseLayout'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <BaseLayout>
            <Component {...pageProps} />
         </BaseLayout>
      </>
   )
}

export default MyApp;