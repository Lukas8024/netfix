import Film from './Film'

type Film = {
	id: number
	image: string
	title: string
	description: string
}

interface ChildComponentsProps {
	favoriteFilms: Film[]
}

export default function MyFavorites({ favoriteFilms }: ChildComponentsProps) {
	return (
		<section id='films'>
			<h2>Favorites Films</h2>
			<p>My add favorites Films.</p>
			<ul className='films'>
				{favoriteFilms.map(favoriteFilms => (
					<li key={favoriteFilms.id}>
						<Film {...favoriteFilms} />
					</li>
				))}
			</ul>
		</section>
	)
}
