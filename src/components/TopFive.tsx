import { useState, useEffect } from 'react'

import { DUMMY_FILMS } from '../dummy-video'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


const TopFive = () => {
	const [selectedFilms, setSelectedFilms] =
		useState<{ id: number; image: string; title: string; description: string }[]>(DUMMY_FILMS)

	// Funkcja losująca pięć róznych obiektów
	const getRandomObjects = () => {
		const shuffled = [...DUMMY_FILMS].sort(() => 0.5 - Math.random()) // Tasowanie tablicy
		return shuffled.slice(0, 5) // Zwracamy pięć pierwszych obiektów
	}

	useEffect(() => {
		// Ustawiamy losowe obiekty przy pierwszym renderze
		const randomObjects = getRandomObjects()
		// console.log(randomObjects)
		setSelectedFilms(randomObjects)
	}, [])

	return (
		<>
			<div id='topfilms'>
				<h2>Top 5</h2>
			</div>

			{/* <ul className='topfilms'>
						{selectedFilms.map(film => (
							<li key={film.id}>
								<img src={film.image} alt={film.title} />
							</li>
						))}
					</ul> */}

			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlay
				autoPlaySpeed={2000}
				centerMode={false}
				className="topfilms"
				containerClass="container-with-dots"
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite
				itemClass="items"
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={{
				  desktop: {
					breakpoint: {
					  max: 3000,
					  min: 1024
					},
					items: 3,
					partialVisibilityGutter: 40
				  },
				  mobile: {
					breakpoint: {
					  max: 464,
					  min: 0
					},
					items: 1,
					partialVisibilityGutter: 30
				  },
				  tablet: {
					breakpoint: {
					  max: 1024,
					  min: 464
					},
					items: 2,
					partialVisibilityGutter: 30
				  }
				}}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={false}
				sliderClass=""
				slidesToSlide={2}
				swipeable
			>
				<div>
					<img src={selectedFilms[0].image} />
				</div>
				<div>
					<img src={selectedFilms[1].image} />
				</div>
				<div>
					<img src={selectedFilms[2].image} />
				</div>
				<div>
					<img src={selectedFilms[3].image} />
				</div>
				<div>
					<img src={selectedFilms[4].image} />
				</div>
			</Carousel>
		</>
	)
}

export default TopFive
