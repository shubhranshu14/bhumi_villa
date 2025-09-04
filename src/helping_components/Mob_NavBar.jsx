import React, { useState } from 'react'
import styles from '../styles/helping_components_styles/navbar_style.module.css'

import logo from '../assets/bhumi_logo.jpg';
import { Segment } from '@mui/icons-material';
import MobNavBarDrawer from './Mob_NavBarDrawer';
import { useNavigate } from 'react-router';

export default function MobNavBar() {

    const navigate = useNavigate();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleNavigate = (link) => {
        navigate(link)
    }

    return (
        <>
            <div className={styles.navbar_container}>
                <div className={styles.logo_container} onClick={() => handleNavigate('/')}>
                    <img className={styles.logo} src={logo} alt='logo image' loading='lazy' />
                </div>

                <div className={styles.desk_link_container}>
                    <p onClick={() => handleNavigate('/')}>Home</p>
                    <p onClick={() => handleNavigate('/about_us')}>About Us</p>
                    <p onClick={() => handleNavigate('/property')}>Properties</p>
                    <p onClick={() => handleNavigate('/contact_us')}>Contact Us</p>
                </div>

                <Segment className={styles.hideForDesk} fontSize='medium' onClick={() => setIsDrawerOpen(true)} />
            </div>
            <MobNavBarDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />
        </>
    )
}
