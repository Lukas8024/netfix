import React, { createContext, useState } from 'react'
import Film from '../components/Film'

type Film = {
	id: number
	image: string
	title: string
	description: string
}

type FilmsContextObj = {
	favoriteFilms: Film[]
	// addFavorite: (selectedFilmId: Film) => void
	deleteFavorite: (selectedFilmId: Film) => void
	toggleFav: (selectedFilmId: Film) => void
	isFavActive: boolean
	isFavoriteStatus: boolean | null
}

const FavFilmContext = createContext<FilmsContextObj>({
	favoriteFilms: [],
	// addFavorite: () => {},
	deleteFavorite: () => {},
	toggleFav: () => {},
	isFavActive: false,
	isFavoriteStatus: null,
})

export const FavFilmsContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [favoriteFilms, setFavoriteFilms] = useState<Film[]>([])
	const [isFavoriteStatus, setIsFavoriteStatus] = useState<boolean | null>(null)

	let isFavActive = false
	if (favoriteFilms.length !== 0) {
		isFavActive = true
	}

	// function addFavoritesHandler(selectedFilmId: Film) {
	// 	const isFavorite = favoriteFilms.some(favFilm => favFilm.id === selectedFilmId.id)

	// 	if (!isFavorite) {
	// 		setIsFavoriteStatus(true)
	// 	} else {
	// 		alert('Film is Favorites!')
	// 	}
	// }
	
	function deleteFavHandler(selectedFilmId: Film) {
		setFavoriteFilms(prevfavoritesfilm => prevfavoritesfilm.filter(favoriteFilms => favoriteFilms !== selectedFilmId))
			setIsFavoriteStatus(false)
		}
		
		function toggleFavHandler(selectedFilmId: Film) {
			const isFavorite = favoriteFilms.some(favFilm => favFilm.id === selectedFilmId.id)
			
			if (isFavorite) {
				deleteFavHandler(selectedFilmId)
				setIsFavoriteStatus(false)
			} else {
			setFavoriteFilms(prevfavotitefilms => [selectedFilmId, ...prevfavotitefilms])
			// addFavoritesHandler(selectedFilmId)
			setIsFavoriteStatus(true)
		}

		// return setIsFavoriteStatus(null)
	}

	const FilmContext = {
		favoriteFilms,
		// addFavorite: addFavoritesHandler,
		deleteFavorite: deleteFavHandler,
		toggleFav: toggleFavHandler,
		isFavActive,
		isFavoriteStatus,
	}

	return <FavFilmContext.Provider value={FilmContext}>{children}</FavFilmContext.Provider>
}

export default FavFilmContext
