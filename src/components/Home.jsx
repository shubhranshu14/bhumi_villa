import React from "react";
import styles from "../styles/components_styles/home_style.module.css";

import clsx from "clsx";
import heroImage from "../assets/hero_Image.png";
import stars from "../assets/Abstract_Design_Star.png";
import propertyImage from "../assets/property_image.png";
import { Bathtub, KingBed, Villa } from "@mui/icons-material";
import EmblaCarousel from "../helping_components/embla_carousel/EmblaCarousel";
import { Properties } from "../_mock/_properties";
import { Reviews } from "../_mock/_review";
import { Rating } from "@mui/material";



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
        </div>
    );
}
