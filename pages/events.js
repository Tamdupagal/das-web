import React from 'react'
import CardGrid from '../main/components/CardGrid'
import Blog from '../components/Blog';

const events = () => {
  return (
    <>
    <div style={{padding:'40px',marginTop:'10rem',backgroundColor:'#fffef8',textAlign:'center',color:'#fd7e14'}}>
    <h1 style={{textAlign:'center',fontSize:'2.5rem', padding:'3rem',textTransform:'uppercase'}}>Upcoming Launch Events</h1>
    <Blog/>
    </div>
    <hr/>
    </>
  )
}

export default events
