import React from 'react'
import Head from 'next/head'
import Facebookpixel from './pixel'

const index = ({name}) => {
  return (
    <div>
    <Head>
{name="Facebookpixel" && <Facebookpixel/>}
    </Head>
      
    </div>
  )
}

export default index
