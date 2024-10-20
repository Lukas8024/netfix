<<<<<<< HEAD
import React from 'react'

const Film: React.FC<{ id: number; title: string; description: string; image: string }> = ({ title, image }) => {
	return (
		<article className='film'>
			<img src={image} alt={title} />
			<div className='film-content'>
				<h3>{title}</h3>
				{/* <p>{description}</p> */}
			</div>
		</article>
	)
}

export default Film
=======
import React from 'react'

const Film: React.FC<{ id: number; title: string; description: string; image: string }> = ({ title, image }) => {
	return (
		<article className='film'>
			<img src={image} alt={title} />
			<div className='film-content'>
				<h3>{title}</h3>
				{/* <p>{description}</p> */}
			</div>
		</article>
	)
}

export default Film
>>>>>>> e3a64e8b31b40d889e41e610c5de1e4df4acefc3
