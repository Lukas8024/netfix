import { useEffect } from 'react'
import { createPortal } from 'react-dom'
// import FavFilmContext from '../store/films-context'

import Film from './Film'

interface ModalProps {
	// children: ReactNode
	onClose: () => void
	isOpen: boolean
	film: Film
}
interface Film {
	id: number
	image: string
	title: string
	description: string
}

export default function Modal({ onClose, isOpen, film }: ModalProps) {
	// const [isFavorite, setIsFavorite] = useState<boolean | null>()

	// const { favoriteFilms, isFavoriteStatus, toggleFav } = useContext(FavFilmContext)

	// console.log(isFavoriteStatus)

	useEffect(() => {
		// const isFavorite = favoriteFilms.some(favFilm => favFilm.id === film.id)

		// if (isFavorite) {
		// 	setIsFavorite(true)
		// } else {
		// 	setIsFavorite(false)
		// }

		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		
		return () => {
			document.body.style.overflow = ''
			// setIsFavorite(null)
		}
	}, [isOpen])

	if (!isOpen) {
		return null
	}

	return createPortal(
		<div className='overlay' onClick={onClose}>
			<dialog className='modal'>
				<div className='modal-content'>

					<Film {...film} />
					<p>{film.description}</p>

					{/* <button onClick={() => toggleFav(film)}>{!isFavorite ? 'Add Fav' : 'Remove Fav'}</button> */}
					<button onClick={onClose}>Close</button>
				</div>
			</dialog>
		</div>,
		document.getElementById('modal')!
	)
}
