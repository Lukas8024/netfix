import { useState } from 'react'

import { DUMMY_FILMS } from '../dummy-video.ts'
import Film from './Film'
import Modal from './Modal.tsx'
import MyFavorites from './MyFavorites.tsx'

import { AnimatePresence, motion } from 'motion/react'

export type Film = {
	id: number
	image: string
	title: string
	description: string
}

const initialSelectedFilm = {
	id: 0,
	image: '',
	title: '',
	description: '',
}

export default function Films() {
	const [selectedFilm, setSelectedFilm] = useState(initialSelectedFilm)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = (filmId: Film) => {
		setSelectedFilm(filmId)
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<section id='films'>
				<h2>List of Films</h2>
				<p>A library of movies and series in your home and beyond.</p>
				<ul className='films'>
					{DUMMY_FILMS.map(film => (
						<motion.li whileHover={{ scale: 1.1 }} key={film.id} onClick={() => openModal(film)}>
							<Film {...film} />
						</motion.li>
					))}
				</ul>
				<AnimatePresence>
					{isModalOpen ? <Modal onClose={closeModal} isOpen={isModalOpen} film={selectedFilm} /> : null}
				</AnimatePresence>
			</section>

			<MyFavorites />
		</>
	)
}
