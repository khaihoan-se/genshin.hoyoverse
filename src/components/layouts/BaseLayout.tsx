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
            <Audio />
            <div data-scroll-container className='overflow-hidden' ref={containerRef}>
                <main>{children}</main>
                <Footer />
            </div>
        </LocomotiveScrollProvider>
    )
}
export default BaseLayout;