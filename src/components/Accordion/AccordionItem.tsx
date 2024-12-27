import { createContext, useContext } from 'react'

type AccordionItemContextType = {
	id: string
	className?: string
}


const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined)

export function useAccordionItemContext() {
	const ctx = useContext(AccordionItemContext)
	
	if (!ctx) {
		throw new Error('AccordionItem - related components must be wrrap by <Accordion.Item>')
	}
	
	return ctx
}

type AccordionItemProps = {
	id: string
	className?: string
}

export default function AccordionItem({
	id,
	children,
	className,
}: React.PropsWithChildren<AccordionItemProps>): JSX.Element {
	const contextValue: AccordionItemContextType = { id, className }
	
	return (
		<AccordionItemContext.Provider value={contextValue}>
			<li className={className}>{children}</li>
		</AccordionItemContext.Provider>
	)
}
