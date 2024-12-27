import { useAccordionContext } from './Accordion'
import { useAccordionItemContext } from './AccordionItem'
interface AccordionTitleProps {
	children: React.ReactNode
	className?: string
}

export default function AccordionTitle({ children, className }: AccordionTitleProps) {
	const { toggleItem } = useAccordionContext()
	const id = useAccordionItemContext()

	const itemId = id.id

	return (
		<h3 className={className} onClick={() => toggleItem(itemId)}>
			{children}
		</h3>
	)
}
