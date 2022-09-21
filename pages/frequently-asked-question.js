import React from 'react'
import FaqHead from '../main/components/FaqHead'
import FaqQuestion from '../main/components/FaqQuestion'
import Head from 'next/head'
import Facebookpixel from '../main/pixel/Facebook/pixel'


const packageData =
  'STUDY FIRST PAY LATER. PAY ZERO TILL YOU LAND A JOB.\n\n Total fees: Rs 1.8L inclusive of GST.'

const faq = ({name}) => {
  return (
    <>
    <Head>
    <title>FAQ | Digitalaidedschool</title>
    <meta name='description' content='Get answers to all your queries about courses Also, read the FAQs about different media courses offered by Digitalaidedschool.' />
    <meta name="keywords" content="Full Stack Game Development | game develeopment careers | Game development career | game designing | games development | games development classes in Mumbai | games development classes in Pune | games development classes in Delhi | game development courses near me | game development classes | game development training | best game development courses | best game development courses in India | video game development courses | video game development courses in India | online game development courses in Mumbai | online game development courses in Pune | online game development courses | online game development courses near me | game development classes near me | online game development courses in India | learn game development online | skillshare game development" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    {name="Facebookpixel" && <Facebookpixel/>}
    <link rel='icon' href='/favicon.png' />
  </Head>
  <div style={{backgroundColor:'#fffef8',textAlign:'center',color:'#fd7e14',fontWeight:'600'}}>
  <FaqHead/>
  <FaqQuestion/>
  <hr/>
  </div>
  </>
  )
}

export default faq