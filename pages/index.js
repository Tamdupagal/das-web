import { default as MainBanner } from '../main/components/Banner';
import Header from '../main/components/Header';
import Courses from '../main/components/Courses';
import Footer from '../main/components/Footer';
import Misson from '../main/components/Misson'
import AboutProgram from '../main/components/AboutProgram'
import Association from '../main/components/Association';

export default function Home() {
  return (
    <main>
      <MainBanner/>
      <Courses />
      <Misson />
      <AboutProgram />
      <Association/>
    </main>
  )
}
