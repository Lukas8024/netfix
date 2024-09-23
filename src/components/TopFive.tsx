import { useState, useEffect } from 'react'

import { DUMMY_FILMS } from '../dummy-video'
import Film from './Film'

const TopFive = () => {
	const [selectedFilms, setSelectedFilms] = useState<
		{ id: number; image: string; title: string; description: string }[]
	>([])

	// Funkcja losująca pięć róznych obiektów
	const getRandomObjects = () => {
		const shuffled = [...DUMMY_FILMS].sort(() => 0.5 - Math.random()) // Tasowanie tablicy
		return shuffled.slice(0, 5) // Zwracamy pięć pierwszych obiektów
	}

	useEffect(() => {
		// Ustawiamy losowe obiekty przy pierwszym renderze
		const randomObjects = getRandomObjects()
		setSelectedFilms(randomObjects)
	}, [])

	return (
		<div id='films'>
			<h2>Top 5</h2>
			<ul className='films'>
				{selectedFilms.map(film => (
					<li key={film.id}>
                        <Film {... film}/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TopFive
