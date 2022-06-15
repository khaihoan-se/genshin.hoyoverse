import React from 'react'
import Header from '@/components/partials/Header'
import Footer from '@/components/partials/Footer'

const BaseLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header /> {/* Header */}

            <main>{children}</main>

            <Footer /> {/* Footer */}
        </React.Fragment>
    )
}
export default BaseLayout;