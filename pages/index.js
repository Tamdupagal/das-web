import Banner from '../main/components/Banner'
import Courses from '../main/components/Courses'
import Misson from '../main/components/Misson'
import Association from '../main/components/Association'
import Head from 'next/head'
import WorkFlow from '../components/WorkFlow'
import Blog1 from '../components/Blog1'
import Testimonial from '../components/Testimonial'
import NewState from '../components/NewState'
// import HubSpot from '../main/components/HubSpot'
// import Login from '../main/components/Login'
// import ThankYou from '../main/components/ThankYou'


export default function Home() {

 {/*  const search = () => {
    window.rudderanalytics.page();
    window.rudderanalytics.track("Track Event");
  };
 */}

  return (
    <div>
      <Head>
        <title>DAS-Live online classes | C++/Unity/Unreal Game Dev Courses</title>
        <metadata name="description" content="Learn game development and get 100% placement assistance. With our courses, you will learn everything from the basics of programming to advanced concepts."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/> 
        <meta name="keywords" content="Full Stack Game Development | game development careers | Game development career | game designing | games development | games development classes in Mumbai | games development classes in Pune | games development classes in Delhi | game development courses near me | game development classes | game development training | best game development courses | best game development courses in India | video game development courses | video game development courses in India | online game development courses in Mumbai | online game development courses in Pune | online game development courses | online game development courses near me | game development classes near me | online game development courses in India | learn game development online | skillshare game development" />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>
<NewState/>
        {/* <Banner />
        <Courses />
        <Misson />
        <Blog1/>  
        <Association />
        <WorkFlow />
        <Testimonial/>
          */}
        <hr/>
      </main>
    </div>
  )
}
