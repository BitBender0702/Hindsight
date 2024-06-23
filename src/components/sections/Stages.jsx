import Stage1 from '../../assets/roadmap/stage-1.svg'
import Stage2 from '../../assets/roadmap/stage-2.svg'
import Stage3 from '../../assets/roadmap/stage-3.svg'
import Stage4 from '../../assets/roadmap/stage-4.svg'

import StageItem from '../items/StageItem'
import DefaultButton from '../buttons/DefaultButton'

const STAGE_LIST = [
    { 
        text: 'Stage 1', 
        icon: Stage1, 
        desc: 'Proof of concept with test data from from ERC and NFT contract address'
    },
    { 
        text: 'Stage 2', 
        icon: Stage2, 
        desc: 'Improve product, Connect with DAOs, Marketing and fixing bugs as needed.'
    },
    { 
        text: 'Stage 3', 
        icon: Stage3, 
        desc: 'Add classifications for exchanges and other entities. Get feedback from participating communities and users'
    },
    { 
        text: 'Stage 4', 
        icon: Stage4, 
        desc: 'Full Launch for ETH and SOL networks. Making asked improvements and adding additional views'
    }
];

export default function Stages(){
    return (
        <section className='stage pt-19 pb-25 relative'>
            <div className='container mx-auto max-w-xl flex justify-center flex-col gap-16.3'>
                <h2 className='font-brand-bold font-bold text-large text-white text-center'>Roadmap</h2>
                <div className='flex gap-6.3 text-center pb-7.5'>
                    {STAGE_LIST.map((item, idx) => (
                        <StageItem { ...item } key={ idx } />
                    ))}
                </div>
                <div className='flex justify-center'>
                    <DefaultButton className='btn-lg' to='/roadmap'>View Detailed Roadmap</DefaultButton>
                </div>
            </div>
            <div className='stage-bg bg-brand-1100 top-0 w-full h-full z-[-2] absolute'></div>
        </section>
    )
}