import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import RoadmapItem from '../components/items/RoadmapItem'

const STAGE_LIST = [
    {   
        label: 'Stage 1',
        title: 'Proof of concept',
        text: 'Proof of concept with test data from from ERC and NFT contract address', 
        desc: 'This stage is focus on getting a working example of the tools ability to fetch data and to display data in a meaningful way',        
    },
    {  
        label: 'Stage 2',
        title: 'Product Improvement',
        text: 'Improving product, connecting with DAOs, Marketing & Fixing Bugs', 
        desc_list: [
            'Here we are improving the tool from prototype, building out views, improving display and mapping on info.',
            'Reaching back out to DAOs who offered money to get holders beta access ',
            'Ability to create account and accept crypto and assign permissions on monthly basis by wallet'
        ]                
    },
    {   
        label: 'Stage 3',
        title: 'Feedbacks',
        text: ' Get feed back from participating communities and users', 
        desc_list: [
            'Add token gating so Holders of participating DAOs can acces no charge. (may require API info on their end if staking)',
            'Look at utilizing the Ether cluster repo and it’s classifications into HindSight. With exchanges, liquidity pool, etc. being different shapes (square, triangle, hexagon, ect)',
            'Add/ complete historical, standard and Volume. (volume may be built into all views at the bubble level.)'
        ]               
    },
    {   
        label: 'Stage 4',
        title: 'Product Launch',
        text: 'Full launch for ETH and SOL networks', 
        desc_list: [
            'Able to address search any address (similar to eth/solscan) and render meaningful visual data on both the SOL and ETH network.',
            'Look at scaling needs.',
            '2/3 working and integrated. ',
            'Ability to create accounts with email and accept credit card payments.'
        ]
    },    
    {   
        label: 'Stage 5',
        title: 'Continuous Improvement',
        text: ' Get feed back from participating communities and users', 
        desc_list: [
            'Launch party in Florida!',
            'Full boar marketing.',
            'Improving product and looking at community suggestions.',
            'B2B outreach and client acquisition.'
        ]
    }    
];

function Roadmap(){
    return (
        <>
            <Header />

            <section className='roadmap-section'>
                <div className='container mx-auto max-w-xl'>
                    <h3 className='section-title font-brand-bold font-bold text-xxx-large-s text-white pt-12.5 pb-10 text-center'>Roadmap</h3>
                    <div className='flex flex-col gap-9.75'>
                        {STAGE_LIST.map((item, idx) => (
                            <RoadmapItem { ...item } key={ idx } />
                        ))}
                    </div>
                </div>
            </section>
                            
            <div className='main-bg block w-full h-full top-0 bg-main-bg bg-cover absolute z-[-2]'></div>

            <Footer />
        </>
    )
}

export default Roadmap