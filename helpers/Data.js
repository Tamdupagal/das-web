import Performance from '../assets/key-feature/performance.svg';
import Partnership from '../assets/key-feature/partnership.svg';
import Subscription from '../assets/key-feature/subscription.svg';
import Support from '../assets/key-feature/support.svg';

export const DATA = () => {
    return (
        {
            feature: [
                {
                    id: 1,
                    imgSrc: Performance,
                    altText: 'DM Basics & Performance Marketing',
                    title: 'DM Basics & Performance Marketing',
                    text: "Learn Digital Marketing from Basics & Create and manage paid campaigns",
                },
                {
                    id: 2,
                    imgSrc: Partnership,
                    altText: 'SMM',
                    title: 'SMM',
                     text:
                        'Learn to Manage social media through content marketing.',
                },
                {
                    id: 3,
                    imgSrc: Subscription,
                    altText: 'Organic Branding',
                    title: 'Organic Branding',
                    text:
                        'Learn to engage end users organically and create brand awareness.',
                },
                {
                    id: 4,
                    imgSrc: Support,
                    altText: 'Growth hacking',
                    title: 'Growth hacking',
                    text:
                        'Learn to acquire as many users or customers as possible while spending as little as possible.',
                },
            ],
            coreFeature: {
                description: '6 month Program \n 160+ Hours of Live online classes \n 300+ hours of projects & training \n Worlds 1st Live online classes Agency style cohort-based learning 1:8 collaborative Live project building academic experience \n 8+ Live Real Life industry-standard Live projects 12+ certification \n Performance Marketing Brand Awareness Growth Hacking Organic Reach.',
                buttonText: "Study First Pay Later",
            }
        }
    )
}