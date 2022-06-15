import { AppProps } from 'next/app'
import '../styles/index.css'
import BaseLayout from '@/components/layouts/BaseLayout'

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