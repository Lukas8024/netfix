import { Outlet } from 'react-router-dom'

import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'

function FilmsRoot() {
	return (
		<div id='main-root'>
			<div className='main-root'>
				<div className='shadow-root'>
					<MainNavigation />
					<main className='wrapper'>
						<Outlet />
					</main>
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default FilmsRoot
