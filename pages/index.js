import { default as MainBanner } from '../main/components/Banner';
import Courses from '../main/components/Courses';
import Misson from '../main/components/Misson'
import AboutProgram from '../main/components/AboutProgram'
import Association from '../main/components/Association';
import { Head } from 'next/head';

export default function Home() {
  return (
    <div>
      <main>
        <MainBanner/>
        <Courses />
        <Misson />
        <AboutProgram />
        <Association/>
      </main>
    </div>
  )
}
