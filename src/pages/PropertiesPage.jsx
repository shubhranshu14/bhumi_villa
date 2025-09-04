import React, { useEffect } from 'react'
import MobNavBar from '../helping_components/Mob_NavBar'
import Properties from '../components/Properties'
import Footer from '../helping_components/Footer'
import { useMediaQuery } from 'react-responsive'
import NavBar from '../helping_components/NavBar'

export default function PropertiesPage() {

    const isDesktop = useMediaQuery({ minWidth: 1080 })

    useEffect(() => {
        document.title = "Bhumi | Properties"
    }, [])

    return (
        <>
            {isDesktop ? <NavBar /> : <MobNavBar />}
            <Properties />
            <Footer />
        </>
    )
}
