export default function About() {
	return (
		<div id='about'>
			<div className='content'>
				<h2>About this page</h2>
				<p>
					My project "Netfix" is library films. This site is modeled after the popular “Netflix” site, however, it is
					just a library where you can read the synopsis of the selected movie, as well as add it to your favorites.
				</p>
				<h2>About my project</h2>
				<p>
					The “Netfix” project was written to practice what I learned about React + TypeScript, with less focus on
					styling. I use React Router in the project to maintain a static page. Instead of “createBrowserRouter”, I used
					“HashRouter”,among other things, to make it easier to host in “GitHub Pages”. In the “Top five” section, five
					movies from the library are drawn, which are stored in the browser's “local storage” to be visible on all
					subpages until the page is closed. In the “Films” sub-page, you will find all the films from the library and
					can add or remove them from “My favorites.” They are displayed in the lower section of “Films,” and on the
					sub-page “My favorites” where we can also delete them. This project is being developed all the time. In the
					future I would like to use the API and add a database of movies on the backend.
				</p>
			</div>
		</div>
	)
}
