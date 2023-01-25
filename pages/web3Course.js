import Head from "next/head";
import Banner3 from "../components/Banner3";
import Feature from "../components/Feature";
import Services from "../components/Services";
import QualityFeature from "../components/QualityFeature";
import CoreFeature from "../components/CoreFeature";
import WorkFlow from "../components/WorkFlow";
import Package from "../components/Package";
import { DATA } from "../helpers/Data";
import Performance from "../main/assets/art.svg";
import Partnership from "../main/assets/art.svg";
import Blog1 from "../components/Blog1";
import FaqQuestion from "../main/components/FaqQuestion";
import Faq2 from "../components/Faq2";

const bannerData = {
  title: "MASTERS IN FULL-STACK Game Development.",
  program: "(6-month Program)",
};

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Programming & Logic",
    title: "Programming & Logic",
    text: ["C++ & C#", "Creative & Problem solving skills."],
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Structured Curriculum",
    title: "Structured Curriculum",
    text: [
      "Build, run, analyze and optimize games",
      "Set up and run games from scratch.",
    ],
  },
];

const packageData =
  "STUDY FIRST PAY LATER. PAY ZERO TILL YOU LAND A JOB.\n\n Total fees: Rs 2.99L inclusive of GST.";
function web3({ name }) {
  return (
    <div>
      <Head>
        <title>
          Games development | games development classes in Mumbai |
          Digitalaidedschool
        </title>
        <meta
          name="description"
          content="Learn how to create games from the ground up by enrolling in the online game development course. Launch your career in the gaming industry."
        />
        <meta
          name="keywords"
          content="Full Stack Game Development | game develeopment careers | Game development career | game designing | games development | games development classes in Mumbai | games development classes in Pune | games development classes in Delhi | game development courses near me | game development classes | game development training | best game development courses | best game development courses in India | video game development courses | video game development courses in India | online game development courses in Mumbai | online game development courses in Pune | online game development courses | online game development courses near me | game development classes near me | online game development courses in India | learn game development online | skillshare game development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Banner3 data={bannerData} checkBanner={false} />
      <Faq2 />
      <Feature className="feature" data={DATA().featureWD} />
      <Services className="services" data={data} />
      <QualityFeature className="quality" data={DATA().learning.web} />
      <CoreFeature
        title={DATA().coreFeature.web.title}
        data={DATA().coreFeature.web.description}
        btnText={DATA().coreFeature.web.buttonText}
      />
      <Feature className="growth" data={DATA().growth.dm} />
      <WorkFlow />
      <Blog1 />
      {<Package data={packageData} />}
      <FaqQuestion />

      <hr />
    </div>
  );
}

export default web3;
