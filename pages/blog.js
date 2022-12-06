import Link from 'next/link'
import React from 'react'
// import Blog from '../main/components/Blog'
const blog = () => {
  return (
    <div style={{paddingTop:'10rem'}} className="container2">
    <h1 className="title">Latest Post</h1>
    <hr/>    
      <Link href='../post/10-tips-for-making-your-first-game-a-success'><h1 className="sub-link">10 tips for making your first game a success</h1></Link>
<Link href='../post/how-to-get-started-as-a-game-developer'><h1 className="sub-link">how to get started as a game developer</h1></Link><br/>
</div>
  ) 
}

export default blog
