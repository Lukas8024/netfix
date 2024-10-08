import { createContext, useContext } from 'react'

interface AccordionItemContextType{
 id: any;
}

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined)

export function useAccordionItemContext() {
	const ctx = useContext(AccordionItemContext)

	if (!ctx) {
		throw new Error('AccordionItem - related components must be wrrap by <Accordion.Item>')
	}

	return ctx
}

export default function AccordionItem({ id, children, className }: any) {
	return (
		<AccordionItemContext.Provider value={id}>
			<li className={className}>{children}</li>
		</AccordionItemContext.Provider>
	)
}
