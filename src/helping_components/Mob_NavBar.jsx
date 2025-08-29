import React from 'react'
import styles from '../styles/helping_components_styles/navbar_style.module.css'

import logo from '../assets/Logo_dark.png';
import { Segment } from '@mui/icons-material';

export default function MobNavBar() {
    return (
        <div className={styles.navbar_container}>
            <div className={styles.logo_container}>
                <img className={styles.logo} src={logo} alt='logo image' loading='lazy' />
            </div>

            <Segment fontSize='medium' />
        </div>
    )
}
