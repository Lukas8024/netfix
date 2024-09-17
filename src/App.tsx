import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import FilmsPage from './pages/FilmsPage'
import WelcomePage from './pages/WelcomePage'

const router = createBrowserRouter([
  {path: '/', element: <WelcomePage />},
  {path: '/films', element: <FilmsPage />},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
