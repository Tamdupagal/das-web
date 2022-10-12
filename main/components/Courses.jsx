import styles from './Courses.module.scss'
import { COURSE_DATA } from '../helpers/Course'
import CourseBox from './CourseBox'
import Slider from 'react-slick'
import ButtonGroup from '../../components/ButtonGroup'
import { useEffect, useRef, useState } from 'react'

function Courses() {
  const sliderRef = useRef()
  const [isBtnEnabled, setEnabler] = useState()

  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    easing: 'ease-out',
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
  }

  useEffect(() => {
    setEnabler(true)
  }, [])
  return (
    <section className={styles.container} >
      <h1 className={styles.main_title}>About our course</h1>
      <p className={styles.about__course}>
        The real <span>STUDY FIRST PAY LATER programs.<br/></span>World&apos;s 1st Live online classes
       cohort-based learning.<br/>  1:10 (batch) collaborative Live project building academic experience.<br/> Live Real Life
        industry-standard projects.
      </p>
      <div className={styles.carousel__box}>
        <Slider {...settings} ref={sliderRef}>
          {COURSE_DATA.map((item) => {
            return (
              <div className={styles.card__wrapper} key={item.id}>
                <CourseBox {...item} />
              </div>
            )
          })}
        </Slider>
        {isBtnEnabled && (
          <div className={styles.slider__btn}>
            <ButtonGroup
              prev={sliderRef.current.slickPrev}
              next={sliderRef.current.slickNext}
              pause={sliderRef.current.slickPause}
              play={sliderRef.current.slickPlay}
              isOrange
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Courses
