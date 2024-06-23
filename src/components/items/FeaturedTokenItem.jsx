import { Link } from "react-router-dom"

import WebsiteIcon from '../../assets/website-icon.svg'
import EtherscanIcon from '../../assets/etherscan-icon.svg'
import StarIcon from '../../assets/star-icon.svg'

const FeaturedTokenItem = ({ text, icon }) => {
    return <Link className='featured-token-item min-h-xbl py-5 rounded-xl bg-brand-1100 hover:bg-transparent cursor-pointer text-center relative after:bg-gradient-item-border after:bg-origin-border after:top-m-1 after:bottom-m-1 after:left-m-1 after:right-m-1 after:rounded-xl after:border after:border-transparent after:rounded-xl after:z-[-1] after:absolute webkit-mask backdrop-blur-lg' to='/my_wallet'>
        <img src={ icon } className='icon px-16.3 min-w-token-item-size min-h-token-item-size hover:animate-rotate-y
hover:animate-once hover:animate-duration-1000 hover:animate-delay-0 hover:animate-ease-linear' alt='' />
        <h5 className='title font-medium text-base tracking-tighter text-white mt-1.7 mb-1'>{ text } </h5>
        <ul className='options flex gap-1.5 justify-center'>
            <li>
                <Link className='option-item'><img src={ WebsiteIcon } alt='' /></Link>
            </li>
            <li>
                <Link className='option-item'><img src={ EtherscanIcon } alt='' /></Link>
            </li>
            <li>
                <Link className='option-item'><img src={ StarIcon } alt='' /></Link>
            </li>
        </ul>
    </Link>
}

export default FeaturedTokenItem