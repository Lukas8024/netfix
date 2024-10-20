import { useState } from 'react'

import { DUMMY_FILMS } from '../dummy-video.ts'
import Film from './Film'
import Modal from './Modal.tsx'
import MyFavorites from './MyFavorites.tsx'

const initialSelectedFilm = {
	id: 0,
	image: '',
	title: '',
	description: '',
}

type Film = {
	id: number
	image: string
	title: string
	description: string
}

export default function Films() {
	const [favoriteFilms, setFavoriteFilms] = useState<Film[]>([])
	const [selectedFilm, setSelectedFilm] = useState(initialSelectedFilm)
	const [isModalOpen, setIsModalOpen] = useState(false)

	let newFilm = selectedFilm

	function addFavoritesHandler() {
		if (favoriteFilms.some(favFilm => favFilm.id === newFilm.id)) {
			console.log('Istnieje w fav')
		} else {
			console.log('Nie istnieje w fav')
			setFavoriteFilms(prevfavoritefilms => [newFilm, ...prevfavoritefilms])
			console.log(favoriteFilms)
		}
	}

	const openModal = (filmId: any) => {
		// console.log(selectedFilm)

		setSelectedFilm(filmId)
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setSelectedFilm(initialSelectedFilm)
		setIsModalOpen(false)
	}

	return (
		<>
			<section id='films'>
				<h2>List of Films</h2>
				<p>A library of movies and series in your home and beyond.</p>
				<ul className='films'>
					{DUMMY_FILMS.map(film => (
						<li key={film.id} onClick={() => openModal(film)}>
							<Film {...film} />
							{/* <button onClick={() => openModal(film)}>More...</button> */}
						</li>
					))}
				</ul>

				{isModalOpen ? (
					<Modal onClose={closeModal} isOpen={isModalOpen} addFavorites={addFavoritesHandler}>
						<Film {...selectedFilm} />
						<p>{selectedFilm.description}</p>
					</Modal>
				) : null}
			</section>

			<MyFavorites favoriteFilms={favoriteFilms} />

		</>
	)
}
