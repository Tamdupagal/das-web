import React from 'react'
import Image from 'next/image'
import img from '../assets/Blog.png'
import styles from './Blog.module.scss'
import Post1 from '../../pages/post/how-to-get-started-as-a-game-developer'
// import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.container}>
    <Post1/>
    </div>
  )
}

export default Blog
