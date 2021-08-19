import liveclass from '../main/assets/Live-Online-Class-01.svg';
import learn from '../main/assets/Learning-01.svg';
import certify from '../main/assets/Certifications.svg';
import what from '../main/assets/What.svg'
import when from '../main/assets/When.svg'
import where from '../main/assets/Where.svg'
import who from '../main/assets/Who.svg'
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
                    text: "150+ Hours of Live online classes\n300+ hours of offline training ",
                },
                {
                    id: 2,
                    imgSrc: learn,
                    altText: 'Learning',
                    title: 'Learning',
                     text:
                        'Agency style COHORT based learning\n1:8 collaborative academic experience',
                },
                {
                    id: 3,
                    imgSrc: pm,
                    altText: 'Project',
                    title: 'Project',
                    text:
                        '8+ Live Projects\nReal Life industry-standard projects',
                },
                {
                    id: 4,
                    imgSrc: certify,
                    altText: 'Certifications',
                    title: 'Certifications',
                    text:
                        '10+ certifications\nMasters/Professional Certification',
                },
            ],
            learning: [
                {
                    id: 1,
                    imgSrc: Dmbasics,
                    altText: 'DM Basics ',
                    title: 'DM Basics ',
                    text: "Learn Digital Marketing from Basics.\nIndustry-specific R&D ",
                },
                {
                    id: 2,
                    imgSrc: Ba,
                    altText: 'Brand Awareness',
                    title: 'Brand Awareness',
                     text:
                        'Create Awareness around a brand\nLearn Content & Engagement around Product/services',
                },
                {
                    id: 3,
                    imgSrc: gm,
                    altText: 'Growth/Demand Marketing',
                    title: 'Growth/Demand Marketing',
                    text:
                        'Learn to acquire as many users or customers as possible\nMinimum Spent with maximum outcome',
                },
                {
                    id: 4,
                    imgSrc: or,
                    altText: 'Organic Reach',
                    title: 'Organic Reach',
                    text:
                        'Learn to engage end-users organically\nCreate campaigns around organic brand awareness',
                },
                {
                    id: 5,
                    imgSrc: sm,
                    altText: 'Social Media Management',
                    title: 'Social Media Management',
                    text:
                        'Learn SMM for maximizing results\nCreate and run state of the art campaign',
                },
                {
                    id: 6,
                    imgSrc: pm,
                    altText: 'Performance Marketing',
                    title: 'Performance Marketing',
                    text:
                        'Create and manage paid campaigns.\nBuild, run, analyze and optimize paid campaigns',
                },
            ],
            growth: [
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
                    imgSrc: who,
                    altText: 'How?',
                    title: 'how?',
                    text:
                        'Advertising media strategies for creative development.',
                },
            ],
            coreFeature: {
                description: 'Digital aided school DM certification course gives you anextensive, comprehensive & advanced knowledge of the all-important digital marketing domains and includes real-world projects and practical simulations for gaining domain experience. \n\n You’ll learn 40+ digital marketing tools real project experience and authentic Pro simulations to make you industry-ready. After successful completion of this 6 months program, you will receive a digital marketing certificate from DIGITAL AIDED SCHOOL stating that you possess the expertise of a Digital Marketing Specialist, authenticate your abilities to head digital marketing campaigns.',
                buttonText: "Study First Pay Later",
            }
        }
    )
}