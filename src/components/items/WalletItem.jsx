import { Link } from "react-router-dom"

const WalletItem = ({ icon, text, desc }) => {
    return (
        <Link className='wallet-item py-[23px] pl-[32px] pr-8.6 rounded-3.5 bg-brand-1100 hover:bg-brand-950 cursor-pointer relative after:bg-gradient-primary after:bg-origin-border after:top-m-1 after:bottom-m-1 after:left-m-1 after:right-m-1 after:rounded-xl after:border after:border-transparent after:rounded-3.5 after:z-[-1] after:absolute webkit-mask backdrop-blur-lg' to='/ether_scan_home'>
            <div className='flex gap-11'>
                <img src={ icon } alt='' className='icon' />
                <div className='flex flex-col gap-1.2'>
                    <h2 className='font-brand-bold font-bold text-xs-large text-white'>{ text }</h2>
                    <p className='font-medium text-xx-small tracking-tightest text-white'>{ desc }</p>
                </div>
            </div>
        </Link>
    )
}

export default WalletItem
