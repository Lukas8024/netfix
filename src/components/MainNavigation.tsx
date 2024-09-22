import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logoN.svg'
import burgerIcon from '../assets/burgerIcon.svg'

export default function MainNavigation() {
	const [isOpen, setIsOpen] = useState(false)

	function toggleNavigation() {
        setIsOpen(!isOpen)
	}

	return (
		<nav className='nav'>
			<NavLink to='/'>
				<img src={logo} alt='Logo Netfix' />
			</NavLink>
			<button className='hamburger' onClick={toggleNavigation}>
				<img src={burgerIcon} alt='menu button' />
			</button>
			<ul className={`list ${isOpen ? 'active' : ''}`}>
				<li>
					<NavLink to='/'>Start</NavLink>
				</li>
				<li>
					<NavLink to='/films'>Films</NavLink>
				</li>
			</ul>
		</nav>
	)
}
