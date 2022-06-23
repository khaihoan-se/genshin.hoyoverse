import React, { useRef } from 'react'
import Header from '@/components/partials/Header'
import Audio from '../partials/Audio'
import Footer from '@/components/partials/Footer'
import { LocomotiveScrollProvider } from "react-locomotive-scroll"


const BaseLayout = ({ children }) => {
    const containerRef = useRef(null);
    
    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                tablet: {
                    smooth: true,
                    breakpoint: 768,
                },
            }}
            watch={[]}
            containerRef={containerRef}
        >
            <Header />
            {/* <MenuCl /> */}
            <main data-scroll-container className='overflow-hidden' ref={containerRef}>{children}</main>
            {/* Audio */}
            <Audio />
            {/* Footer */}
            <Footer />
        </LocomotiveScrollProvider>
    )
}
export default BaseLayout;