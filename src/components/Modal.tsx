import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { motion } from 'motion/react'

import Film from './Film'

interface ModalProps {
	// children: ReactNode
	onClose: () => void
	isOpen: boolean
	film: Film
}
interface Film {
	id: number
	image: string
	title: string
	description: string
}

export default function Modal({ onClose, isOpen, film }: ModalProps) {
	const dialog = useRef<HTMLDialogElement | null>(null)

	useEffect(() => {
		if (isOpen && dialog.current) {
			dialog.current.showModal()
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
			<motion.dialog
				ref={dialog}
				variants={{
					hidden: { opacity: 0, y: 30 },
					visible: { opacity: 1, y: 0 },
				}}
				initial='hidden'
				animate='visible'
				exit='hidden'
				className='modal'
			>
				<div className='modal-content' onClick={(e) => e.stopPropagation()}>
					<Film {...film} />
					<p>{film.description}</p>
					<button onClick={onClose}>Close</button>
				</div>
			</motion.dialog>
		</div>,
		document.getElementById('modal')!
	)
}
