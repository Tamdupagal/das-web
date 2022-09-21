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
import Performance from '../main/assets/art.svg'
import Partnership from '../main/assets/art.svg'
import Facebookpixel from '../main/pixel/Facebook/pixel'


const bannerData = {
  title: 'MASTER Solid foundation Game Development Program',
  program: '(30-days Program)',
  text:"I'm interested in your Game Development"
}

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Understanding DM',
    title: 'Understanding Programming & Logic',
    text: ['Understand Basics C++ & C#    ', 'Creative & Problem solving     '],
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Structured Curriculum    ',
    title: 'Structured Curriculum    ',
    text: [
      'Build, run, analyze and optimize basic games',
      'Set up and run basic games from scratch.      ',
    ],
  },
]

const packageData =
  'STUDY FIRST PAY LATER. PAY ZERO TILL YOU LAND A JOB.\n\n Total fee: Rs 30000 inclusive of GST.'

export default function Home({name}) {
  return (
    <div>
      <Head>
        <title>Solid Foundation Courses classes in Mumbai | Digitalaidedschool</title>
        <meta name="keywords" content="Full Stack Game Development | game develeopment careers | Game development career | game designing | games development | games development classes in Mumbai | games development classes in Pune | games development classes in Delhi | game development courses near me | game development classes | game development training | best game development courses | best game development courses in India | video game development courses | video game development courses in India | online game development courses in Mumbai | online game development courses in Pune | online game development courses | online game development courses near me | game development classes near me | online game development courses in India | learn game development online | skillshare game development"/>
        <meta name='description' content='Learn how to design and integrate games by choosing gaming courses in Mumbai. DigitalaidedSchool is the best gaming institute to get trained for a career in this interesting field.' />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {name="Facebookpixel" && <Facebookpixel/>}
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Banner data={bannerData} checkBanner={true} />
      <Feature className='feature' data={DATA().featureDM} />
      <Services className='services' data={data} />
      <QualityFeature className='quality' data={DATA().learning.dm} />
      <CoreFeature
      title={DATA().coreFeature.dm.title}  
      data={DATA().coreFeature.dm.description}
        btnText={DATA().coreFeature.dm.buttonText}
      />
      <Feature className='growth' data={DATA().growth.dm} />
      <WorkFlow />
      <Package data={packageData} />
      <hr/>
      </div>
      )
    }
    // <Blog />
