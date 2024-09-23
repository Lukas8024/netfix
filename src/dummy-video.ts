import rambo1 from './assets/rambo_1.jpg'
import rambo2 from './assets/rambo_2.jpg'
import saberWars from './assets/saber_wars.jpg'
import fastFurious from './assets/syrena105.jpg'
import drunkPirates from './assets/drunk_pirates.jpg'
import weirdThinks from './assets/weird_things.jpg'

type MyObject = {
	id: number
	image: string
	title: string
	description: string
}

export const DUMMY_FILMS: MyObject[] = [
	{
		id: 1,
		image: rambo1,
		title: 'Rambo: First Blood',
		description:
			'John Rambo, a former commando and Vietnam War veteran, exposes himself to the police officers of a town.',
	},
	{
		id: 2,
		image: rambo2,
		title: 'Rambo II',
		description:
			'In exchange for his release from prison, John Rambo agrees to find American prisoners of war held in Vietnam.',
	},
	{
		id: 3,
		image: fastFurious,
		title: 'The Fast and the Furious',
		description:
			'A policeman infiltrates a group organising illegal car races. The situation becomes complicated when he gets to know the sister of the leader of the criminals better.',
	},
	{
		id: 4,
		image: saberWars,
		title: 'Saber Wars',
		description:
			'A war very far away between galactics.It gets really emotional and intense with every minute passing by.',
	},
	{
		id: 5,
		image: drunkPirates,
		title: 'Drunk Pirates',
		description:
			'Blacksmith Will S. allies with Captain Jack S. to win back his love - the governor`s kidnapped daughter.',
	},
	{
		id: 6,
		image: weirdThinks,
		title: 'Weird Things',
		description:
			'The boy`s disappearance is the beginning of strange and dangerous events plaguing the provincial town.',
	},
]
