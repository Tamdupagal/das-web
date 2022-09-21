import Head from 'next/head'
import Banner from '../components/Banner'
import Feature from '../components/Feature'
import Services from '../components/Services'
import QualityFeature from '../components/QualityFeature'
import CoreFeature from '../components/CoreFeature'
import WorkFlow from '../components/WorkFlow'
import Package from '../components/Package'
import { DATA } from '../helpers/Data'
import Performance from '../main/assets/art.svg'
import Partnership from '../main/assets/art.svg'
import Facebookpixel from '../main/pixel/Facebook/pixel'


const bannerData = {
  title:
    'MASTERS IN FULL-STACK Game Development.',
  program: '(6-month Program)',
}

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Programming & Logic',
    title: 'Programming & Logic',
    text: [
      'C++ & C#',
      'Creative & Problem solving skills.',
    ],
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Structured Curriculum',
    title: 'Structured Curriculum',
    text: [
      'Build, run, analyze and optimize games',
      'Set up and run games from scratch.',
    ],
  },
]

const packageData =
  'STUDY FIRST PAY LATER. PAY ZERO TILL YOU LAND A JOB.\n\n Total fees: Rs 1.8L inclusive of GST.'

function development({name}) {
  return (
    <div>
      <Head>
        <title>Games development | games development classes in Mumbai | Digitalaidedschool</title>
        <meta name='description' content='Learn how to design and integrate games by choosing gaming courses in Mumbai. DigitalaidedSchool is the best gaming institute to get trained for a career in this interesting field.' />
        <meta name="keywords" content="Full Stack Game Development | game develeopment careers | Game development career | game designing | games development | games development classes in Mumbai | games development classes in Pune | games development classes in Delhi | game development courses near me | game development classes | game development training | best game development courses | best game development courses in India | video game development courses | video game development courses in India | online game development courses in Mumbai | online game development courses in Pune | online game development courses | online game development courses near me | game development classes near me | online game development courses in India | learn game development online | skillshare game development"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {name="Facebookpixel" && <Facebookpixel/>}
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Banner data={bannerData} checkBanner={false} />
      <Feature className='feature' data={DATA().featureWD} />
      <Services className='services' data={data} />
      <QualityFeature className='quality' data={DATA().learning.web} />
      <CoreFeature
        title={DATA().coreFeature.web.title}
        data={DATA().coreFeature.web.description}
        btnText={DATA().coreFeature.web.buttonText}
      />
      <Feature className='growth' data={DATA().growth.dm} />
      <WorkFlow />
      <Package data={packageData} />
      <hr/>
    </div>
  )
}

export default development
