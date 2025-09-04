import React, { useState } from "react";
import styles from "../styles/components_styles/contact_us_style.module.css";
import clsx from "clsx";

import stars from "../assets/Abstract_Design_Star.png";
import { useNavigate } from "react-router";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";





export default function ContactUs() {

    const navigate = useNavigate();

    const [hearAboutUs, setHearAboutUs] = useState('');

    const handleNavigate = (property_id) => {
        navigate(`/property/${property_id}`);
    }

    const handleChange = (event) => {
        setHearAboutUs(event.target.value);
    };

    return (
        <>
            <div className={clsx(styles.hero_container, styles.featured_container)}>

                <h1 className={styles.featured_text_heading}>
                    Get in Touch with Bhumi
                </h1>
                <p className={styles.featured_text_paragraph}>
                    Welcome to Bhumi's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have.
                </p>
            </div>
            <div className={styles.container}>
                {/* Let's Connect SECTION */}


                <div className={styles.featured_container}>
                    <div className={styles.abstract_container}>
                        <img className={styles.abstract_star_image} src={stars} alt="abstract image" />
                    </div>
                    <div className={styles.featured_sub_container}>
                        <div className={styles.featured_text_container}>
                            <h1 className={styles.featured_text_heading}>
                                Let's Connect
                            </h1>
                            <p className={styles.featured_text_paragraph}>
                                We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Bhumi.
                            </p>

                        </div>
                    </div>
                    <Box className={styles.form_container}>
                        <div className={styles.form_firstPart}>
                            <TextField
                                required
                                className={styles.outlined_required}
                                id="outlined-required"

                                label="First Name"
                                placeholder="Enter First Name"
                                defaultValue=""
                            />
                            <TextField
                                required
                                className={styles.outlined_required}
                                id="outlined-required"

                                label="Last Name"
                                placeholder="Enter Last Name"
                                defaultValue=""
                            />
                            <TextField
                                required
                                className={styles.outlined_required}
                                id="outlined-required"

                                label="Email"
                                placeholder="Enter Your Email"
                                defaultValue=""
                            />
                            <TextField
                                required
                                className={styles.outlined_required}
                                id="outlined-required"

                                label="Phone"
                                placeholder="Enter Phone Number"
                                defaultValue=""
                            />
                            <FormControl className={styles.outlined_required}>
                                <InputLabel id="demo-simple-select-label">How Did You Hear About Us?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={hearAboutUs}
                                    label="How Did You Hear About Us?"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Online</MenuItem>
                                    <MenuItem value={20}>Friends</MenuItem>
                                    <MenuItem value={30}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <TextField
                            className={styles.outlined_multiline_static}
                            id="outlined-multiline-static"
                            label="Message"
                            fullWidth
                            placeholder="Enter your Message here"
                            multiline
                            rows={4}
                        />

                        <button className={styles.form_btn}>Send Your Message</button>

                    </Box>

                </div>
            </div>
        </>
    );
}
