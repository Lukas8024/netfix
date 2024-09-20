import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import FilmsPage from './pages/FilmsPage'
import WelcomePage from './pages/WelcomePage'

// const router = createBrowserRouter([
//   {path: '/', element: <WelcomePage />},
//   {path: '/films', element: <FilmsPage />},
// ])

// function App() {
// 	return <RouterProvider router={router} />
// }

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<WelcomePage />} />
				<Route path='/about' element={<FilmsPage />} />
			</Routes>
		</Router>
	)
}

export default App
