const StageItem = ({ text, icon, desc }) => {
    return (
        <div className='stage-item rounded-xl w-2/6	bg-gradient-stage-item-bg min-h-300 relative after:bg-gradient-stage-item-border after:top-m-2 after:bottom-m-2 after:left-m-2 after:right-m-2 after:rounded-xl after:z-[-1] after:absolute'>
            <div className='stage-item__content rounded-xl px-6.6 pt-12.7 flex flex-col gap-4.3 items-center'>
                <img src={ icon } className='icon' />
                <h3 className='font-brand-bold font-bold text-xx-medium text-brand-200'>{ text }</h3>
                <p className='font-brand-medium text-sm font-medium tracking-tightest text-tertiary-color'>{ desc }</p>
            </div>
        </div>
    )
}

export default StageItem