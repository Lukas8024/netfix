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
	addFavorite: (selectedFilmId: Film) => void
	deleteFavorite: (selectedFilmId: Film) => void
	toogleFav: (selectedFilmId: Film) => void
	isFavActive: boolean
	isFavoriteStatus: boolean | null
}

const FavFilmContext = createContext<FilmsContextObj>({
	favoriteFilms: [],
	addFavorite: () => {},
	deleteFavorite: () => {},
	toogleFav: () => {},
	isFavActive: false,
	isFavoriteStatus: false,
})

let status: string = ''

export const FavFilmsContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [favoriteFilms, setFavoriteFilms] = useState<Film[]>([])
	const [isFavoriteStatus, setIsFavoriteStatus] = useState<boolean | null>(null)

	let isFavActive = false
	if (favoriteFilms.length !== 0) {
		isFavActive = true
	}

	function addFavoritesHandler(selectedFilmId: Film) {
		setFavoriteFilms(prevfavoritefilms => [selectedFilmId, ...prevfavoritefilms])

		setIsFavoriteStatus(true)
	}

	function deleteFavHandler(selectedFilmId: Film) {
		setFavoriteFilms(prevfavoritesfilm => prevfavoritesfilm.filter(favoriteFilms => favoriteFilms !== selectedFilmId))

		setIsFavoriteStatus(false)
	}

	function toogleFavHandler(selectedFilmId: Film) {

		if (favoriteFilms.some(favFilm => favFilm.id === selectedFilmId.id)) {
			status = 'FilmIsFav'
		} else {
			status = 'NotIsFav'
		}

		if (status === 'FilmIsFav') {
			deleteFavHandler(selectedFilmId)
		}

		if (status !== 'FilmIsFav') {
			addFavoritesHandler(selectedFilmId)
		}

		return setIsFavoriteStatus(null)
	}

	const FilmContext = {
		favoriteFilms,
		addFavorite: addFavoritesHandler,
		deleteFavorite: deleteFavHandler,
		toogleFav: toogleFavHandler,
		isFavActive,
		isFavoriteStatus,
	}

	return <FavFilmContext.Provider value={FilmContext}>{children}</FavFilmContext.Provider>
}

export default FavFilmContext
