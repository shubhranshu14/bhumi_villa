import React from "react";
import styles from "../styles/components_styles/home_style.module.css";

import clsx from "clsx";
import heroImage from "../assets/hero_Image.png";
import stars from "../assets/Abstract_Design_Star.png";
import propertyImage from "../assets/property_image.png";
import { Bathtub, FacebookRounded, KingBed, Send, Villa } from "@mui/icons-material";
import EmblaCarousel from "../helping_components/embla_carousel/EmblaCarousel";
import { Properties } from "../_mock/_properties";
import { Reviews } from "../_mock/_review";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Rating } from "@mui/material";

import logo from '../assets/Logo_dark.png';




export default function Home() {


    const iconsMap = {
        kingbed: KingBed,
        bathtub: Bathtub,
        villa: Villa,
    };

    const OPTIONS = {}

    return (
        <div className={styles.home_container}>
            <div className={styles.hero_container}>
                <div className={styles.hero_image_container}>
                    <img className={styles.hero_image} src={heroImage} alt="hero image" loading="lazy" />
                </div>
                <div className={styles.hero_info}>
                    <div className={styles.hero_text_container}>
                        <h1 className={styles.hero_text_heading}>
                            Discover Your Dream Property with Estatein
                        </h1>
                        <p className={styles.hero_text_paragraph}>
                            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                        </p>

                    </div>

                    <div className={styles.hero_button_container}>
                        <button>Learn More</button>
                        <button>Browse Properties</button>
                    </div>

                    <div className={styles.hero_analytics_container}>
                        <div className={styles.first_row}>
                            <div className={styles.analytics_sub_container}>
                                <h1 className={styles.analytics_heading}>200+</h1>
                                <p className={styles.analytics_paragraph}>Happy Customers</p>
                            </div>

                            <div className={styles.analytics_sub_container}>
                                <h1 className={styles.analytics_heading}>10k+</h1>
                                <p className={styles.analytics_paragraph}>Properties For Clients</p>
                            </div>
                        </div>
                        <div className={styles.second_row}>
                            <div className={styles.analytics_sub_container}>
                                <h1 className={styles.analytics_heading}>16+</h1>
                                <p className={styles.analytics_paragraph}>Years of Experience</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className={styles.featured_container}>
                <div className={styles.abstract_container}>
                    <img className={styles.abstract_star_image} src={stars} alt="abstract image" />
                </div>
                <div className={styles.featured_sub_container}>
                    <div className={styles.featured_text_container}>
                        <h1 className={styles.featured_text_heading}>
                            Featured Properties
                        </h1>
                        <p className={styles.featured_text_paragraph}>
                            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.
                        </p>

                    </div>
                </div>
                <EmblaCarousel options={OPTIONS}>
                    {Properties.map((property, index) => (
                        <div className={clsx(styles.property_card, 'embla__slide')} key={index}>
                            <div className={styles.property_image_container}>
                                <img className={styles.property_image} src={property.image} alt="property image" />

                            </div>

                            <div className={styles.property_text_container}>
                                <h1 className={styles.property_text_heading}>
                                    {property.name}
                                </h1>
                                <p className={styles.property_text_paragraph}>
                                    {property.discription}
                                </p>

                            </div>
                            <div className={styles.property_highlights}>
                                {property.highLights.map((value, i) => {
                                    const IconComponent = iconsMap[value.icon.toLowerCase()]; // get correct icon
                                    return (
                                        <div className={styles.property_highlight} key={i}>
                                            {IconComponent && <IconComponent fontSize="medium" />}
                                            <h4 className={styles.property_highlight_text}>{value.text}</h4>
                                        </div>
                                    );
                                })}

                            </div>

                            <button className={styles.property_view_btn}>View Property Details</button>

                        </div>
                    ))}
                </EmblaCarousel>

            </div>

            <div className={styles.featured_container}>
                <div className={styles.abstract_container}>
                    <img className={styles.abstract_star_image} src={stars} alt="abstract image" />
                </div>
                <div className={styles.featured_sub_container}>
                    <div className={styles.featured_text_container}>
                        <h1 className={styles.featured_text_heading}>
                            What Our Clients Say
                        </h1>
                        <p className={styles.featured_text_paragraph}>
                            Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                        </p>

                    </div>
                </div>
                <EmblaCarousel options={OPTIONS}>
                    {Reviews.map((review) =>
                        <div className={clsx(styles.review_card, 'embla__slide')} key={review.id}>
                            <div className={styles.rating_container}>
                                <Rating name="half-rating-read" defaultValue={review.rating} precision={0.5} readOnly />
                            </div>
                            <div className={styles.review_text}>
                                <h2 className={styles.review_heading}>{review.heading}</h2>
                                <p className={styles.review_paragraph}>{review.paragraph}</p>

                            </div>
                            <div className={styles.review_profile}>
                                <div className={styles.profile_image_container}>
                                    <img className={styles.profileImage} src={review.profile_image} alt="profile image" loading="lazy" />

                                </div>
                                <div className={styles.profile_text}>
                                    <h2 className={styles.profile_name}>{review.profile_name}</h2>
                                    <p className={styles.profile_address}>{review.profile_address}</p>

                                </div>
                            </div>

                        </div>
                    )}
                </EmblaCarousel>
            </div>

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
                            <FacebookRounded />
                        </div>
                        <div className={styles.socal_link}>
                            <FacebookRounded />
                        </div>
                        <div className={styles.socal_link}>
                            <FacebookRounded />
                        </div>

                    </div>

                    <div className={styles.terms_conditions_container}>
                        <p>@2023 Estatein. All Rights Reserved.</p>
                        <p>Terms & Conditions                                                             </p>

                    </div>

                </div>

            </footer>
        </div>
    );
}
