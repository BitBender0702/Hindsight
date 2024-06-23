import React, { useState } from 'react';

import CheckIcon from '../assets/check-icon.svg'

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import MembershipItem from '../components/items/MembershipItem'

const MEMBERSHIP_DATA_LIST = [
    { 
        title: 'Individual', 
        desc: 'Upgrade to our Individual Plan for comprehensive token analysis.', 
        list: [
            'Unlimited Access', 
            'Advanced historical data analysis and comparison', 
            'Support'
        ],
        price_info: { 
            price: '$5', 
            title:'per month' 
        },
        sign_up_link: ''
    },
    { 
        title: 'Team', 
        desc: 'Elevate your token analysis with our Team Plan, designed for collaborative use.', 
        list: [
            'Unlimited Access', 
            'Advanced historical data analysis and comparison', 
            '5 Team Members', 
            'Support'
        ],
        price_info: { 
            price: '$20', 
            title:'per month' 
        },
        sign_up_link: ''
    }
];

function Premium(){
    const [toggleActive, setToggleActive] = useState(true);
    const handleChange = (e) => { 
        setToggleActive(!toggleActive);
    };

    return (
        <>
            <Header />

            <section className='membership-section pt-11.8 px-35 pb-31.5'>
                <div className='container mx-auto max-w-xl flex flex-col gap-10.5'>
                    <h3 className='section-title text-large font-brand-medium font-semibold text-white text-center'>Unlock Premium Membership</h3>
                    <p className='section-description text-medium text-secondary-color text-center px-19.5 text-center'>
                        Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.
                    </p>
                    <div className='toggle-action flex items-center justify-center gap-2.5'>
                        <label className={ `toggle-action__label font-medium text-base tracking-tighter ${toggleActive ? 'text-brand-50' : 'text-fourth-color' }` }>Monthy</label>
                        <div className='toggle-button'>                        
                            <input type='checkbox' id='switch' className='h-0 w-0 hidden invisible' onChange={ handleChange } />
                            <label for='switch' className='block w-xxs h-xxs rounded-xxl cursor-pointer indent-m-9999 h-8 bg-tertiary-color relative'>
                                <img src={ CheckIcon } className='icon top-1 left-1 min-w-3 min-h-xxs bg-btn-switch-circle-bg-color rounded-r-full rounded-l-full transition-all duration-300 py-1.7 px-1.3 absolute' />
                            </label>
                        </div>
                        <label className={ `toggle-action__label font-medium text-base tracking-tighter ${toggleActive ? 'text-fourth-color' : 'text-brand-50' }` }>Yearly</label>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        {MEMBERSHIP_DATA_LIST.map((item, idx) => (
                            <MembershipItem { ...item } key={ idx } />
                        ))}
                    </div>
                </div>
            </section>

            <div className='main-bg block w-full h-full top-0 bg-main-bg bg-cover absolute z-[-2]'></div>
            
            <Footer />
        </>
    )
}

export default Premium