import TopFive from '../components/TopFive'
import MyFavorites from '../components/MyFavorites'

export default function MyFavoritesPage() {
	window.scrollTo(0, 0)
	
	return (
		<>
			<MyFavorites />
			<TopFive />
		</>
	)
}
