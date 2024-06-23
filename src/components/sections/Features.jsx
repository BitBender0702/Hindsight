import Real from '../../assets/features/real-time.svg'
import Insights from '../../assets/features/insights.svg'
import Innovative from '../../assets/features/innovative.svg'
import Expert from '../../assets/features/expert.svg'

import FeatureItem from '../items/FeatureItem'

const FEATURE_LIST = [
    { 
        text: 'Real-Time Data Analysis', 
        icon: Real, 
        desc: 'You always have access to the latest information and insights about the tokens you are monitoring.' 
    },
    { 
        text: 'Insights and Analytics', 
        icon: Insights, 
        desc: 'Get insights and analytics on token trends, price movements, and network activity'
    },
    { 
        text: 'Innovative Data Visualizations', 
        icon: Innovative, 
        desc: 'Get data through easy-to-read and visually appealing data visuals, allowing you to quickly gain insights into the  data.'
    },
    { 
        text: 'Expert Support', 
        icon: Expert, 
        desc: 'Get expert support if you have any questions or concerns about using the platform.'
    }
];

export default function Header(){
    return (
        <section className='key-features pt-10 pb-42'>
            <div className='container mx-auto max-w-xl flex flex-col items-center items-center gap-10'>
                <h2 className='font-brand-medium text-large font-semibold text-white'>Key Features</h2>
                <p className='font-brand-medium font-medium text-base text-secondary-color text-center'>
                    Our innovative data visualization tools allow you to quickly gain insights into the data. Whether you're a seasoned<br />
                    blockchain investor or just getting started, our platform is perfect for you.
                </p>
                <div className='flex flex-wrap gap-y-11.5 ml-m-8.5 mr-m-8.5'>
                    {FEATURE_LIST.map((item, idx) => (
                        <FeatureItem { ...item } key={ idx } />
                    ))}
                </div>
            </div>
        </section>
    )
}