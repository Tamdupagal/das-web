import { default as MainBanner } from '../main/components/Banner';
import Courses from '../main/components/Courses';
import Misson from '../main/components/Misson'
import Association from '../main/components/Association';
import { Head } from 'next/head';
import AboutUs from '../main/components/AboutUs';

export default function Home() {
  return (
    <div>
      <main>
        <MainBanner/>
        <Courses />
        <Misson />
        <AboutUs />
        <Association/>
      </main>
    </div>
  )
}
