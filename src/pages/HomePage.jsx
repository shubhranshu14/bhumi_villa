import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import MobNavBar from '../helping_components/Mob_NavBar'
import Home from '../components/Home'
import Footer from '../helping_components/Footer'
import NavBar from '../helping_components/NavBar'

export default function HomePage() {
    const isDesktop = useMediaQuery({ minWidth: 1080 })

    useEffect(() => {
        document.title = "Bhumi | Home"
    }, [])

    return (
        <>
            {isDesktop ? <NavBar /> : <MobNavBar />}
            <Home />
            <Footer />
        </>
    )
}
