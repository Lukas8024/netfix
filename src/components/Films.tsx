import { DUMMY_FILMS } from '../dummy-video.ts'
import Film from './Film'

export default function Films() {
	return (
		<section id='films'>
			<h2>List of Films</h2>
			<ul className='films'>
				{DUMMY_FILMS.map(film => (
					<li key={film.id}>
						<Film {...film} />
					</li>
				))}
			</ul>
		</section>
	)
}
