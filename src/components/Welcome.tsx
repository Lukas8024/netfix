import { Link } from 'react-router-dom'
// import libraryFilms from '../assets/library_films.jpg'
import TopFive from './TopFive'

// import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'

// // import rambo from '../assets/rambo_1.jpg'
// // import rambo2 from '../assets/rambo_2.jpg'

// const responsive = {
// 	superLargeDesktop: {
// 		// the naming can be any, depends on you.
// 		breakpoint: { max: 4000, min: 3000 },
// 		items: 5,
// 	},
// 	desktop: {
// 		breakpoint: { max: 3000, min: 1024 },
// 		items: 3,
// 	},
// 	tablet: {
// 		breakpoint: { max: 1024, min: 464 },
// 		items: 2,
// 	},
// 	mobile: {
// 		breakpoint: { max: 464, min: 0 },
// 		items: 1,
// 	},
// }

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
			<main>
				<section>
					<TopFive />
				</section>
			</main>
		</>
	)
}
