import React, { useEffect, useRef, useState } from 'react';
import { TESTIMONIAL_DATA } from '../helpers/Testimonial';
import ButtonGroup from './ButtonGroup';
import SectionHeader from './SectionHeader';
import TestimonialCard from './TestimonialCard';
import styles from './Testimonial.module.scss';
import Slider from 'react-slick'

function Testimonial() {

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
    infinite: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 1025,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  useEffect(() => {
    setEnabler(true)
  }, [])




  return (
    <section className={styles.container} id="testimonial">
      <div className={styles.section__header}>
        <h2>TESTIMONIAL</h2>
        <p>Meet Client Satisfaction</p>

        {/* <SectionHeader slogan="" text="" /> */}
      </div>
      <div className={styles.carousel__box}>
        <Slider {...settings} ref={sliderRef}>
          {TESTIMONIAL_DATA.map(item => {
            return (
              <div className={styles.card__wrapper} key={item.id}>
                <TestimonialCard {...item} />
              </div>
            )
          })}
        </Slider>
        {isBtnEnabled && <div className={styles.slider__btn}>
          <ButtonGroup prev={sliderRef.current.slickPrev} next={sliderRef.current.slickNext} pause={sliderRef.current.slickPause} play={sliderRef.current.slickPlay} /></div>}
      </div>
    </section>
  )
}

export default Testimonial
