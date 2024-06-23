import ReactHtmlParser from "react-html-parser"

import DefaultButton from '../buttons/DefaultButton'

const Banner = ({ img, title, desc }) => {
    return (
        <section className='home-banner pt-25 pb-23.5'>
            <div className='container mx-auto max-w-xl flex justify-between items-center'>
                <div className='section-block flex flex-col	gap-8'>
                    <h1 className='text-xxx-large-s font-brand-bold font-bold text-white'>{ ReactHtmlParser(title) }</h1>
                    <p className='text-base font-medium text-white tracking-tighter'>
                        { ReactHtmlParser(desc) }
                    </p>
                    <div className='action-group flex gap-8'>
                        <DefaultButton className='btn-outline' to='./premium'>Go Premium</DefaultButton>
                        <DefaultButton className='btn-md' to='/ether_scan_home'>Launch App</DefaultButton>
                    </div>
                </div>
                <div className='sectioin-block'>
                    <img src={ img } alt='banner' />
                </div>
            </div>
        </section>   
    )
}

export default Banner