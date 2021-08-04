import { default as MainBanner } from '../main/components/Banner';
import Header from '../main/components/Header';
import Courses from '../main/components/Courses';
import Footer from '../main/components/Footer';
import Misson from '../main/components/Misson'
import AboutProgram from '../main/components/AboutProgram'

export default function Home() {
  return (
    <main>
      <Header/>
      <MainBanner/>
      <Courses />
      <Misson />
      <AboutProgram/>
      <Footer/>
    </main>
  )
}
