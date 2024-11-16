import { useEffect, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import FavFilmContext from '../store/films-context'

export default function Modal({ children, onClose, isOpen, id }: any) {
	const [isFavorite, setIsFavorite] = useState<boolean>()

	const { favoriteFilms, isFavoriteStatus, toggleFav } = useContext(FavFilmContext)

	console.log(isFavoriteStatus)

	useEffect(() => {
		const isFavorite = favoriteFilms.some(favFilm => favFilm.id === id.id)

		if (isFavorite) {
			setIsFavorite(true)
		} else {
			setIsFavorite(false)
		}

		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen, isFavoriteStatus])

	if (!isOpen) {
		return null
	}

	return createPortal(
		<div className='overlay' onClick={onClose}>
			<dialog className='modal'>
				<div className='modal-content'>
					{children}
					{/* {!isFavorite ? (
						<button onClick={() => addFavorite(id)}>Add Favorites</button>
					) : (
						<button onClick={() => deleteFavorite(id)}>Remove Favorites</button>
					)} */}

					<button onClick={() => toggleFav(id)}>{!isFavorite ? 'Add Fav' : 'Remove Fav'}</button>

					{/* <button onClick={() => addFavorite(id)}>Add Favorites</button> */}
					<button onClick={onClose}>Close</button>
				</div>
			</dialog>
		</div>,
		document.getElementById('modal')!
	)
}
