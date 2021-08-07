import React, { useEffect, useRef, useState } from 'react';
import styles from './Blog.module.scss';
import Slider from 'react-slick';
import SectionHeader from './SectionHeader';
import BlogCard from './BlogCard';
import { BLOG_DATA } from '../helpers/Blog';
import ButtonGroup from './ButtonGroup';

function Blog() {

    const sliderRef = useRef()
    const [isBtnEnabled, setEnabler] = useState()

    const settings = {
         dots: false,
         speed: 400,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: false,
        easing: "ease-out",
        swipe: true,
        touchMove: true,
        swipeToSlide: true,
        draggable: true,
        accessibility: true,
         responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1}
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1}
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3}
        }
      ]
    };

    useEffect(() => {
        setEnabler(true)
    }, [])

    return (
        <section className={styles.container}>
            <div className={styles.section__header}>
                <SectionHeader slogan="WHAT YOU WILL LEARN" text="Glimpse of our all-new updated training curriculum with 50+ modules"/>
            </div>
            <div className={styles.carousel__box}>
                <Slider {...settings} ref={sliderRef}>
                        {BLOG_DATA.map(item => {
                            return (
                                 <div className={styles.card__wrapper} key={item.id}>
                                    <BlogCard {...item}/>
                                </div>
                            )
                        })}
                </Slider>
                {isBtnEnabled && <div className={styles.slider__btn}>
               <ButtonGroup prev={sliderRef.current.slickPrev} next={sliderRef.current.slickNext} pause={sliderRef.current.slickPause} play={sliderRef.current.slickPlay}/></div>}
            </div>
        </section>
    )
}

export default Blog
