import styles from './Courses.module.scss';
import { COURSE_DATA } from '../helpers/Course';
import CourseBox from './CourseBox';
import Slider from 'react-slick';
import ButtonGroup from '../../components/ButtonGroup';
import { useEffect, useRef, useState } from 'react';


function Courses() {

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
            <h1 className={styles.main_title}>Our Courses</h1>
             <div className={styles.carousel__box}>
                <Slider {...settings} ref={sliderRef}>
                        {COURSE_DATA.map(item => {
                            return (
                                 <div className={styles.card__wrapper} key={item.id}>
                                    <CourseBox {...item}/>
                                </div>
                            )
                        })}
                </Slider>
                {isBtnEnabled && <div className={styles.slider__btn}>
               <ButtonGroup prev={sliderRef.current.slickPrev} next={sliderRef.current.slickNext} pause={sliderRef.current.slickPause} play={sliderRef.current.slickPlay} isOrange/></div>}
            </div>
        </section>
    )
}

export default Courses
