import React, { useContext, useEffect, useState } from 'react'
import FavFilmContext from '../store/films-context'

import { DUMMY_FILMS } from '../dummy-video'
import { motion } from 'motion/react'

import { type Film as FilmProps } from '../components/Films'

// type FilmProps = {
// 	id: number
// 	title: string
// 	image: string
// 	description: string
// }

export default function Film({ id, title, image }: FilmProps): React.ReactElement {
	const { favoriteFilms, toggleFav } = useContext(FavFilmContext)

	const [isFav, setIsFav] = useState(false)

	useEffect(() => {
		if (favoriteFilms.some(favFilm => favFilm.id === id)) {
			// console.log('add fav star')
			setIsFav(true)
		} else {
			// console.log('remove fav star')
			setIsFav(false)
		}
	}, [favoriteFilms])

	const handleToogleFav = (e: React.MouseEvent<SVGSVGElement>) => {
		e.stopPropagation()

		toggleFav(DUMMY_FILMS[id - 1])
	}

	return (
		<article className='film'>
			<div
				// variants={{
				// 	hidden: { opacity: 0, scale: 0.7 },
				// 	visible: { opacity: 1, scale: 1 },
				// }}
				// exit={{ opacity: 1, scale: 1 }}
				// // exit='visible'
				// transition={{ type: 'spring' }}
				className='film-image'
			>
				<img className='film-image' src={image} alt={title} />

				<motion.svg
					whileHover={{ scale: 1.3 }}
					onClick={handleToogleFav}
					className='star-fav'
					width='24'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 576 512'
					fill={isFav ? 'gold' : 'black'}
					stroke='white'
					strokeWidth='6'
				>
					<path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
				</motion.svg>
			</div>

			<div className='film-content'>
				<h3>{title}</h3>
			</div>
		</article>
	)
}
