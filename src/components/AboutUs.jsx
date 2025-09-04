import React from "react";
import styles from "../styles/components_styles/about_us_style.module.css";
import clsx from "clsx";

import heroImage from "../assets/hero2_Image.png";
import stars from "../assets/Abstract_Design_Star.png";

import { our_values } from "../_mock/_ourValues";
import { achivements } from "../_mock/_achivements";
import { steps_to_purchase } from "../_mock/_stepsToPurchase";



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

            {/* OUR VALUES SECTION */}

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

            {/* OUR ACHIVEMENTS SECTION */}

            <div className={styles.featured_container}>
                <div className={styles.abstract_container}>
                    <img className={styles.abstract_star_image} src={stars} alt="abstract image" />
                </div>
                <div className={styles.featured_sub_container}>
                    <div className={styles.featured_text_container}>
                        <h1 className={styles.featured_text_heading}>
                            Our Achievements
                        </h1>
                        <p className={styles.featured_text_paragraph}>
                            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                        </p>
                    </div>
                    <div className={styles.achivement_list_container}>
                        {
                            achivements.map((achivement) =>
                                <div className={styles.achivement_container} key={achivement.title}>
                                    <h2 className={styles.achivement_heading}>{achivement.title}</h2>
                                    <p className={styles.achivement_paragraph}>{achivement.description}</p>
                                </div>
                            )
                        }

                    </div>
                </div>


            </div>

            {/* NAVIGATING THE Bhumi EXPERIENCE SECTION */}

            <div className={styles.featured_container}>
                <div className={styles.abstract_container}>
                    <img className={styles.abstract_star_image} src={stars} alt="abstract image" />
                </div>
                <div className={styles.featured_sub_container}>
                    <div className={styles.featured_text_container}>
                        <h1 className={styles.featured_text_heading}>
                            Navigating the Bhumi Experience
                        </h1>
                        <p className={styles.featured_text_paragraph}>
                            At Bhumi, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.
                        </p>
                    </div>
                    <div className={styles.steps_list_container}>
                        {
                            steps_to_purchase.map((step) =>
                                <div className={styles.step_container} key={step.step_no}>
                                    <div className={styles.step_number_container}>
                                        <h3 className={styles.step_number}>Step {step.step_no}</h3>
                                    </div>
                                    <div className={styles.step_body}>
                                        <h3 className={styles.step_body_heading}>{step.title}</h3>
                                        <p className={styles.step_body_paragraph}>{step.description}</p>
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
