import Dot from '../../assets/dot.svg'

const RoadmapItem = ({ label , title, text, desc, desc_list }) => {
    return (
        <div className='roadmap-item ml-26 pl-13 border-r-[none] relative last:after:bg-none after:bg-dot-line-bg after:w-px after:h-line-height after:left-0 after:top-4 after:absolute'>
            <div className='relative'>
                <h3 className='pb-7.5 font-brand-bold font-bold text-xs-large text-brand-100'>{ title } <img src={ Dot } className='absolute top-3 left-m-16.2 z-[2]' /></h3>                        
                <div className='info top-0 left-m-46.3 absolute'>
                    <div className='title text-x-medium-s font-normal text-white'>{ label }</div>
                </div>
                <div className='content pl-24 pr-[192px] py-6 bg-gradient-item-blur-bg rounded-lg relative after:bg-gradient-item-blur-border-bg  after:bg-origin-border after:top-m-2 after:bottom-m-2 after:left-m-2 after:right-m-2 after:rounded-sm	after:border-2 after:border-transparent after:rounded-xl after:z-[-1] after:absolute webkit-mask backdrop-blur-lg'>
                    <h4 className='font-brand-bold font-bold text-xx-medium text-tertiary-color mb-6.3'>{ text }</h4>                    
                    <p className='font-medium text-sm tracking-tightest text-brand-50'>{ desc }</p> 
                    {desc_list && 
                        <ul className='desc-list text-sm font-bold tracking-tightest text-brand-50 ml-4.5 list-disc'>
                            {desc_list.map((item, idx) => (
                                <li key={ idx }>{ item }</li>
                            ))}
                        </ul>                   
                    }
                </div>
            </div>
        </div>
    )
}

export default RoadmapItem