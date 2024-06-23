import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from './pages/Home'
import Login from './pages/Login'
import Roadmap from './pages/Roadmap'
import WorkWithUs from './pages/WorkWithUs'
import Premium from './pages/Premium'
import EtherScanHome from './pages/EtherScanHome'
import AllTokens from './pages/AllTokens'
import MyWallet from './pages/MyWallet'
import ErrorPage from './pages/404'

import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>,
		errorElement: <ErrorPage/>    
	},
	{
		path: '/login',
		element: <Login></Login>,
		errorElement: <ErrorPage/>    
	},
	{
		path: '/roadmap',
		element: <Roadmap/>,
		errorElement: <ErrorPage/>
	},
	{
		path: '/work_with_us',
		element: <WorkWithUs />,
		errorElement: <ErrorPage/>
	},
	{
		path: '/premium',
		element: <Premium />,
		errorElement: <ErrorPage/>
	},
	{
		path: '/ether_scan_home',
		element: <EtherScanHome />,
		errorElement: <ErrorPage/>
	},
	{
		path: '/all_tokens',
		element: <AllTokens />,
		errorElement: <ErrorPage />
	},
	{
		path: '/my_wallet',
		element: <MyWallet />,
		errorElement: <ErrorPage />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={ router }/>
	</React.StrictMode>
)