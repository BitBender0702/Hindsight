import DefaultButton from '../buttons/DefaultButton'

export default function WhatDoWe(){
    return (
        <section className='what-do-we pt-16.5 pb-34.5 bg-btn-default-color'>
            <div className='container max-w-xl mx-auto flex flex-col items-center gap-6.5 items-center'>
                <h2 className='font-brand-medium font-semibold text-large brand-50'>What is Hindsight?</h2>
                <p className='font-brand-medium text-base font-medium tracking-tighter text-secondary-color text-center'>
                    Welcome to Hindsight, your go-to destination for blockchain data analysis. Our platform is designed to help you gain<br />
                    insights into token trends, price movements, and network activity from different blockchain networks in a visually<br />
                    appealing and easy-to-understand format.
                </p>
                <DefaultButton className='btn-md' to='/roadmap'>View Detailed Roadmap</DefaultButton>
            </div>
        </section>
    )
}