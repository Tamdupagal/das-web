import Head from 'next/head'
import Banner from '../components/Banner'
import Blog from '../components/Blog'
import CoreFeature from '../components/CoreFeature'
import Feature from '../components/Feature'
import Package from '../components/Package'
import QualityFeature from '../components/QualityFeature'
import Services from '../components/Services'
import Subscribe from '../components/Subscribe'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import WorkFlow from '../components/WorkFlow'
import Question from '../components/Questions'
import { DATA } from '../helpers/Data'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Digital Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Banner />
      <Feature data={DATA().feature} />
      <Services />
      <QualityFeature />
      <CoreFeature />
      <Feature data={DATA().growth} />
      <WorkFlow />
      <Package />
      <Team />
      <Testimonial />
      <Blog />
      <Subscribe />
      <Question/>
    </div>
  )
}