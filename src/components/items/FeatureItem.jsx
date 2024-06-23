const FeatureItem = ({ text, icon, desc }) => {
    return (
        <div className='feature-item rounded-xl px-8.5 w-1/2'>
            <div className='feature-item__content bg-gradient-feature-item h-full relative rounded-xl p-9 flex flex-col gap-4.3 items-start after:top-m-1 after:bottom-m-1 after:left-m-1 after:right-m-1 after:rounded-xl after:bg-gradient-item-border after:z-[-1] after:absolute'>
                <img src={ icon } className='icon' />
                <h3 className='font-brand-bold font-bold text-xx-medium text-white'>{ text }</h3>
                <p className='font-brand-medium font-medium text-base tracking-tighter text-secondary-color'>{ desc }</p>
            </div>
        </div>
    )
}

export default FeatureItem