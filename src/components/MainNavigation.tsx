import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logoN.svg'
import burgerIcon from '../assets/burgerIcon.svg'
import burgerClose from '../assets/burgerClose.svg'

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

	function handleCloseModal() {
		setIsOpen(false)
	}

	return (
		<nav className='nav'>
			<NavLink to='/'>
				<img src={logo} alt='Logo Netfix' />
			</NavLink>
			<button className='hamburger' onClick={toggleNavigation}>
				{!isOpen ? <img src={burgerIcon} alt='menu button' /> : <img src={burgerClose} alt='menu close' />}
				{/* <img src={burgerIcon} alt='menu button' /> */}
			</button>
			<ul className={`list ${isOpen ? 'active' : ''}`}>
				<li>
					<NavLink to='/' onClick={handleCloseModal}>
						Start
					</NavLink>
				</li>
				<li>
					<NavLink to='/films' onClick={handleCloseModal}>
						Films
					</NavLink>
				</li>
				<li>
					<NavLink to='/films/favorites' onClick={handleCloseModal}>
						My Favorites
					</NavLink>
				</li>
				<li>
					<NavLink to='/films/about' onClick={handleCloseModal}>
						About
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
