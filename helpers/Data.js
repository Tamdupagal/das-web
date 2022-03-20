import liveclass from '../main/assets/Live-Online-Class-01.svg';
import learn from '../main/assets/Learning-01.svg';
import certify from '../main/assets/Certifications.svg';
import what from '../main/assets/What.svg'
import when from '../main/assets/When.svg'
import where from '../main/assets/Where.svg'
import who from '../main/assets/girl.jpg'
import how from '../main/assets/How.svg'
import Dmbasics from '../main/assets/Digital-Marketing-Basics-01.svg'
import Ba from '../main/assets/Brand-Awareness.svg'
import or from '../main/assets/Growth-Marketing.svg'
import gm from '../main/assets/Organic-Reach-01.svg'
import sm from '../main/assets/Social-Media-Management.svg'
import pm from '../main/assets/Project-01.svg'

export const DATA = () => {
    return (
        {
            feature: [
                {
                    id: 1,
                    imgSrc: liveclass,
                    altText: 'Live online classes',
                    title: 'Live online classes',
                    text: ["150+ Hours of Live online classes", "300+ hours of offline training "]
                },
                {
                    id: 2,
                    imgSrc: learn,
                    altText: 'Learning',
                    title: 'Learning',
                     text:
                        ['Agency style COHORT based learning', '1:8 collaborative academic experience']
                },
                {
                    id: 3,
                    imgSrc: pm,
                    altText: 'Project',
                    title: 'Project',
                    text:
                        ['8+ Live Projects.' , 'Real Life industry-standard projects']
                },
                {
                    id: 4,
                    imgSrc: certify,
                    altText: 'Certifications',
                    title: 'Certifications',
                    text:
                        ['5+ certifications', "Masters/Professional Certification"]
                },
            ],
            learning: {
                dm : [
                {
                    id: 1,
                    imgSrc: Dmbasics,
                    altText: 'DM Basics ',
                    title: 'DM Basics ',
                    text: ["Learn Digital Marketing from Basics." , "Industry-specific R&D "],
                },
                {
                    id: 2,
                    imgSrc: Ba,
                    altText: 'Brand Awareness',
                    title: 'Brand Awareness',
                     text:
                        ['Create Awareness around a brand.', 'Learn Content & Engagement around Product/services.'],
                },
                {
                    id: 3,
                    imgSrc: gm,
                    altText: 'Growth/Demand Marketing',
                    title: 'Growth/Demand Marketing',
                    text: ['Learn to acquire as many users or customers as possible.', 'Minimum Spent with maximum outcome']
                },
                {
                    id: 4,
                    imgSrc: or,
                    altText: 'Organic Reach',
                    title: 'Organic Reach',
                    text:
                        ['Learn to engage end-users organically', 'Create campaigns around organic brand awareness']
                },
                {
                    id: 5,
                    imgSrc: sm,
                    altText: 'Social Media Management',
                    title: 'Social Media Management',
                    text:
                        ['Learn SMM for maximizing results', 'Create and run state of the art campaign']
                },
                {
                    id: 6,
                    imgSrc: pm,
                    altText: 'Performance Marketing',
                    title: 'Performance Marketing',
                    text:
                        ['Create and manage paid campaigns.', 'Build, run, analyze and optimize paid campaigns']
                },
                ],
                
                web : [
                {
                    id: 1,
                    imgSrc: Dmbasics,
                    altText: 'Programming Basic',
                    title: 'Programming Basic',
                    text: ["Learn Programming & logic behind them from Basics.", "Industry-specific R&D"],
                },
                {
                    id: 2,
                    imgSrc: Ba,
                    altText: 'Building a Website ',
                    title: 'Building a Website ',
                     text:
                        ['Create Awareness around a brand.', 'Learn to create a website with your preferred programming Language.'],
                },
                {
                    id: 3,
                    imgSrc: gm,
                    altText: 'E-Commerce website',
                    title: 'E-Commerce website',
                    text: ['Learn to acquire the skills to develop complete Ecommerce needs.', 'Learn how Backend works']
                },
                {
                    id: 4,
                    imgSrc: or,
                    altText: 'Software & Applications(Part 1)',
                    title: 'Software & Applications(Part 1)',
                    text:
                        ['Learn how Frontend TECH works ', 'Learn to Design Frontend tech of web application', 'Understand Software & Application Design & technology.', 'Learn how Frontend TECH works'],
                },
                {
                    id: 5,
                    imgSrc: sm,
                    altText: 'Software & Applications(Part 2)',
                    title: 'Software & Applications(Part 2)',
                    text:
                    ['Learn how Backend TECH works .', 'Learn to Design Backend tech of web application','Host and run web application.']
                },
                {
                    id: 6,
                    imgSrc: pm,
                    altText: 'Building & Developing (Softwares & Wep application)',
                    title: 'Building & Developing (Softwares & Wep application)',
                    text:
                        ['LMS-Learning Management System', 'CRM-Customer relationship Management','ERP- Enterprice resource Planing']
                },
            ],
            } ,
            growth: {
                dm: [
                    {
                        id: 1,
                        imgSrc: who,
                        altText: 'Who?',
                        title: 'Who?',
                        text: "Customer acquisition and nurture growth strategies.",
                    },
                    {
                        id: 2,
                        imgSrc: what,
                        altText: 'What?',
                        title: 'What?',
                        text:
                            'Mindshare and awareness throughout the funnel.',
                    },
                    {
                        id: 3,
                        imgSrc: when,
                        altText: 'When?',
                        title: 'When?',
                        text:
                            'Short-term and long-term campaigns and initiatives.',
                    },
                    {
                        id: 4,
                        imgSrc: where,
                        altText: 'Where?',
                        title: 'Where?',
                        text:
                            'Targeting broad and niche audiences.',
                    },
                    {
                        id: 5,
                        imgSrc: how,
                        altText: 'How?',
                        title: 'How?',
                        text:
                            'Advertising media strategies for creative development.',
                    },
                ],
                web: [
                    {
                        id: 1,
                        imgSrc: who,
                        altText: 'Who?',
                        title: 'Who?',
                        text: "Anbody Who wants to learn developing TECH.",
                    },
                    {
                        id: 2,
                        imgSrc: what,
                        altText: 'What?',
                        title: 'What?',
                        text:
                            'Create and develop lastest tech app & softwares.',
                    },
                    {
                        id: 3,
                        imgSrc: when,
                        altText: 'When?',
                        title: 'When?',
                        text:
                            'Short term & long term learning & Upskill.',
                    },
                    {
                        id: 4,
                        imgSrc: where,
                        altText: 'Where?',
                        title: 'Where?',
                        text:
                            'Edtech,Fintech,SaaS,etc.',
                    },
                    {
                        id: 5,
                        imgSrc: how,
                        altText: 'How?',
                        title: 'How?',
                        text:
                            'With Lastest state of the art tech.',
                    },
                ]

            },
            coreFeature: {
                web: {
                    description: "MASTERS/PROFESSIONAL CERTIFICATION IN\nFullstack SOftware/Web application Developer\nDigital aided school's certification course gives you anextensive, comprehensive & advanced knowledge of the all-important tech domains and includes real-world projects and practical simulations for gaining domain experience.\nYou’ll learn all tools real project experience and authentic Pro simulations to make you industry-ready. After successful completion of this 12 months program, you will receive a certificate from DIGITAL AIDED SCHOOL stating that you possess the expertise, authenticate your abilities to create TECH.",
                    buttonText: "Study First Pay Later",
                },
                dm: {
                    description: 'Digital aided school DM certification course gives you anextensive, comprehensive & advanced knowledge of the all-important digital marketing domains and includes real-world projects and practical simulations for gaining domain experience. \n\n You’ll learn 40+ digital marketing tools real project experience and authentic Pro simulations to make you industry-ready. After successful completion of this 6 months program, you will receive a digital marketing certificate from DIGITAL AIDED SCHOOL stating that you possess the expertise of a Digital Marketing Specialist, authenticate your abilities to head digital marketing campaigns.',
                    buttonText: "Study First Pay Later",
                }

            }
        }
    )
}