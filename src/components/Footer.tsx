export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<div className='footer'>
			<p>
				&copy; <span className='footer-year'>{year}</span> by lukas_8024
			</p>
		</div>
	)
}