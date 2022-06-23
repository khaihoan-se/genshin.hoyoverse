import React from 'react'
import Header from '@/components/partials/Header'
import Audio from '../partials/Audio';
import Footer from '@/components/partials/Footer'
// import MenuCl from '../partials/MenuCl'

const BaseLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {/* <MenuCl /> */}
            <main className='overflow-hidden'>{children}</main>
            {/* Audio */}
            <Audio />
            {/* Footer */}
            <Footer />
        </React.Fragment>
    )
}
export default BaseLayout;