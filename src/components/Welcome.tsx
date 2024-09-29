import { Link } from 'react-router-dom'

export default function Welcome() {
	return (
		<>
			<header id='main-header'>
				{/* <img src={libraryFilms} alt='Hero Image' /> */}
				<div className='hero-img'>
					<div className='shadow-img'></div>
				</div>
				<div className='header-content'>
					<h1>Netfix</h1>
					<h3>Library of films and series worth watching.</h3>
					<Link to='/films' className='header-content-link'>
						Get Started
					</Link>
				</div>
			</header>
		</>
	)
}
