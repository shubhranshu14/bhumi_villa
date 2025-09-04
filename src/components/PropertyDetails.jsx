import React, { useEffect, useState } from 'react'
import styles from '../styles/components_styles/property_details_style.module.css';


import { properties } from "../_mock/_properties";
import { useParams } from 'react-router';
import { Bathtub, KingBed, LocationOn } from '@mui/icons-material';
import EmblaThubnailCarousel from '../helping_components/embla_thubnail_carousel/EmblaThubnailCarousel';

export default function PropertyDetails() {

    const OPTIONS = {}

    const [property, setProperty] = useState({});
    const [slides, setSlides] = useState([]);
    const { property_id } = useParams();

    useEffect(() => {
        const selectedProperty = properties.filter((property) => Number(property.id) === Number(property_id))
        setProperty(selectedProperty[0]);
        console.log(selectedProperty[0]);
        setSlides(selectedProperty[0].image_array);

    }, [property_id]);


    return (
        <div className={styles.container}>
            <div className={styles.property_details_container}>
                <div className={styles.property_details_first}>

                    <div className={styles.property_name_container}>
                        <h1 className={styles.property_name}>{property.name}</h1>
                        <div className={styles.property_location_container}>
                            <LocationOn />
                            <p className={styles.property_location}>{property.location}</p>
                        </div>

                    </div>

                    <div className={styles.property_carousel_container}>
                        <EmblaThubnailCarousel slides={slides} options={OPTIONS} />

                    </div>

                </div>
                <div className={styles.property_details_second}>
                    <div className={styles.description_container}>
                        <div className={styles.description_first_container}>
                            <h4 className={styles.description_heading}>Description</h4>
                            <p className={styles.description_paragraph}>{property.description}</p>
                        </div>
                        <div className={styles.description_second_container}>
                            <div className={styles.description_option}>
                                <div className={styles.option_heading}>
                                    <KingBed />
                                    <p>Bedrooms</p>
                                </div>
                                <h4 className={styles.option_number}>{property.description_options?.bedroom}</h4>
                            </div>
                            <div className={styles.description_option}>
                                <div className={styles.option_heading}>
                                    <Bathtub />
                                    <p>Bathrooms</p>
                                </div>
                                <h4 className={styles.option_number}>{property.description_options?.bathroom}</h4>
                            </div>
                            <div className={styles.description_option}>
                                <div className={styles.option_heading}>
                                    <KingBed />
                                    <p>Area</p>
                                </div>
                                <h4 className={styles.option_number}>{property.description_options?.area}</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.keyFeatures_container}>
                        <h4 className={styles.keyFeatures_heading}>Key Features and Amenities</h4>
                        <div className={styles.keyFeatures_list}>
                            {
                                property.key_features?.map((feature, idx) =>
                                    <div className={styles.keyFeature} key={idx}>
                                        <h4>{feature}</h4>
                                    </div>
                                )
                            }

                        </div>
                    </div>

                </div>

            </div>

            <div className={styles.property_inquireForm_container}>

            </div>

        </div>
    )
}
