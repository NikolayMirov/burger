export interface IData {
	id: number
	title: string
	price: number
	image: StaticImageData
}

import burgerImg from '@/assets/images/burger.png'
import cocaImg from '@/assets/images/coca.png'
import iceCreamImg from '@/assets/images/icecream.png'
import kebabImg from '@/assets/images/kebab.png'
import pizzaImg from '@/assets/images/pizza.png'
import saladImg from '@/assets/images/salad.png'
import waterImg from '@/assets/images/water.png'
import { StaticImageData } from 'next/image'

export const getData: IData[] = [
	{ title: 'Pizza', price: 17.99, image: pizzaImg, id: 1 },
	{ title: 'Burger', price: 15, image: burgerImg, id: 2 },
	{ title: 'Coca', price: 3.5, image: cocaImg, id: 3 },
	{ title: 'Kebab', price: 13.99, image: kebabImg, id: 4 },
	{ title: 'Salad', price: 2.5, image: saladImg, id: 5 },
	{ title: 'Bottle of water', price: 0.99, image: waterImg, id: 6 },
	{ title: 'Ice cream', price: 2.99, image: iceCreamImg, id: 7 },
]
