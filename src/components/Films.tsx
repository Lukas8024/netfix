import { useState } from 'react'

import { DUMMY_FILMS } from '../dummy-video.ts'
import Film from './Film'
import Modal from './Modal.tsx'

export default function Films() {
	const [filmId, setFilmId] = useState({})
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = (film: {}) => {
		console.log(filmId)

		setFilmId(film)
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setFilmId({})
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
					<Modal onClose={closeModal}>
						<Film {...filmId} />
						<p>{filmId.description}</p>
					</Modal>
				) : null}
			</section>
		</>
	)
}
