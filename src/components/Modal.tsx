import { createPortal } from 'react-dom'

export default function Modal({ children, onClose }: any) {
	return createPortal(
		<dialog className='modal'>
			<div className='modal-content'>
				{children}
				<button onClick={onClose}>Close</button>
			</div>
		</dialog>,
		document.getElementById('modal')!
	)
}
