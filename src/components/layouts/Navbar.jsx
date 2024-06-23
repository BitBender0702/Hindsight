import { useLocation } from "react-router-dom"

import NavItem from './NavItem'

const MENU_LIST = [
	{ 
		text: 'About us', 
		href: '/about_us', 
		before_text: 'About_us' 
	},
	{ 
		text: 'Work with Us', 
		href: '/work_with_us', 
		before_text: 'Work_with_us' 
	},
	{ 
		text: 'Go Premium', 
		href: '/premium', 
		before_text: 'Go_Premium' 
	},
	{ 
		text: 'Resources', 
		href: '/resources', 
		before_text: 'Resources',
		isDropDown: true
	},
];

const Navbar = (children) => {	
  const location = useLocation()

  return (
    <nav className='nav'>
		<ul className='flex justify-between gap-6 nav__menu-list'>
			{MENU_LIST.map((menu, idx) => (
				<li key={ idx }>
					<NavItem active={ location.pathname === menu.href } {...menu} />
				</li>
			))}
		</ul>
    </nav>
  );
};

export default Navbar