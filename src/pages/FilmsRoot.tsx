import { Outlet } from 'react-router-dom'

import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'

function FilmsRoot() {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
            <Footer />
		</>
	)
}

export default FilmsRoot
