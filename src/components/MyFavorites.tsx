import { useContext } from 'react'

import Film from './Film'
import FavFilmContext from '../store/films-context'

import { motion } from 'motion/react'

export default function MyFavorites() {
	const { favoriteFilms, isFavActive, deleteFavorite } = useContext(FavFilmContext)

	return (
		<section id='myfavorites'>
			<h2>Favorites Films</h2>
			{isFavActive ? <p>My selected film summaries.</p> : <p>Add favorites films.</p>}

			<ul className=' myfavorites'>
				{favoriteFilms.map(favoriteFilms => (
					<li className='myfavorites-items' key={favoriteFilms.id}>
						<Film {...favoriteFilms} />
						<p className='content'>{favoriteFilms.description}</p>
						<motion.button whileHover={{ scale: 1.1 }} onClick={() => deleteFavorite(favoriteFilms)}>Remove Favorite</motion.button>
					</li>
				))}
			</ul>
		</section>
	)
}
