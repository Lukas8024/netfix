import { createContext, useContext, useState } from 'react'

import AccordionItem from './AccordionItem'
import AccordionTitle from './AccordionTitle'
import AccordionContenet from './AccordionContent'

interface AccordionContextType {
	toggleItem: any
	openItemId: any
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

export function useAccordionContext() {
	const ctx = useContext(AccordionContext)

// console.log(ctx);

	if (!ctx) {
		throw new Error('Accordion related component must be wrraped by <Accordion>')
	}

	return ctx
}

export default function Accordion({ children, className }: any) {
	const [openItemId, setOpenItemId] = useState()

	function toggleItem(id: any) {
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
Accordion.Title= AccordionTitle
Accordion.Content = AccordionContenet