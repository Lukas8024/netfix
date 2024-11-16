import { useContext } from 'react'

import Film from './Film'
import FavFilmContext from '../store/films-context'

type Film = {
	id: number
	image: string
	title: string
	description: string
}

export default function MyFavorites() {
	const { favoriteFilms, isFavActive, deleteFavorite } = useContext(FavFilmContext)


	return (
		<section id='myfavorites'>
			<h2>Favorites Films</h2>
			{isFavActive ? <p>My selected film summaries.</p> : <p>Add favorites Films.</p>}

			<ul className=' myfavorites'>
				{favoriteFilms.map(favoriteFilms => (
					<li className='myfavorites-items' key={favoriteFilms.id}>
						<Film {...favoriteFilms} />
						<p>{favoriteFilms.description}</p>
						<button onClick={() => deleteFavorite(favoriteFilms)}>Remove Favorite</button>
					</li>
				))}
			</ul>
		</section>
	)
}
