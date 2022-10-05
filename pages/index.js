import Banner from '../main/components/Banner'
import Courses from '../main/components/Courses'
import Misson from '../main/components/Misson'
import Association from '../main/components/Association'
import Head from 'next/head'
import WorkFlow from '../components/WorkFlow'
import Blog1 from '../components/Blog1'
// import HubSpot from '../main/components/HubSpot'
// import Login from '../main/components/Login'

export default function Home() {

  const search = () => {
    window.rudderanalytics.page();
    window.rudderanalytics.track("Track Event");
  };


  return (
    <div>
      <Head>
        <title>Full Stack Game Development | game developer | Digitalaidedschool</title>
        <metadata name="description" content="Upgrade your career and become a game developer with 100% placement assistance. Pay nothing if you don't land a job in the salary we promised." />
        <meta name="viewport" content="width=device-width, initial-scale=1"/> 
        <meta name="keywords" content="Full Stack Game Development | game development careers | Game development career | game designing | games development | games development classes in Mumbai | games development classes in Pune | games development classes in Delhi | game development courses near me | game development classes | game development training | best game development courses | best game development courses in India | video game development courses | video game development courses in India | online game development courses in Mumbai | online game development courses in Pune | online game development courses | online game development courses near me | game development classes near me | online game development courses in India | learn game development online | skillshare game development" />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>

        <Banner />
        <Courses />
        <Misson />
        <Association />
        <WorkFlow />
        <Blog1/>       
        <hr/>
      </main>
    </div>
  )
}
