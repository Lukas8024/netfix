import React, { createContext, useState } from 'react'

import { type Film } from '../components/Films' 

// type Film = {
// 	id: number
// 	image: string
// 	title: string
// 	description: string
// }

type FilmsContextObj = {
	favoriteFilms: Film[]
	// addFavorite: (selectedFilm: Film) => void
	deleteFavorite: (selectedFilm: Film) => void
	toggleFav: (selectedFilm: Film) => void
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

	function deleteFavHandler(selectedFilm: Film) {
		setFavoriteFilms(prevfavoritesfilm => prevfavoritesfilm.filter(favoriteFilms => favoriteFilms !== selectedFilm))
		setIsFavoriteStatus(false)
	}

	function toggleFavHandler(selectedFilm: Film) {
		const isFavorite = favoriteFilms.some(favFilm => favFilm.id === selectedFilm.id)

		if (isFavorite) {
			deleteFavHandler(selectedFilm)
			setIsFavoriteStatus(false)
		} else {
			setFavoriteFilms(prevfavotitefilms => [selectedFilm, ...prevfavotitefilms])
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
