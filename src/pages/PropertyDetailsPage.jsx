import React, { useEffect } from 'react'
import MobNavBar from '../helping_components/Mob_NavBar'
import PropertyDetails from '../components/PropertyDetails'
import Footer from '../helping_components/Footer'
import { useMediaQuery } from 'react-responsive'
import NavBar from '../helping_components/NavBar'

export default function PropertyDetailsPage() {

    const isDesktop = useMediaQuery({ minWidth: 1080 })

    useEffect(() => {
        document.title = "Bhumi | Property Details"
    }, [])

    return (
        <>
            {isDesktop ? <NavBar /> : <MobNavBar />}
            <PropertyDetails />
            <Footer />
        </>
    )
}
