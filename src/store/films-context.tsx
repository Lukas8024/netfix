import React, { createContext, useState } from 'react'

import { type Film } from '../components/Films' 

type FilmsContextObj = {
	favoriteFilms: Film[]
	deleteFavorite: (selectedFilm: Film) => void
	toggleFav: (selectedFilm: Film) => void
	isFavActive: boolean
	isFavoriteStatus: boolean | null
}

const FavFilmContext = createContext<FilmsContextObj>({
	favoriteFilms: [],
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
			setIsFavoriteStatus(true)
		}
	}

	const FilmContext = {
		favoriteFilms,
		deleteFavorite: deleteFavHandler,
		toggleFav: toggleFavHandler,
		isFavActive,
		isFavoriteStatus,
	}

	return <FavFilmContext.Provider value={FilmContext}>{children}</FavFilmContext.Provider>
}

export default FavFilmContext
