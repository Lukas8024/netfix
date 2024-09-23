import { DUMMY_FILMS } from '../dummy-video.ts'
import Film from './Film'
import MainNavigation from './MainNavigation.tsx'

export default function Films() {
	// const allFilms = DUMMY_FILMS.map(film => (
	// 	<li key={film.id}>
	// 		<Film {...film} />
	// 	</li>
	// ))

	// console.log(allFilms)

	return (
		<>
			<header>
				<MainNavigation />
			</header>

			<section id='films'>
				<h2>List of Films</h2>
				<ul className='films'>
					{DUMMY_FILMS.map(film => (
						<li key={film.id}>
							<Film {... film} />
						</li>
					))}				
					{/* {allFilms} */}
				</ul>
			</section>
		</>
	)
}
