import { ReactNode } from 'react'
import { useAccordionContext } from './Accordion'
import { useAccordionItemContext } from './AccordionItem'

type AccordionContetntProps = {
	children: ReactNode;
	className?: string;
}

export default function AccordionContenet({ children, className }: AccordionContetntProps) {
	const { openItemId } = useAccordionContext()
	const id = useAccordionItemContext()

	const itemId = id.id
	
	const isOpen = openItemId === itemId

	return <div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>{children}</div>
}
