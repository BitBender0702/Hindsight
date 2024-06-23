
import { Link } from "react-router-dom"

import LogoIcon from '../assets/login-logo.png'

import MetamaskIcon from '../assets/wallets/metamask.svg'
import CoinbaseIcon from '../assets/wallets/coinbase.svg'
import PhantomIcon from '../assets/wallets/phantom.svg'
import GoogleIcon from '../assets/wallets/google.svg'

import WalletItem from '../components/items/WalletItem'
import Message from '../components/sections/Message'

const WALLET_LIST = [
    { 
        text: 'MetaMask Wallet', 
        icon: MetamaskIcon, 
        desc: 'Connect using a browser plugin or mobile app. Best supported on Chrome or Firefox.' 
    },
    { 
        text: 'Coinbase Wallet', 
        icon: CoinbaseIcon, 
        desc: 'Connect using a browser plugin or mobile app. Best supported on Chrome or Firefox.' 
    },
    { 
        text: 'Phantom Wallet', 
        icon: PhantomIcon, 
        desc: 'Connect using a browser plugin or mobile app. Best supported on Chrome or Firefox.' 
    }
];

export default function Login(){
    return (
        <>
            <header className='login-header py-10 flex justify-center'>
                <div className='max-w-md mx-auto'>
                    <Link to='/'><img src={ LogoIcon } alt='' /></Link>
                </div>
            </header>

            <div className='login-content'>
                <div className='logo-inner max-w-md mx-auto flex flex-col gap-10'>
                    <div className='head'>
                        <h1 className='pb-4.3 font-brand-bold font-bold text-xx-large text-white text-center'>Login to Hindsight</h1>
                        <p className='text-xx-medium font-normal text-white text-center'>Connect with your web3 based wallet and sign-in</p>
                    </div>

                    <Message className='warning'>
                        Info: MetaMask is NOT detected in your browser, please enable<br />it and refresh this page
                    </Message>

                    <div className='wallet-list flex flex-col gap-4.3'>
                        {WALLET_LIST.map((item, idx) => (
                            <WalletItem { ...item } key={ idx } />
                        ))}
                    </div>

                    <span className='text-divider block w-full font-normal text-xx-medium text-white text-center'>or</span>
                    <WalletItem text='Google' icon={ GoogleIcon } desc='Sign in with your Google account.' />

                    <div className='footer mb-9'>
                        <p className='font-medium text-xx-small tracking-tightest text-white text-center'>By connecting your wallet and signing a message, you agree to Hindsight’s Term’s & Conditions and Privacy Policy</p>
                    </div>
                </div>
            </div>
            
            <div className='main-bg block w-full h-full top-0 bg-main-bg bg-cover absolute z-[-2]'></div>
        </>
    )
}
