import React from 'react'

//import components
import Nav from '../components/top-bar'

export default function MailSharkLayout({children}) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}
