import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export default function Welcome() {
	return (
		<>
			<header id='main-header'>
				<div className='hero-img'>
					<div className='shadow-img'></div>
				</div>
				<div className='header-content'>
					<h1>Netfix</h1>
					<h3>Library of films and series worth watching.</h3>
					<motion.button whileHover={{scale: 1.1}} transition={{ type: 'spring', stiffness: 500}} className='header-content-button'>
						<Link to='/films' className='link'>
							Get Started
						</Link>
					</motion.button>
				</div>
			</header>
		</>
	)
}
