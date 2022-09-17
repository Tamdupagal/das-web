import Banner from '../main/components/Banner'
import Courses from '../main/components/Courses'
import Misson from '../main/components/Misson'
import Association from '../main/components/Association'
import Head from 'next/head'
import WorkFlow from '../components/WorkFlow'
import FaqHead from '../main/components/FaqHead'
import { FaQuestion } from 'react-icons/fa'
import FaqQuestion from '../main/components/FaqQuestion'
import Blog from '../components/Blog'
// import AboutUs from '../main/components/AboutUs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Digital Aided School</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>
        <Banner />
        <Courses />
        <Misson />
        <Association />
        <WorkFlow />
      </main>
    </div>
  )
}
