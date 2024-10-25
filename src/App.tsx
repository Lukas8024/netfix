import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import FilmsPage from './pages/FilmsPage'
import WelcomePage from './pages/WelcomePage'
import FilmsRoot from './pages/FilmsRoot'
import MyFavorites from './pages/MyFavoritesPage'
import About from './pages/AboutPage'
import { FavFilmsContextProvider } from './store/films-context'

// const router = createBrowserRouter([
//   {path: '/', element: <WelcomePage />},
//   {path: '/films', element: <FilmsPage />},
// ])

// function App() {
// 	return <RouterProvider router={router} />
// }

export default function App() {
	return (
		<FavFilmsContextProvider>
			<Router>
				<Routes>
					<Route path='/' element={<WelcomePage />} />
					<Route path='/films/' element={<FilmsRoot />}>
						<Route index element={<FilmsPage />} />
						<Route path='favorites' element={<MyFavorites />} />
						<Route path='about' element={<About />} />
					</Route>
				</Routes>
			</Router>
		</FavFilmsContextProvider>
	)
}
