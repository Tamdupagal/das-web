import Banner from '../main/components/Banner'
import Courses from '../main/components/Courses'
import Misson from '../main/components/Misson'
import Association from '../main/components/Association'
import Head from 'next/head'
import AboutUs from '../main/components/AboutUs'

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
        <AboutUs />
        <Association />
      </main>
    </div>
  )
}
