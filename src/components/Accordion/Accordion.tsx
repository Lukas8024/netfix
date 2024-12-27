import { createContext, PropsWithChildren, ReactNode, useContext, useState } from 'react'

import AccordionItem from './AccordionItem'
import AccordionTitle from './AccordionTitle'
import AccordionContenet from './AccordionContent'

interface AccordionContextType {
	toggleItem: (id: string) => void
	openItemId: string | null
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

export function useAccordionContext(): AccordionContextType {
	const ctx = useContext(AccordionContext)

	if (!ctx) {
		throw new Error('Accordion related component must be wrraped by <Accordion>')
	}

	return ctx
}

interface AccordionProps {
	className?: string
	children: ReactNode
}
export default function Accordion({ children, className }: PropsWithChildren<AccordionProps>): JSX.Element {
	const [openItemId, setOpenItemId] = useState<string | null>(null)

	function toggleItem(id: string | null): void {
		setOpenItemId(prevId => (prevId === id ? null : id))
	}

	const contextValue = {
		toggleItem,
		openItemId,
	}

	return (
		<AccordionContext.Provider value={contextValue}>
			<ul className={className}>{children}</ul>
		</AccordionContext.Provider>
	)
}

Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle
Accordion.Content = AccordionContenet
