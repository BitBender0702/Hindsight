import { Link } from "react-router-dom"

const BlockchainButton = ({ text, to, icon }) => {
	return <Link to={ to } className='btn-blockchain block gap-2 rounded-lg bg-brand-1100 relative hover:bg-gradient-primary after:bg-gradient-primary after:bg-origin-border after:top-m-1 after:bottom-m-1 after:left-m-1 after:right-m-1 after:rounded-xl after:border after:border-transparent after:rounded-xl after:z-[-1] after:absolute webkit-mask backdrop-blur-lg focus:bg-btn-switch-circle-bg-color'> 
		<span className='flex items-center gap-2 py-2.2 pl-1.7 pr-2.7 bg-gradient-primary bg-clip-text font-medium text-base tracking-tighter text-fill-transparent hover:bg-gradient-blockchain-button-color'>
			<img src={ icon } className='btn-icon' alt='' /> { text }
		</span>
	</Link>
}

export default BlockchainButton