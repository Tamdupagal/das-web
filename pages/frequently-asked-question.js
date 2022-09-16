import React from 'react'
import Package from '../components/Package'
import WorkFlow from '../components/WorkFlow'
import FaqData from '../main/components/FaqData'
import FaqHead from '../main/components/FaqHead'
import FaqQuestion from '../main/components/FaqQuestion'

const packageData =
  'STUDY FIRST PAY LATER. PAY ZERO TILL YOU LAND A JOB.\n\n Total fees: Rs 1.8L inclusive of GST.'

const faq = () => {
  return (
    <div style={{backgroundColor:'#fffef8',textAlign:'center',color:'#fd7e14'}}>
    <FaqHead/>
    <FaqQuestion/>
    <WorkFlow/>
    <Package data={packageData}/>
    <hr/>
    </div>
  )
}

export default faq