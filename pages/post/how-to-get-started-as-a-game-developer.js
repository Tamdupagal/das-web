import Image from 'next/image'
import React from 'react'
import blog from '../../main/assets/Blog.png'
import Blog1 from '../../main/assets/Blog 2.png'
import blog2 from '../../main/assets/Blog 3.png'
import blog3 from '../../main/assets/Blog 5.png'
import blog4 from '../../main/assets/maxresdefault.jpeg.jpg'
import blog5 from '../../main/assets/cybpnk.jpg'

const Post1 = () => {
  return (
  <div style={{paddingTop:'10rem'}} className="container2">
    <h1 className="title">How to get started as a game developer</h1>
    <p style={{fontSize:'15px'}}>Date: 19/11/2022  / 2:00Pm</p>
    <div className='imgg'> 
    <Image src={blog} alt='intro'  className='imgg' />
    </div>
    <h2 className="sub-heading"> Introduction</h2>
    <p style={{paddingTop:'1rem',}} className="description">
    If you&apos;re looking for a career in game development, you&apos;ve probably heard some of the common 
    clichés: &apos;You can&apos;t do it alone,&apos; 
    &apos;It&apos;s difficult to find a job as a game developer,&apos; and &apos;
    You have to have 10 years experience before you can get hired.&apos; These statements are
    frequently correct. But they do not provide the complete picture. 
    The truth is that there are numerous ways to get started in game development and various opportunities for success. 
    There are many paths open to those willing to take their first steps toward becoming professional game developers,
 whether you want to develop for mobile platforms or work on a AAA title with hundreds of people on your team.
 </p>
 <h2 className="sub-heading">Choose a segment of the industry you&apos;d like to focus on</h2>
 <p style={{paddingTop:'1rem',}} className="description">
 So you want to be a game developer? Great!
 There are numerous possibilities and chances 
 available to you, regardless of your degree of experience. 
 But first, it is crucial to decide what kind of game developer
 you want to be: <br/>
 </p>
   <div className='list'>
   <li>
   Game Designer - You create games by designing levels, characters, and game mechanics. Designers contribute to the 
   overall visual design of the game, ensuring that it looks consistent across all its components.
   </li>
   <li>
   Artist/Programmer - You create art assets (like textures) or code new features into your games using C++ or Java coding languages. 
   Working directly on an existing engine like Unity or Unreal Engine is typically how this is accomplished (both have free basic versions). 
   You can also contribute as an audio designer if your skillset extends beyond just creating art assets. Some programmers may
   prefer working alone because they do not need another person to distract them from their work all day!
   </li>
   </div>
  
    <h2 className="sub-heading">Determine your educational path.</h2>
    <p style={{paddingTop:'1rem',}} className="description">
    Learning to code is a great way to get started as a game programmer. However, 
    you&apos;ll need more than just an interest in the subject to apply for jobs; you&apos;ll also need some experience.
If you&apos;re considering taking online game dev courses for this purpose, there 
are many factors to consider: what kind of skills does your company require? 
What kind of knowledge do you possess that could compensate for any gaps in formal education? 
What will it cost, and how long will it take? As with any major life decision, 
there is no one-size-fits-all solution! But given enough time and research into these questions
(and perhaps some help from the community), we can all agree that getting started would be worth
it when compared against other options available today.
</p>


<div style={{textAlign:'center',}} className='imgg'>
<Image src={Blog1} alt='intro' className='imgg' />
 </div>
<h2 className="sub-heading">Learn programming languages.</h2>
<p style={{paddingTop:'1rem',}} className="description">
  One of the most common questions from people interested in becoming game developers is,
  &quot;What programming language should I learn?&quot;
  We&apos;re glad you asked. Here&apos;s a short list of some languages that could be useful to know
  if you&apos;re going to make games:
  </p>
  <div className='list'>
  <li>C++: It is the scripting language used by some of the most popular game engines, 
  including Unreal Engine, Godot Engine, and Cryengine. Its low-level language elements enable 
  you to interact with the hardware and guarantee an extremely responsive gaming experience.
  To learn C++ according to industry standards, visit (https://digitalaidedschool.com).
  </li>
  <li>
  C#: It is the most popular language for game development, as it is supported by the Unity engine. 
  Unity is one of the most reliable, flexible, and user-friendly game development interfaces.
  To learn C# according to industry standards, visit (https://digitalaidedschool.com).
  </li>
  </div>
  
  <h2 className="sub-heading">Learn the basics of computer graphics.</h2>
  <div className='list'>
  <li>What is computer graphics?
Computer graphics is the process of representing an image on a screen in three dimensions. 
We can accomplish it in a variety of ways, including:
  </li>
  <li>3D or 2D?</li>
  </div>
  <p style={{paddingTop:'1rem',}} className="description">
  3D computer graphics use models to produce realistic images and animations.
  3D modeling software is used to create these models, which can then be animated using
    keyframes or particles to create complex scenes with moving objects and characters. 
    Some famous examples include The Sims (PC), Spore (PC), Civilization IV (PC),
     and Mass Effect (Xbox 360). 2D computer graphics do not use 3D technology;
     instead, they represent their objects as simple shapes on the screen with 
     no depth or perspective involved whatsoever! Famous examples include Super Mario Bros., 
      Sonic the Hedgehog, and Contra III: The Alien Wars.
      </p>
    <div style={{textAlign:'left',}} className='imgg'>
      <Image src={blog4} alt='intro' className='imgg' />
 <p>source: https://www.programsbuzz.com/ </p>
 </div>
     <h2 className="sub-heading">Get familiar with the main types of software used in game development.</h2>
     <p style={{paddingTop:'1rem',}} className="description">
     Familiarize yourself with the main types of software used in game development.
     </p>
     <div className='list'>
  <li>Game engine: Handles all aspects of making your game work,
   from rendering 3D graphics to controlling the user interface and memory.
  </li>
  <li>3D modeling software: The 3D modeling part is where most of your time will be spent as
  a beginner or intermediate programmer, but it&apos;s important to know what tools are out 
  there so you can choose one that fits your needs. Various free and paid options are available;
    some popular ones include Blender
   (a free, open-source program) and Maya (a professional product).</li>
   <li>
   2D art software: Though they&apos;re sometimes seen as separate entities by those who work in video games,
   2D artists use tools like Photoshop or GIMP to create images—this includes characters&apos; portraits,
     backgrounds, and other elements like UI elements such as buttons and text boxes.
     They may also need knowledge about lighting techniques if they want their designs to look realistic!
     </li>
     </div>
    
   <h2 className="sub-heading">Meet other game developers.</h2>
   <p style={{paddingTop:'1rem',}} className="description">
   You can find a game development community or meetup group by searching
  for &qout;game developers&qout; on Facebook,
  Google, or Meetup.com. If you&apos;re looking for something more 
 specific, try these resources
 </p>
 
   <div className='list'>
   <li><a href="https://www.gamedev.net/" >[GameDev.net](https://www.gamedev.net/) </a> - This is an online resource center with forums and articles that cover everything from programming languages to art techniques and business practices in the gaming industry (Including information on how to get started in game development).
   </li>
   <li><a href="https://digitalaidedschool.com/" >[Digital Aided School](https://digitalaidedschool.com/) </a> - an online learning platform that provides training and placement support to creators and helps them succeed in their game development. Promotes community-based learning by offering live online classes and industry-level project-building opportunities</li>
   </div>
   <div style={{textAlign:'center',}} className='imgg'>
   <Image src={blog3} alt='intro' className='imgg' />
   </div>
   <h2 className="sub-heading">Get involved in the community.</h2>
   <p style={{paddingTop:'1rem',}} className="description">
   Get involved in the community. Meetups, conferences, and other events are a great way to meet people who are into the same things you are—and they&apos;re often free! If there&apos;s an event near where you live that focuses on game development, attend it and connect with other developers. You can also find online communities dedicated to developing games (like Unity3D or Unreal Engine 4).
   You&apos;ll almost certainly want to discover new games that interest you by checking out YouTube channels and websites like Game Jolt or IndieGames. Check out forums too!
   </p>

   <h2 className="sub-heading">Publish your work online.</h2>
   <p style={{paddingTop:'1rem',}} className="description">
   One of the best ways to get feedback is to publish your work online. If you&apos;re developing a game and want to see what people think of it, then publishing it on your website is perfectly fine. But if you want more people looking at it or have a larger audience in mind, consider using services like itch.io or Indie DB (which charges $5 per month). You can also publish on places like Reddit, Quora, and Stack Overflow, where millions of users will read every post submitted by anyone interested in whatever topic gets discussed there!
   </p>
   
 <div style={{textAlign:'left',}} className='imgg'>
   <Image src={blog2} alt='intro' className='imgg' />
   </div>

<h2 className="sub-heading">Improve your communication skills.</h2>
<p style={{paddingTop:'1rem',}} className="description">
Communication skills are one of the most important things to learn as a game developer. Communication is essential if you want your team to work effectively and create awesome games.
</p>
<div className='list'>
<li>Learn how to explain your ideas in a way that others can understand. You must be able to communicate with others about what you&apos;re working on so that everyone is aware of the status of your project. It means figuring out the best ways to express yourself verbally and in writing!</li>
<li>Learn how important feedback is for improving yourself as an employee or employer of any kind—and be aware of the things critical before starting a project or designing something. Feedback is essential in all aspects of project management and project development.</li>
</div>
<h2 className="sub-heading">The first step is figuring out what you want to do.</h2>
<p style={{paddingTop:'1rem',}} className="description">
The first step is figuring out what you want to do.
Once you&apos;ve decided on a segment of the industry and have some ideas about your educational path, it&apos;s time to start learning! There are numerous ways to accomplish this. If you&apos;re already familiar with programming languages and computer graphics, this may be the most optimal path for getting started as a game developer. However, if your background is more business or design oriented (or both), studying those subjects would be more beneficial than learning about coding or artistry (though still important).
If nothing else works for your needs or interests then perhaps taking classes at local colleges/universities will help in discovering new potential paths down which one could take themselves further along their journey towards becoming professionally employed within gaming development companies such as EA Games offer internships throughout North America including locations such as Canada & Mexico City where opportunities exist locally through programs provided by local industry leaders such as Ubisoft Montreal Studio Manager Martin Anfinsen who recently spoke at WIRED 2015 Conference held earlier this year back home near Montreal Quebec City Canada - &quot;We want our students from Ontario University to come here because we are trying hard every day working hard so they have fun while doing their job.&quot;
</p>
<div style={{textAlign:'left',}} className='imgg'>
 <Image src={blog5} alt='intro' className='imgg' />
 <p>Source: Cyberpunk-twitter</p>
 </div>

<h2 className="sub-heading">Conclusion</h2>
<p style={{paddingTop:'1rem',}} className="description">
So, what do you think? If you&apos;re still unsure about what to do next in your game development career, enroll in Digital Aided School (full-stack game development program). We offer live online classes with over 500+ hours of training and project building, 10+ industry standard projects, and full assistance till you get placed.
</p>

    </div>
  )
}

export default Post1