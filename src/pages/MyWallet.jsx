import React, { useState } from 'react';

import WalletAvatarIcon from '../assets/ellipse/07.svg'
import DrondownIcon from '../assets/dropdown-icon.svg'

import Header from '../components/layouts/Header'
import Settings from '../components/items/Settings'

import BubbleIcon from '../assets/filters/bubble.svg'
import BubbleIconActive from '../assets/filters/bubble-active.svg'
import FilterIcon from '../assets/filters/filter.svg'
import FilterIconActive from '../assets/filters/filter-active.svg'
import HistoryIcon from '../assets/filters/history.svg'
import HistoryIconActive from '../assets/filters/history-active.svg'
import WalletIcon from '../assets/filters/wallet.svg'
import WalletIconActive from '../assets/filters/wallet-active.svg'

import CircleSymbol from '../assets/symbols/circle.svg'
import SquareSymbol from '../assets/symbols/square.svg'
import TriangleSymbol from '../assets/symbols/triangle.svg'

function MyWallet(){
    const [filterState, setFilterState] = useState('bubble')

    return (
        <div className='bg-transparent min-h-screen'>
            <Header isNavbar={ true } isLogin={ false } isApp={ true } isToken={ true } />            

            <section className='top py-4.3'>
                <div className='container mx-auto'>
                    <div className='flex justify-between gap-3.5'>
                        <div className='flex items-center gap-1.7 p-5 bg-brand-1100 rounded-md cursor-pointer font-brand-bold font-bold text-xx-medium text-white relative max-w-s-md'>
                            <img src={ WalletAvatarIcon } alt="" />
                            <span className='relative overflow-hidden text-ellipsis'>0xCe6e97Abcbb7Fb1d327fE954Db6Fd28CABEF014a</span>
                            <img src={ DrondownIcon } alt="" />
                        </div>                        
                        
                        <div className='flex flex-col py-5 px-6 bg-brand-1100 rounded-md text-center'>
                            <h3 className='font-medium text-xx-small tracking-tightest text-white mb-1 whitespace-nowrap'>Max Supply</h3>
                            <h4 className='font-normal text-xx-medium text-white'>$68,990,899</h4>
                        </div>
                        <div className='flex flex-col py-5 px-6 bg-brand-1100 rounded-md text-center'>
                            <h3 className='font-medium text-xx-small tracking-tightest text-white mb-1 whitespace-nowrap'> Current Supply</h3>
                            <h4 className='font-normal text-xx-medium text-white'>$8,990,899</h4>
                        </div>
                        <div className='flex flex-col py-5 px-6 bg-brand-1100 rounded-md text-center'>
                            <h3 className='font-medium text-xx-small tracking-tightest text-white mb-1 whitespace-nowrap'>Number of Holders</h3>
                            <h4 className='font-normal text-xx-medium text-white'>6,990</h4>
                        </div>
                        <div className='filter-group flex gap-5 p-5 bg-brand-1100 rounded-md'>
                            <div className={`filter-item border rounded-xl p-3 cursor-pointer border-filter-item-border-color hover:bg-brand-950 ${ filterState == 'bubble' ? 'bg-brand-950' : 'bg-transparent' }`} onClick={ () => setFilterState('bubble') }>
                                <img src={ filterState == 'bubble' ? BubbleIconActive : BubbleIcon } />
                            </div>
                            <div className={`filter-item border rounded-xl p-3 cursor-pointer border-filter-item-border-color hover:bg-brand-950 ${ filterState == 'filters' ? 'bg-brand-950' : 'bg-transparent' }`} onClick={ () => setFilterState('filters') }>
                                <img src={ filterState == 'filters' ? FilterIconActive : FilterIcon } />
                            </div>
                            <div className={`filter-item border rounded-xl p-3 cursor-pointer border-filter-item-border-color hover:bg-brand-950 ${ filterState == 'history' ? 'bg-brand-950' : 'bg-transparent' }`} onClick={ () => setFilterState('history') }>
                                <img src={ filterState == 'history' ? HistoryIconActive : HistoryIcon } />
                            </div>
                            <div className={`filter-item border rounded-xl p-3 cursor-pointer border-filter-item-border-color hover:bg-brand-950 ${ filterState == 'wallets' ? 'bg-brand-950' : 'bg-transparent' }`} onClick={ () => setFilterState('wallets') }>
                                <img src={ filterState == 'wallets' ? WalletIconActive : WalletIcon } />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mx-auto w-full absolute flex justify-center bg-app-background top-0 z-[-1] bg-main-bg bg-cover min-h-screen'>
            </div>
            <div className='container mx-auto'>
                <div className='absolute bottom-11 flex flex-col gap-33.5'>
                    <div className='flex flex-col p-5 rounded-md bg-brand-1100 gap-5 max-w-max'>
                        <div className='flex gap-2.5 items-center'>
                            <img src={ CircleSymbol } /> <span className='font-medium text-xx-small text-brand-150 tracking-tightest'>Individual</span>
                        </div>
                        <div className='flex gap-2.5 items-center'>
                            <img src={ SquareSymbol } /> <span className='font-medium text-xx-small text-brand-150 tracking-tightest'>ICO wallet</span>
                        </div>
                        <div className='flex gap-2.5 items-center'>
                            <img src={ TriangleSymbol } /> <span className='font-medium text-xx-small text-brand-150 tracking-tightest'>Exchange</span>
                        </div>
                    </div>
                    <Settings /> 
                </div>
            </div>
        </div>        
    )
}

export default MyWallet