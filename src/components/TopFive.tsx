import { useState, useEffect } from 'react'

import { DUMMY_FILMS } from '../dummy-video'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const TopFive = () => {
	const [selectedFilms, setSelectedFilms] =
		useState<{ id: number; image: string; title: string; description: string }[]>(DUMMY_FILMS)

	useEffect(() => {
		const getRandomObjects = () => {
			const shuffled = [...DUMMY_FILMS].sort(() => 0.5 - Math.random())
			return shuffled.slice(0, 5)
		}

		const randomObjects = getRandomObjects()

		if (localStorage.getItem('randomObjectsStorage')) {
			console.log('Obiekt istnieje w localStorage.')
			const initialDummyFilms = JSON.parse(localStorage.getItem('randomObjectsStorage')!)
			// console.log(initialDummyFilms);
			setSelectedFilms(initialDummyFilms)
		} else {
			console.log('Obiekt nie istnieje w localStorage.')
			localStorage.setItem('randomObjectsStorage', JSON.stringify(randomObjects))
			setSelectedFilms(randomObjects)
		}
	}, [])

	return (
		<>
			<div id='topfilms'>
				<h2>Top five</h2>
				<p>This week, five of your most loved and watched movies.</p>
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
				autoPlaySpeed={1500}
				centerMode={false}
				className='topfilms'
				containerClass='container-with-dots'
				dotListClass=''
				draggable
				focusOnSelect={false}
				infinite
				itemClass='topfilms-items'
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
							min: 1380,
						},
						items: 3,
						partialVisibilityGutter: 40,
					},
					mobile: {
						breakpoint: {
							max: 895,
							min: 0,
						},
						items: 1,
						partialVisibilityGutter: 30,
					},
					tablet: {
						breakpoint: {
							max: 1380,
							min: 895,
						},
						items: 2,
						partialVisibilityGutter: 30,
					},
				}}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={false}
				sliderClass=''
				slidesToSlide={1}
				swipeable
			>
				<div className='topfilms-item' data-text='1'>
					<img src={selectedFilms[0].image} />
				</div>
				<div className='topfilms-item' data-text='2'>
					<img src={selectedFilms[1].image} />
				</div>
				<div className='topfilms-item' data-text='3'>
					<img src={selectedFilms[2].image} />
				</div>
				<div className='topfilms-item' data-text='4'>
					<img src={selectedFilms[3].image} />
				</div>
				<div className='topfilms-item' data-text='5'>
					<img src={selectedFilms[4].image} />
				</div>
			</Carousel>
		</>
	)
}

export default TopFive
