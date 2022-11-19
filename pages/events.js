import React from 'react'
// import Blog from '../components/Blog';
import Head from 'next/head'


const events = ({name}) => {
  return (
    <>
    <Head>
    <title>Events | Digitalaidedschool</title>
    <meta name='description' content='For upcoming events you can visit here.' />
    <meta name="keywords" content="Full Stack Game Development | game develeopment careers | Game development career | game designing | games development | games development classes in Mumbai | games development classes in Pune | games development classes in Delhi | game development courses near me | game development classes | game development training | best game development courses | best game development courses in India | video game development courses | video game development courses in India | online game development courses in Mumbai | online game development courses in Pune | online game development courses | online game development courses near me | game development classes near me | online game development courses in India | learn game development online | skillshare game development" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel='icon' href='/favicon.png' />
  </Head>
  
    <div style={{paddingTop:'10rem',backgroundColor:'#fffef8',textAlign:'center',color:'#fd7e14'}}>
    <h1 style={{textAlign:'center',fontSize:'2.5rem', padding:'3rem',textTransform:'uppercase'}}>Coming Soon Events</h1>

    </div>
    <hr/>
    </>
  )
}

export default events
