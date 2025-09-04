import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'


import MobNavBar from '../helping_components/Mob_NavBar'
import Footer from '../helping_components/Footer'
import ContactUs from '../components/ContactUs'

import NavBar from '../helping_components/NavBar'

export default function ContactUsPage() {

    const isDesktop = useMediaQuery({ minWidth: 1080 })

    useEffect(() => {
        document.title = "Bhumi | Contact Us"
    }, [])

    return (
        <>
            {isDesktop ? <NavBar /> : <MobNavBar />}
            <ContactUs />
            <Footer />
        </>
    )
}
