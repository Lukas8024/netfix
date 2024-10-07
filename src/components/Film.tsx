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
