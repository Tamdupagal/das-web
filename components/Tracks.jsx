import Image from 'next/image';
import styles from './Tracks.module.scss';
import track1 from '../assets/executive.jpg';
import track2 from '../assets/management_track.webp';
import track3 from '../assets/leadership.webp';
import track4 from '../assets/want_to_revise.webp';
import track5 from '../assets/have_doubts.webp';
import track6 from '../assets/missed_a_class.webp';

function Tracks() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_heading}>Customised Tracks for Sharper outcomes for you</h1>
            <div className={styles.wrapper}>
                <div className={styles.track_box}>
                    <figure className={styles.tract_image}>
                        <Image width={130} src={track1} objectFit="contain" alt="Track image" placeholder="blur" objectPosition="50% 50%"/>
                    </figure>
                    <h1 className={styles.title}>Executive Track</h1>
                    <p className={styles.desc}>Understand DM Basics and setup and run campaigns on 5 plus tools</p>
                </div>
                <div className={styles.track_box}>
                    <figure className={styles.tract_image}>
                        <Image width={130} src={track2} objectFit="contain" alt="Track image" placeholder="blur" objectPosition="50% 50%"/>
                    </figure>
                    <h1 className={styles.title}>Management Track</h1>
                    <p className={styles.desc}>Build, run, analyse and optimise Search and social Media Campaigns</p>
                </div>
                <div className={styles.track_box}>
                    <figure className={styles.tract_image}>
                        <Image width={130} src={track3} objectFit="contain" alt="Track image" placeholder="blur" objectPosition="50% 50%"/>
                    </figure>
                    <h1 className={styles.title}>Leadership Track</h1>
                    <p className={styles.desc}>Maintain a Digital Campaign Calender and create SEM & SEO audit reports</p>
                </div>
                <div className={styles.track_box}>
                    <figure className={styles.tract_image}>
                        <Image width={130} src={track4} objectFit="contain" alt="Track image" placeholder="blur" objectPosition="50% 50%"/>
                    </figure>
                    <h1 className={styles.title}>Want a revise?</h1>
                    <p className={styles.desc}>Access assignments/ notes lifelong and recordings upto 6 months post course completion</p>
                </div>
                <div className={styles.track_box}>
                    <figure className={styles.tract_image}>
                        <Image width={130} src={track5} objectFit="contain" alt="Track image" placeholder="blur" objectPosition="50% 50%"/>
                    </figure>
                    <h1 className={styles.title}>Have Doubts?</h1>
                    <p className={styles.desc}>Get them resolved over test / video by our expert teaching assistants.</p>
                </div>
                <div className={styles.track_box}>
                    <figure className={styles.tract_image}>
                        <Image width={130} src={track6} objectFit="contain" alt="Track image" placeholder="blur" objectPosition="50% 50%"/>
                    </figure>
                    <h1 className={styles.title}>Missed a class?</h1>
                    <p className={styles.desc}>Watch the recording later, with teaching assistants available to solve your doubts.</p>
                </div>
            </div>
        </section>
    )
}

export default Tracks
