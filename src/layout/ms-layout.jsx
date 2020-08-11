import React from 'react'

//import components
import Nav from '../components/top-bar'
import Footer from '../sections/footer'
import Padding from '../layout/padding'

export default function MailSharkLayout({children}) {
    return (
        <>
            <Nav />
            {children}
            <Padding />
            <Footer />
        </>
    )
}
