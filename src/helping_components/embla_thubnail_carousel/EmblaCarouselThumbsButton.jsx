import React from 'react'
import styles from "../../styles/helping_components_styles/embla_thumbnail.module.css";
import clsx from 'clsx';
export const Thumb = (props) => {
    const { selected, slide, onClick } = props

    return (
        <div
            className={clsx(styles.embla_thumbs__slide, selected && styles.embla_thumbs__slide__selected)}
        >
            <div
                onClick={onClick}
                className={styles.embla_thumbs__slide__number}
            >
                <img src={slide.src} alt='thumbnail' loading='lazy' />
            </div>
        </div>
    )
}
