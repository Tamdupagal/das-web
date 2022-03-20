import Head from 'next/head'
import Banner from '../components/Banner'
import Blog from '../components/Blog'
import CoreFeature from '../components/CoreFeature'
import Feature from '../components/Feature'
import Package from '../components/Package'
import QualityFeature from '../components/QualityFeature'
import Services from '../components/Services'
import WorkFlow from '../components/WorkFlow'
import { DATA } from '../helpers/Data' 
import Performance from '../main/assets/art.svg';
import Partnership from '../main/assets/art.svg';




const bannerData = {
    title: 'MASTERS/PROFESSIONAL CERTIFICATION IN Fullstack Digital Marketing',
    program: "(11-month Program)",
}



const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Understanding DM',
    title: 'Understanding DM',
    text: ['Understand DM Basics', 'Domain-specific Research & development']
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'State of the art DM',
    title: 'State of the art DM',
    text: ['Build, run, analyze and optimize Search and SM Campaigns' ,'Setup and run industry-relevant DM campaigns']
    },
]


const packageData = "With Study first pay later,scholarship & EMI options, your payment can be Pay as you like or pay as you go.\n\n Total fee: Rs 1.5L inclusive of GST."

export default function Home() {
  return (
    <div>
      <Head>
        <title>Digital Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Banner data={bannerData}/>
      <Feature data={DATA().feature} />
      <Services data={data}/>
      <QualityFeature data={DATA().learning.dm}/>
      <CoreFeature data={DATA().coreFeature.dm.description} btnText={DATA().coreFeature.dm.buttonText}/>
      <Feature data={DATA().growth.dm} no={true}/>
      <WorkFlow />
      <Package data={packageData} />
      <Blog />
    </div>
  )
}