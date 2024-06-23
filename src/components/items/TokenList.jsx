import { Link } from 'react-router-dom'

import WebsiteIcon from '../../assets/website-icon.svg'
import EtherscanIcon from '../../assets/etherscan-icon.svg'
import StarIcon from '../../assets/star-icon.svg'

const TokenList = ({ text, token_list }) => {
    return <div className='token-list-item w-1/2 px-12.5 py-15 bg-brand-1100 rounded-2xl relative after:bg-gradient-primary  after:bg-origin-border after:top-m-1 after:bottom-m-1 after:left-m-1 after:right-m-1 after:rounded-xl after:border after:border-transparent after:rounded-2xl after:z-[-1] after:absolute webkit-mask backdrop-blur-lg'>
        <h5 className='title pb-10 font-brand-medium font-bold text-xs-large text-white text-center'>{ text }</h5>
        <ul className='token-list flex flex-col gap-2.5'>
            { token_list.map((token, idx) => (
                <li key={ idx } className='flex justify-between items-center'>                    
                    <div className='token flex items-center'>
                        <span className='number block font-medium text-base tracking-tighter text-secondary-color'>{ token.num }</span>
                        <img src={ token.icon } alt='' className='token__icon px-2.5' />
                        <h6 className='token__title font-medium text-base tracking-tighter'>{ token.title }</h6>
                    </div>
                    <ul className='options flex gap-1.5 justify-center'>
                        <li>
                            <Link className='option-item'>
                                <img src={ WebsiteIcon } alt='' />
                            </Link>
                        </li>
                        <li>
                            <Link className='option-item'>
                                <img src={ EtherscanIcon } alt='' />
                            </Link>
                        </li>
                        <li>
                            <Link className='option-item'>
                                <img src={ StarIcon } alt='' />
                            </Link>
                        </li>
                    </ul>
                </li>
            )) }            
        </ul>
    </div>
}

export default TokenList