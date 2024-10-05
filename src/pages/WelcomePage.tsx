import Welcome from '../components/Welcome'
import TopFive from '../components/TopFive'
import Accordion from '../components/Accordion/Accordion'

export default function WelcomePage() {
	return (
		<>
			<Welcome />
			<main>
				<section>
					<TopFive />
				</section>
				<section id='faq'>
					<h2>FAQ</h2>
					<Accordion className='accordion'>
						<Accordion.Item className='accordion-item' id='what-netfix'>
							<Accordion.Title className='accordion-item-title'>What is this "Netfix"?</Accordion.Title>
							<Accordion.Content className='accordion-item-content'>
								<article>
									<p>Netfix is library films.</p>
									<p>The site was created in the likeness of the popular “Netflix” platform.</p>
								</article>
							</Accordion.Content>
						</Accordion.Item>
						<Accordion.Item className='accordion-item' id='what-created'>
							<Accordion.Title className='accordion-item-title'>What it was created?</Accordion.Title>
							<Accordion.Content className='accordion-item-content'>
								<article>
									<p>This page was written to practice what I learned about React + TypeScript.</p>
									<p>
										I use React Router in the project, but in order to keep the page static instead of “createBrowserRouter”. I used “HashRouter” among other things so that I could host it in “GitHub Pages”.
									</p>
								</article>
							</Accordion.Content>
						</Accordion.Item>
						<Accordion.Item className='accordion-item' id='how-works'>
							<Accordion.Title className='accordion-item-title'>How netfix works?</Accordion.Title>
							<Accordion.Content className='accordion-item-content'>
								<article>
									<p>
										The front page features a logo with a get start button that takes us to another subpage with a
										library of videos.
									</p>
									<p>The top5 section draws 5 movies from the entire library.</p>
									<p>Netfix uses a fictitious database of movies written imperatively.</p>
								</article>
							</Accordion.Content>
						</Accordion.Item>
						<Accordion.Item className='accordion-item' id='future'>
							<Accordion.Title className='accordion-item-title'>The future of the website.</Accordion.Title>
							<Accordion.Content className='accordion-item-content'>
								<article>
									<p>In the future, I would like to use the API and add a movie database in the backend.</p>
								</article>
							</Accordion.Content>
						</Accordion.Item>
					</Accordion>
				</section>
			</main>
		</>
	)
}
