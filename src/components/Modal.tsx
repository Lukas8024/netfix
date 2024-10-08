import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ children, onClose, isOpen }: any) {
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

	if (!isOpen) {
		return null
	}

	return createPortal(
		<div className='overlay' onClick={onClose}>
			<dialog className='modal'>
				<div className='modal-content'>
					{children}
					<button onClick={onClose}>Close</button>
				</div>
			</dialog>
		</div>,
		document.getElementById('modal')!
	)
}
