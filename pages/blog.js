import Link from "next/link";
import React from "react";
import Image from "next/image";
import Post1 from "../assets/post-images/tip.png";
import Post2 from "../main/assets/Blog.png";
import Post3 from "../assets/blog5_12.png";
// import Blog from '../main/components/Blog'
const blog = () => {
  return (
    <div style={{ paddingTop: "10rem" }} className="container2">
      <h1 className="title">Latest Post</h1>
      <hr />
      <div className="blogg">
        <div className="Imagess">
          <Image src={Post3} alt="main image" className="Main-Blog imgg" />
        </div>
        <Link href="../post/A-Guide-to_Game_Design_the_process_behind_making_a_video_game">
          <h1 className="sub-link">
            A Guide to Game Design: the process behind making a video game
          </h1>
        </Link>
        <Link href="../post/A-Guide-to_Game_Design_the_process_behind_making_a_video_game">
          <p>
            The process of designing a video game is an exciting, creative
            endeavor that spurs you to think in new ways and helps you learn
            more about your strengths.
          </p>
        </Link>
        <br />
      </div>
      <div className="blogg">
        <div className="Imagess">
          <Image src={Post3} alt="main image" className="Main-Blog imgg" />
        </div>
        <Link href="../post/Top-5-Game-Development-Courses">
          <h1 className="sub-link">Top 5 Game Development Courses</h1>
        </Link>
        <Link href="../post/Top-5-Game-Development-Courses">
          <p>
            Game development is an exciting field to break into today. There has
            never been a better time to start developing your games and making
            money from them. The gaming industry is bigger than Hollywood, and
            it&apos;s growing every year.{" "}
          </p>
        </Link>
        <br />
      </div>
      <div className="blogg">
        <Image src={Post1} alt="main image" className="Main-Blog imgg" />
        <Link
          href="../post/10-tips-for-making-your-first-game-a-success"
          style={{ borderRadius: "10px" }}
        >
          <h1 className="sub-link">
            10 tips for making your first game a success
          </h1>
        </Link>
        <Link href="../post/10-tips-for-making-your-first-game-a-success">
          <p>
            Game development is a process that requires both creative and
            technical skills. And, because it&apos;s a relatively new industry,
            there are a lot of different ways to get into it. In this article,
            we&apos;ll give you an overview of the game development process and
            some tips on how to get started.
          </p>
        </Link>
      </div>
      <div className="blogg">
        <div className="Imagess">
          <Image src={Post2} alt="main image" className="Main-Blog imgg" />
        </div>
        <Link href="../post/how-to-get-started-as-a-game-developer">
          <h1 className="sub-link">how to get started as a game developer</h1>
        </Link>
        <Link href="../post/how-to-get-started-as-a-game-developer">
          <p>
            Whether you&apos;re a seasoned game developer or just starting,
            there are always ways to improve your game. Here are 10 tips to make
            your first game a success. These tips will help you stand out in the
            crowded gaming market.
          </p>
        </Link>
        <br />
      </div>
    </div>
  );
};

export default blog;
