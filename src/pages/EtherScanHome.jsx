import EthereumIcon from '../assets/ethereum-icon.svg'
import SolanaIcon from '../assets/solana-icon.svg'
import CosmosIcon from '../assets/cosmos-icon.svg'

import EllipseIcon01 from '../assets/ellipse/01.png'
import EllipseIcon02 from '../assets/ellipse/02.png'
import EllipseIcon03 from '../assets/ellipse/03.png'
import EllipseIcon04 from '../assets/ellipse/04.png'
import EllipseIcon05 from '../assets/ellipse/05.png'

import SearchIcon from '../assets/search-icon.svg';

import TokenIcon01 from '../assets/tokens/01.png';
import TokenIcon02 from '../assets/tokens/02.png';

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import BlockchainButton from '../components/buttons/BlockchainButton'
import DefaultButton from '../components/buttons/DefaultButton'
import FeaturedTokenItem from '../components/items/FeaturedTokenItem'
import TokenList from '../components/items/TokenList'

const BLOCKCHAIN_BUTTON_LIST = [
    { 
        text: 'Ethereum Inspector', 
        icon: EthereumIcon, 
        url: '' 
    },
    { 
        text: 'Solana Inspector Inspector', 
        icon: SolanaIcon, 
        url: '' 
    },
    { 
        text: 'Cosmos Inspector', 
        icon: CosmosIcon, 
        url: '' 
    }
];

const ELLIPSE_LIST = [ 
    { 
        text: 'Moonbirds', 
        icon: EllipseIcon01 
    },
    { 
        text: 'Magic Internet Money', 
        icon: EllipseIcon02 
    },
    { 
        text: 'UniCrypt', 
        icon: EllipseIcon03 
    },
    { 
        text: 'EverRise', 
        icon: EllipseIcon04 
    },
    { 
        text: 'Azuki', 
        icon: EllipseIcon05 
    }
];

const TOKEN_LIST_GROUP = [
    { 
        text: 'Most Visited', 
        token_list: [
            {
                num: '1.',
                title: 'Moobirds',
                icon: TokenIcon01
            }, 
            {
                num: '1.',
                title: 'Moobirds',
                icon: TokenIcon01
            },
            {
                num: '1.',
                title: 'Moobirds',
                icon: TokenIcon01
            },
            {
                num: '1.',
                title: 'Moobirds',
                icon: TokenIcon01
            },
            {
                num: '1.',
                title: 'Moobirds',
                icon: TokenIcon01
            }
        ]            
    },
    { 
        text: 'Recently Listed', 
        token_list: [
            {
                num: '1.',
                title: 'Moobirds',
                icon: TokenIcon02
            }, 
            {
                num: '1.',
                title: 'Moobirds',
                icon: TokenIcon02
            },
            {
                num: '1.',
                title: 'Moobirds',
                icon: TokenIcon02
            },
            {
                num: '1.',
                title: 'Moobirds',
                icon: TokenIcon02
            },
            {
                num: '1.',
                title: 'Moobirds',
                icon: TokenIcon02
            }
        ]            
    } 
];

function EtherScanHome(){
    return (
        <>
            <Header isApp={ true }></Header>

            <section className='blockchain-action-group-section pt-[40px] pb-[80px]'>
                <div className='container mx-auto max-w-xl'>
                    <div className='blockchain-action-group flex justify-between items-center mt-[1px]'>
                        <div className='blockchain-action-group__l flex gap-[20px]'>                    
                            { BLOCKCHAIN_BUTTON_LIST.map((btnInfo, idx) => (
                                <BlockchainButton { ...btnInfo } key={ idx } />
                            ))}
                        </div>
                        <div className='blockchain-action-group__r'>
                            <DefaultButton className='btn-outline-md'>Get Listed</DefaultButton>
                        </div>
                    </div>
                </div>
            </section>

            <section className='featured-token-section'>
                <div className='container mx-auto max-w-xl'>
                    <div className='featured-token-group flex justify-between'>
                        {ELLIPSE_LIST.map((item, idx) => (
                            <FeaturedTokenItem { ...item } key={ idx } />
                        ))}
                    </div>
                </div>
            </section>

            <form action='#' className='search-form pt-10 pb-20'>
                <div className='container mx-auto max-w-xl px-[192px]'>
                    <div className='input-group relative'>
                        <input type='text' className='form-control text-base tracking-x-tightest py-3.5 px-6 w-full text-fifth-color font-normal outline-0 rounded-3.5 bg-gradient-form-control-bg-color bg-background' placeholder='Search by name, address, symbol' />
                        <span className='icon block top-0 right-0 rounded-tr-3.5 rounded-br-3.5 bg-gradient-form-control-bg-color bg-background py-3.5 pl-4.6 pr-6.55 absolute'>
                            <img src={ SearchIcon } alt='' />
                        </span>
                    </div>
                </div>
            </form>

            <section className='token-list-group-section'>
                <div className='container mx-auto max-w-xl'>
                    <div className='flex gap-10 mb-10'>
                        {TOKEN_LIST_GROUP.map((item, idx) => (
                            <TokenList { ...item } key={ idx } />
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <DefaultButton className='btn-outline-md' to='/all_tokens'>View all listed tokens</DefaultButton>
                    </div>
                </div>
            </section>
            
            <div className='main-bg block w-full h-full top-0 bg-main-bg bg-cover absolute z-[-2]'></div>

            <Footer></Footer>
        </>
    )
}

export default EtherScanHome