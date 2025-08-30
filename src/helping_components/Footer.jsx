import React from 'react'
import styles from '../styles/helping_components_styles/footer_style.module.css'

import { FacebookRounded, Instagram, Send, X, YouTube } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

import logo from '../assets/Logo_dark.png';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer_first_container}>
                <div className={styles.footer_first_text_container}>
                    <h1 className={styles.footer_first_text_heading}>
                        Start Your Real Estate Journey Today
                    </h1>
                    <p className={styles.footer_first_text_paragraph}>
                        Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
                    </p>
                </div>
                <button className={styles.footer_first_btn}>Explore Properties</button>
            </div>

            <div className={styles.footer_second_container}>
                <div className={styles.footer_second_mail_container}>
                    <div className={styles.footer_logo_container}>
                        <img className={styles.footer_logo} src={logo} alt="logo" loading="lazy" />
                    </div>

                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Enter Your Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type='email'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        // onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        // onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        <Send />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Enter Your Email"
                        />
                    </FormControl>
                </div>

                <div className={styles.links_container}>
                    <div className={styles.links_sub_container}>
                        <h4 className={styles.link_heading}>Home</h4>
                        <div className={styles.link_body}>
                            <a>Hero Section</a>
                            <a>Features</a>
                            <a>Properties</a>
                            <a>Testimonials</a>
                        </div>
                    </div>
                    <div className={styles.links_sub_container}>
                        <h4 className={styles.link_heading}>About Us</h4>
                        <div className={styles.link_body}>
                            <a>Our Story</a>
                            <a>Our Works</a>
                            <a>Our Team</a>
                        </div>
                    </div>
                    <div className={styles.links_sub_container}>
                        <h4 className={styles.link_heading}>Properties</h4>
                        <div className={styles.link_body}>
                            <a>Portfolio</a>
                            <a>Categories</a>
                        </div>
                    </div>
                    <div className={styles.links_sub_container}>
                        <h4 className={styles.link_heading}>Contact Us</h4>
                        <div className={styles.link_body}>
                            <a>Contact Form</a>
                            <a>Our Offices</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer_third_container}>
                <div className={styles.socal_link_container}>
                    <div className={styles.socal_link}>
                        <FacebookRounded />
                    </div>
                    <div className={styles.socal_link}>
                        <X />
                    </div>
                    <div className={styles.socal_link}>
                        <Instagram />
                    </div>
                    <div className={styles.socal_link}>
                        <YouTube />
                    </div>

                </div>

                <div className={styles.terms_conditions_container}>
                    <p>@2023 Estatein. All Rights Reserved.</p>
                    <a href='#'>Terms & Conditions</a>
                </div>

            </div>

        </footer >
    )
}
