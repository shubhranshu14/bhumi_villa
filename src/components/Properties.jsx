import React from "react";
import styles from "../styles/components_styles/properties_style.module.css";
import clsx from "clsx";

import { Bathtub, KingBed, Villa } from "@mui/icons-material";
import { properties } from "../_mock/_properties";
import EmblaCarousel from "../helping_components/embla_carousel/EmblaCarousel";

import stars from "../assets/Abstract_Design_Star.png";
import { useNavigate } from "react-router";





export default function Properties() {

    const navigate = useNavigate();

    const iconsMap = {
        kingbed: KingBed,
        bathtub: Bathtub,
        villa: Villa,
    };

    const OPTIONS = {}

    const handleNavigate = (property_id) => {
        navigate(`/property/${property_id}`);
    }

    return (
        <>
            <div className={clsx(styles.hero_container, styles.featured_container)}>

                <h1 className={styles.featured_text_heading}>
                    Find Your Dream Property
                </h1>
                <p className={styles.featured_text_paragraph}>
                    Welcome to Bhumi, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey
                </p>
            </div>
            <div className={styles.container}>
                {/* Discover a World of Possibilities SECTION */}


                <div className={styles.featured_container}>
                    <div className={styles.abstract_container}>
                        <img className={styles.abstract_star_image} src={stars} alt="abstract image" />
                    </div>
                    <div className={styles.featured_sub_container}>
                        <div className={styles.featured_text_container}>
                            <h1 className={styles.featured_text_heading}>
                                Discover a World of Possibilities
                            </h1>
                            <p className={styles.featured_text_paragraph}>
                                Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home
                            </p>

                        </div>
                    </div>
                    <EmblaCarousel options={OPTIONS}>
                        {properties.map((property) => (
                            <div className={clsx(styles.property_card, 'embla__slide')} key={property.id}>
                                <div className={styles.property_image_container}>
                                    <img className={styles.property_image} src={property.image} alt="property image" />

                                </div>

                                <div className={styles.property_text_container}>
                                    <h1 className={styles.property_text_heading}>
                                        {property.name}
                                    </h1>
                                    <p className={styles.property_text_paragraph}>
                                        {property.description}
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

                                <button className={styles.property_view_btn} onClick={() => handleNavigate(property.id)} >View Property Details</button>

                            </div>
                        ))}
                    </EmblaCarousel>

                </div>
            </div>
        </>
    );
}
