import { NavLink } from "react-router-dom"

// import linkedinIcon from "../assets/linkedin-icon.svg"
import githubIcon from "../assets/github-icon.svg"

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<div className='footer'>
			<p>
				&copy; <span className='footer-year'>{year}</span> by lukas_8024
			</p>
			{/* <NavLink to='https://www.linkedin.com/feed/'>
				<img src={linkedinIcon} alt='Linked icon' />
			</NavLink> */}
			<NavLink to='https://github.com/Lukas8024/netfix'>
				<img src={githubIcon} alt='Github icon' />
			</NavLink>
		</div>
	)
}
