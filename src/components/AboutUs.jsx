import React from "react";
import styles from "../styles/components_styles/about_us_style.module.css";

import heroImage from "../assets/hero2_Image.png";
import stars from "../assets/Abstract_Design_Star.png";

import { our_values } from "../_mock/_ourValues";
import clsx from "clsx";


export default function AboutUs() {

    return (
        <div className={styles.container}>
            <div className={styles.hero_container}>
                <div className={styles.hero_image_container}>
                    <img className={styles.hero_image} src={heroImage} alt="hero image" loading="lazy" />
                </div>
                <div className={styles.hero_info}>
                    <div className={styles.hero_text_container}>
                        <h1 className={styles.hero_text_heading}>
                            Our Journey
                        </h1>
                        <p className={styles.hero_text_paragraph}>
                            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
                        </p>

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
                <div className={clsx(styles.featured_sub_container, styles.ourValue_container)}>
                    <div className={styles.featured_text_container}>
                        <h1 className={styles.featured_text_heading}>
                            Our Values
                        </h1>
                        <p className={styles.featured_text_paragraph}>
                            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                        </p>

                    </div>
                    <div className={styles.values_container}>
                        {
                            our_values.map((value) =>
                                <div className={styles.value} key={value.title}>
                                    <div className={styles.value_heading}>
                                        <div className={styles.value_logo_container}>
                                            <img className={styles.value_logo} src={value.icon} alt={value.title} loading="lazy" />

                                        </div>
                                        <h2>{value.title}</h2>
                                    </div>
                                    <div className={styles.value_description}>
                                        <p>{value.description}</p>
                                    </div>

                                </div>
                            )
                        }


                    </div>
                </div>


            </div>
        </div>
    );
}
