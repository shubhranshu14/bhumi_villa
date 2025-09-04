import React, { useState } from 'react'
import styles from '../styles/helping_components_styles/navbar_style.module.css'

import logo from '../assets/bhumi_logo.jpg';
import { useNavigate, useLocation } from 'react-router';
import clsx from 'clsx';

export default function NavBar() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (link) => {
        navigate(link)
    }

    const isActive = (path) => location.pathname === path

    return (
        <>
            <div className={styles.navbar_container}>
                <div className={styles.logo_container} onClick={() => handleNavigate('/')}>
                    <img className={styles.logo} src={logo} alt='logo image' loading='lazy' />
                </div>

                <div className={styles.desk_link_container}>
                    <p className={clsx(isActive('/') && styles.active)} onClick={() => handleNavigate('/')}>Home</p>
                    <p className={clsx(isActive('/about_us') && styles.active)} onClick={() => handleNavigate('/about_us')}>About Us</p>
                    <p className={clsx(isActive('/property') && styles.active)} onClick={() => handleNavigate('/property')}>Properties</p>

                </div>

                <div className={styles.contact_btn}>
                    <p onClick={() => handleNavigate('/contact_us')}>Contact Us</p>
                </div>
            </div>
        </>
    )
}
