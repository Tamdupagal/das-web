import React, { useEffect, useRef, useState } from "react";
import styles from "./Blog1.module.scss";
import Slider from "react-slick";
import SectionHeader from "./SectionHeader";
import BlogCard1 from "./BlogCard1";
import { BLOG_DATA1 } from "../helpers/Blog1";
import ButtonGroup from "./ButtonGroup";

function Blog() {
  const sliderRef = useRef();
  const [isBtnEnabled, setEnabler] = useState();

  const settings = {
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    easing: "ease-in",
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
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1025,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  useEffect(() => {
    setEnabler(true);
  }, []);

  return (
    <section className={styles.container}>
      <SectionHeader
        className={styles.heading}
        text="CERTIFICATIONS FOR AI INNOVATION
"
      />
      <h1 className={styles.heading}>
        Elevate Your Career with Generative AI Certifications.
      </h1>
      <h1 className={styles.heading1}>
        Transform your passion for AI into a fulfilling career.
      </h1>
      <div className={styles.carousel__box}>
        <Slider {...settings} ref={sliderRef}>
          {BLOG_DATA1.map((item) => {
            return (
              <div className={styles.card__wrapper} key={item.id}>
                <BlogCard1 {...item} />
              </div>
            );
          })}
        </Slider>
        {isBtnEnabled && (
          <div className={styles.slider__btn}>
            <ButtonGroup
              prev={sliderRef.current.slickPrev}
              next={sliderRef.current.slickNext}
              pause={sliderRef.current.slickPause}
              play={sliderRef.current.slickPlay}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
