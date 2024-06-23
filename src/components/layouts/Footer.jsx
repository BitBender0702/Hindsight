import { Link } from "react-router-dom"

import FooterLogo from '../../assets/app-logo.png'

import Instagram from '../../assets/icons/instagram.svg'
import Telegram from '../../assets/icons/telegram.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Discord from '../../assets/icons/discord.svg'


const ABOUT_LINK_LIST = [
    { 
        text: 'Work with us', 
        href: '/work_with_us' 
    },
    { 
        text: 'Support', 
        href: '/support' 
    },
    { 
        text: 'Go Premium', 
        href: '/premium' 
    },
    { 
        text: 'Partners', 
        href: '/partners' 
    },
    { 
        text: 'Careers', 
        href: '/careers' 
    }
];

const SUPPORTED_CHAINS_LINK_LIST = [
    { 
        text: 'Ethereum', 
        href: '/work_with_us' 
    },
    { 
        text: 'Solana', 
        href: '/support' 
    }
];  

const SOCIAL_LINK_LIST = [
    { 
        text: 'instagram', 
        icon: Instagram 
    },
    { 
        text: 'telegram', 
        icon: Telegram 
    },
    { 
        text: 'facebook', 
        icon: Facebook 
    },
    { 
        text: 'twitter', 
        icon: Twitter 
    },
    { 
        text: 'discord', 
        icon: Discord 
    }
];

export default function Footer(){
    return (
        <footer className='footer py-10'>
            <div className='container footer-inner mx-auto max-w-xl py-10 rounded-2xl bg-primary-color'>
                <div className='flex justify-between pb-12.5 px-10'>
                    <div className='footer-section flex flex-col'>
                        <Link to='#' className='footer-logo'>
                            <img src={ FooterLogo } alt='footer logo' />
                        </Link>
                        <p className='description text-base font-medium tracking-tighter text-footer-color mt-4 relative'>
                            Blockchain data visualization<br /> made easy.
                        </p>
                    </div>
                    <div className='footer-section'>
                        <h4 className='footer-section__title font-brand-bold font-bold text-xx-medium text-white mb-9'>About Us</h4>   
                        <ul className='footer-link__list flex flex-col gap-2.5'>
                            {ABOUT_LINK_LIST.map((link, idx) => (
                                <li key={ idx }>
                                    <Link to={ link.href } className='text-base font-medium tracking-tighter text-footer-color hover:text-brand-400'>{ link.text }</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h4 className='footer-section__title font-brand-bold font-bold text-xx-medium text-white mb-9'>Supported Chains</h4>   
                        <ul className='footer-link__list flex flex-col gap-2.5'>
                            {SUPPORTED_CHAINS_LINK_LIST.map((link, idx) => (
                                <li key={ idx }>
                                    <Link to={ link.href } className='text-base font-medium tracking-tighter text-footer-color hover:text-brand-400'>{ link.text }</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h4 className='footer-section__title font-brand-bold font-bold text-xx-medium text-white mb-9'>Connect With Us</h4>   
                        <ul className='footer-link__list flex justify-between gap-5'>
                            {SOCIAL_LINK_LIST.map((link, idx) => (
                                <li key={ idx }>
                                    <Link to={ link.href }>
                                        <img src={ link.icon } alt={ link.text } />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>      
                <div className='copyright text-center'>
                    <p className='text-base font-medium tracking-tighter text-footer-color'>
                        copyright ©2022 Hindsight, All rights reserved.
                    </p>
                </div>          
            </div>
        </footer>
    )
}