import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logoN.svg'
import burgerIcon from '../assets/burgerIcon.svg'
import burgerClose from '../assets/burgerClose.svg'

import { motion } from 'motion/react'
import { spring } from 'motion'

export default function MainNavigation() {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	function toggleNavigation() {
		setIsOpen(!isOpen)
	}

	function handleCloseNavigation() {
		setIsOpen(false)
	}

	return (
		<nav className='nav'>
			<NavLink to='/'>
				<img src={logo} alt='Logo Netfix' />
			</NavLink>
			<motion.button
				whileTap={{ rotate: 180 }}
				transition={{ type: spring }}
				className='hamburger'
				onClick={toggleNavigation}
			>
				{!isOpen ? <img src={burgerIcon} alt='menu button' /> : <img src={burgerClose} alt='menu close' />}
			</motion.button>
			<motion.ul
				className={`list ${isOpen ? 'open' : ''}`}
				animate={isOpen ? { scale: 1.2 } : { scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<li>
					<NavLink to='/' onClick={handleCloseNavigation}>
						Start
					</NavLink>
				</li>
				<li>
					<NavLink to='/films' end onClick={handleCloseNavigation}>
						Films
					</NavLink>
				</li>
				<li>
					<NavLink to='/films/favorites' onClick={handleCloseNavigation}>
						My Favorites
					</NavLink>
				</li>
				<li>
					<NavLink to='/films/about' onClick={handleCloseNavigation}>
						About
					</NavLink>
				</li>
			</motion.ul>
		</nav>
	)
}
