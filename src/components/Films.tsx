import { useState } from 'react'

import { DUMMY_FILMS } from '../dummy-video.ts'
import Film from './Film'
import Modal from './Modal.tsx'

const initialSelectedFilm = {
	id: 0,
	image: '',
	title: '',
	description: '',
}

export default function Films() {
	const [selectedFilm, setSelectedFilm] = useState(initialSelectedFilm)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = (film: any) => {
		console.log(selectedFilm)

		setSelectedFilm(film)
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
				<ul className='films'>
					{DUMMY_FILMS.map(film => (
						<li key={film.id} onClick={() => openModal(film)}>
							<Film {...film} />
							{/* <button onClick={() => openModal(film)}>More...</button> */}
						</li>
					))}
				</ul>

				{isModalOpen ? (
					<Modal onClose={closeModal} isOpen={isModalOpen}>
						<Film {...selectedFilm} />
						<p>{selectedFilm.description}</p>
					</Modal>
				) : null}
			</section>
		</>
	)
}
