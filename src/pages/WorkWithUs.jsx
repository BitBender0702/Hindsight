import Icon1 from '../assets/visualization/bx_list-plus.svg'
import Icon2 from '../assets/visualization/icomoon-free_embed2.svg'
import Icon3 from '../assets/visualization/eos-icons_api-outlined.svg'
import Icon4 from '../assets/visualization/eos-icons_blockchain.svg'

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import DataVisualisationItem from '../components/items/DataVisualisationItem'

const DATA_VISUALISATION_LIST = [
    {
        title: 'Get Listed',
        desc: 'List your DeFi token or NFT collection to make itsHindsight publicly accessible.',
        icon_url: Icon1,
        action_title: 'Apply for listing',
        action_link: ''
    },
    {
        title: 'Inframe Integration',
        desc: 'Integrate pre-built iframes that already powers leading decentralized applications.',
        icon_url: Icon2,
        action_title: 'Apply for listing',
        action_link: ''
    },
    {
        title: 'API',
        desc: 'Reprehenderit esse labore id veniam ut veniam non eet ullamco dolor proident.',
        icon_url: Icon3,
        action_title: 'Get in touch',
        action_link: ''     
    },
    {
        title: 'Add your blockchain',
        desc: 'Reprehenderit esse labore id veniam ut veniam non eet ullamco dolor proident.',
        icon_url: Icon4,
        action_title: 'Apply for listing',
        action_link: ''
    }
];

function WorkWithUs(){
    return (
        <>
            <Header />

            <section className='data-visualisation-section pt-9 pb-10.5'>
                <div className='container mx-auto max-w-xl'>
                    <h3 className='section-title pb-5 text-xxx-large-f font-brand-bold font-semibold text-white text-center'>The most Advanced DataVisualisation Suite</h3>
                    <p className='section-description text-2xl font-normal text-secondary-color mb-21 text-center'>
                        Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet <br /> ullamco dolor proident.
                    </p>
                    <div className='flex flex-wrap mx-[-45px]'>
                        {DATA_VISUALISATION_LIST.map((item, idx) => (
                            <DataVisualisationItem { ...item } key={ idx } />
                        ))}
                    </div>
                </div>
            </section>
                            
            <div className='main-bg block w-full h-full top-0 bg-main-bg bg-cover absolute z-[-2]'></div>

            <Footer />
        </>
    )
}

export default WorkWithUs