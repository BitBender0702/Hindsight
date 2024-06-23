import PlusIcon from '../../assets/plus.svg'

import DefaultButton from '../buttons/DefaultButton'

const DataVisualisationItem = ({ title, desc, icon_url, action_title, action_link }) => {
	return (
		<div className='data-visualisation-item rounded-xl w-6/12 px-11.7 pb-24.5'>
			<div className='data-visualisation__content rounded-xl flex gap-10 items-start'>                
				<div className='icon min-w-xl flex justify-center items-center h-md rounded-xl bg-gradient-item-blur-bg relative after:bg-gradient-item-blur-border-bg  after:bg-origin-border after:top-m-1 after:bottom-m-1 after:left-m-1 after:right-m-1 after:rounded-xl after:border after:border-transparent after:rounded-xl after:z-[-1] after:absolute webkit-mask backdrop-blur-lg'>
					<img src={ icon_url } className='max-w-max max-h-max relative' />
				</div>
				<div className='flex flex-col'>
					<h4 className='font-brand-medium font-bold text-xs-large text-brand-200 mb-4.3'>{ title }</h4>
					<p className='font-medium text-base mb-4.3'>{ desc }</p>
					<DefaultButton className='btn-outline-sm' to={ action_link }>
						<img src={ PlusIcon } className='icon-img pr-3' />{ action_title }
					</DefaultButton>
				</div>
			</div>
		</div>
	)
}

export default DataVisualisationItem