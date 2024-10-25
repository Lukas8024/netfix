import React, { createContext, useState } from 'react'

type Film = {
	id: number
	image: string
	title: string
	description: string
}

type FilmsContextObj = {
	favoriteFilms: Film[]
	addFavorite: (selectedFilmId: Film) => void
	deleteFavorite: (selectedFilmId: Film) => void
	isFavActive: boolean
}

const FavFilmContext = createContext<FilmsContextObj>({
	favoriteFilms: [],
	addFavorite: () => {},
	deleteFavorite: () => {},
	isFavActive: false,
})

export const FavFilmsContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [favoriteFilms, setFavoriteFilms] = useState<Film[]>([])
	let isFavActive = false

	if (favoriteFilms.length !== 0) {
		isFavActive = true
	}

	function addFavoritesHandler(selectedFilmId: Film) {
		let newFilm = selectedFilmId

		if (favoriteFilms.some(favFilm => favFilm.id === newFilm.id)) {
			console.log('Film istnieje w fav')
		} else {
			console.log('Film nie istnieje w fav')
			setFavoriteFilms(prevfavoritefilms => [newFilm, ...prevfavoritefilms])
		}
	}

	function deleteFavHandler(selectedFilmId: Film) {
		setFavoriteFilms(prevfavoritesfilm => prevfavoritesfilm.filter(favoriteFilms => favoriteFilms !== selectedFilmId))
	}

	const FilmContext = {
		favoriteFilms,
		addFavorite: addFavoritesHandler,
		deleteFavorite: deleteFavHandler,
		isFavActive,
	}

	return <FavFilmContext.Provider value={FilmContext}>{children}</FavFilmContext.Provider>
}

export default FavFilmContext
