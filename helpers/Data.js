import liveclass from "../main/assets/Live-Online-Class-01.svg";
import learn from "../main/assets/Learning-01.svg";
import certify from "../main/assets/Certifications.svg";
import what from "../main/assets/What.svg";
import when from "../main/assets/When.svg";
import where from "../main/assets/Where.svg";
import who from "../main/assets/girl.jpg";
import how from "../main/assets/How.svg";
import Dmbasics from "../main/assets/Digital-Marketing-Basics-01.svg";
import Ba from "../main/assets/Brand-Awareness.svg";
import or from "../main/assets/Growth-Marketing.svg";
import gm from "../main/assets/Organic-Reach-01.svg";
import sm from "../main/assets/Social-Media-Management.svg";
import pm from "../main/assets/Project-01.svg";

export const DATA = () => {
  return {
    featureDM: [
      {
        id: 1,
        imgSrc: liveclass,
        altText: "Live online classes",
        title: "Live online classes",
        text: [
          "Live online everyday classes",
          "300+ hours of offline training ",
        ],
      },
      {
        id: 2,
        imgSrc: learn,
        altText: "Learning",
        title: "Learning",
        text: [
          "Agency style COHORT based learning",
          "1:10 collaborative Live project building academic experience",
        ],
      },
      {
        id: 3,
        imgSrc: pm,
        altText: "Project",
        title: "Project",
        text: ["3+ Live Projects.", "Real Life industry-standard projects"],
      },
      // {
      //   id: 4,
      //   imgSrc: certify,
      //   altText: 'Certifications',
      //   title: 'Certifications',
      //   text: ['10+ certifications', 'Masters/Professional Certification'],
      // },
    ],
    featureWD: [
      {
        id: 1,
        imgSrc: liveclass,
        altText: "Live online everyday classes",
        title: "Live online classes",
        text: [
          "Engage in Interactive Learning",
          "250+ Hours of Expert Training",
        ],
      },
      {
        id: 2,
        imgSrc: learn,
        altText: "Learning",
        title: "Learning",
        text: [
          "Cohort-Based Learning Approach",
          "1:10 Collaborative Academic Experience",
        ],
      },
      {
        id: 3,
        imgSrc: pm,
        altText: "Project & Portfolio Management",
        title: "Project & Portfolio Management",
        text: [
          "Experience Real-Life Generative AI Projects",
          "Portfolio Development and Management",
        ],
      },
      // {
      //   id: 4,
      //   imgSrc: certify,
      //   altText: 'Certifications',
      //   title: 'Certifications',
      //   text: ['5+ certifications', 'Masters/Professional Certification'],
      // },
    ],

    learning: {
      dm: [
        {
          id: 1,
          imgSrc: Dmbasics,
          altText: "Game development",
          title: "Game development",
          text: [
            "Introduction to C++.",
            "Learn coding games from scratch using C++",
          ],
        },
        {
          id: 2,
          imgSrc: Ba,
          altText: "Introduction Unity ",
          title: "Introduction Web3 Game Dev",
          text: [
            "A cross-platform used for developing games and consoles.",
            "Learn to develop games using Unity & Unreal Engine.",
          ],
        },
        {
          id: 3,
          imgSrc: gm,
          altText: "Introduction to Web 3 gaming",
          title: "Introduction to Web 3 gaming ",
          text: [
            "Web 3.0 is supposed to be the next big evolution for the internet and gaming.",
            "Learn to develop games (web 3)",
          ],
        },
        {
          id: 4,
          imgSrc: or,
          altText: "Introduction 3D games with audiovisual effects.",
          title: "Introduction 3D games with audiovisual effects.",
          text: [
            "Developing games using unity framework, unity canvas,and games objects(3D).",
            "Develop multiplayer games.",
          ],
        },
        {
          id: 5,
          imgSrc: sm,
          altText: "Gaming Industry.",
          title: "Gaming Industry.",
          text: ["Understand the gaming industry", "Career Planning."],
        },
        {
          id: 6,
          imgSrc: pm,
          altText: "Projects & Portfolio management",
          title: "Projects & Portfolio management",
          text: ["Build your first Game.", "Learn to build a Portfolio"],
        },
      ],

      web: [
        {
          id: 1,
          // imgSrc: Dmbasics,
          altText: "Game development",
          title: "Generative AI Techniques",
          text: ["Harness the Power of AI for Creative Outputs"],
        },
        {
          id: 2,
          // imgSrc: Ba,
          altText: "Unity Engine ",
          title: "Unity Engine",
          text: [
            "A cross-platform used for developing games and consoles.",
            "Learn to develop games using Unity Engine.",
          ],
        },
        {
          id: 3,
          // imgSrc: gm,
          altText: "Web3 gaming",
          title: "Web3 gaming",
          text: [
            "Web 3.0 is supposed to be the next big evolution for the internet and gaming.",
            "Learn to develop games (web 3)",
          ],
        },
        {
          id: 4,
          // imgSrc: or,
          altText: "3D games with audiovisual effects.",
          title: "3D games with audiovisual effects.",
          text: [
            "Developing games using unity framework, unity canvas, and games objects (3D).",
            "Develop multiplayer games.",
          ],
        },
        {
          id: 5,
          // imgSrc: sm,
          altText: "Gaming Industry.",
          title: "Gaming Industry.",
          text: ["Understand the gaming industry", "Career Planning."],
        },
        {
          id: 6,
          // imgSrc: pm,
          altText: "Projects & Portfolio management",
          title: "Projects & Portfolio management",
          text: ["Build Live Games.", "Learn to build a Portfolio"],
        },
      ],
    },
    growth: {
      dm: [
        {
          id: 1,
          imgSrc: who,
          altText: "Who?",
          title: "Who?",
          text: "World-Class Experienced Faculty from Digital Aided School",
        },
        {
          id: 2,
          imgSrc: what,
          altText: "What?",
          title: "What?",
          text: "Teaching Foundation of Game Development & Full-Stack Game Development to a point where the student is industry ready and can get placed easily",
        },
        {
          id: 3,
          imgSrc: when,
          altText: "When?",
          title: "When?",
          text: "Multiple batches in a week with 1.5 hrs long classes offering time flexibility. Time commitment of at least 3-4 hours total daily is required, including classes",
        },
        {
          id: 4,
          imgSrc: where,
          altText: "Where?",
          title: "Where?",
          text: "Through Digital Aided School, virtually in a physical classroom-like environment.",
        },
        {
          id: 5,
          imgSrc: how,
          altText: "How?",
          title: "How?",
          text: "Industry-level guided projects, Internship & Placement opportunities at top firms, Placement guidance & mentorship, Up to 100% Scholarships, Study First Pay Later",
        },
      ],
      web: [
        {
          id: 1,
          imgSrc: who,
          altText: "Who?",
          title: "Who?",
          text: "Anbody Who wants to learn developing TECH.",
        },
        {
          id: 2,
          imgSrc: what,
          altText: "What?",
          title: "What?",
          text: "Create and develop lastest tech app & softwares.",
        },
        {
          id: 3,
          imgSrc: when,
          altText: "When?",
          title: "When?",
          text: "Short term & long term learning & Upskill.",
        },
        {
          id: 4,
          imgSrc: where,
          altText: "Where?",
          title: "Where?",
          text: "Edtech,Fintech,SaaS,etc.",
        },
        {
          id: 5,
          imgSrc: how,
          altText: "How?",
          title: "How?",
          text: "With Lastest state of the art tech.",
        },
      ],
    },
    coreFeature: {
      web: {
        title: "MASTERS IN FULL-STACK Game Development.",
        description:
          "The Generative AI Mastery Course is designed to equip you with in-depth knowledge and practical skills in the field of Generative AI. Our comprehensive curriculum introduces you to cutting-edge AI tools and techniques, allowing you to harness the power of AI for creative problem-solving and innovation. Through a combination of expert-led virtual classes and hands-on projects, you'll develop a deep understanding of how to leverage Generative AI in various domains. Upon successful completion of this transformative 6-month program, you'll earn a certificate from Digital Aided School, validating your expertise in Generative AI and positioning you for a successful career in the AI-driven world.",
        buttonText: "STUDY FIRST PAY LATER",
      },
      dm: {
        title: "MASTER Solid foundation Game Development Program",
        description:
          "The Web3 Game Development Course provides an in-depth education in the field of web3 gaming. With a week-by-week structure, students will learn all aspects of web3 gaming, starting from the fundamentals and covering topics such as smart contracts, game design, multiplayer games, monetization, security, analytics, and metrics. The course prioritizes hands-on learning through projects, culminating in a final capstone project where students can showcase their skills and develop a full web3 game.",
        buttonText: "STUDY FIRST PAY LATER",
      },
    },
  };
};
