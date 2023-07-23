import Card from '@/components/ui/card/Card'
import Cart from '@/components/ui/cart/Cart'
import { IData, getData } from '@/db/db'
import { FC, useEffect, useState } from 'react'
interface ICartItem extends IData {
	quantity: number
}
declare global {
	interface Window {
		Telegram: any
	}
}
const tele = window?.Telegram.WebApp

const Shop: FC = () => {
	const [cartItems, setCartItems] = useState<ICartItem[]>([])

	useEffect(() => {
		tele.ready()
	})

	const onAdd = (food: IData) => {
		console.log(food)
		const exist = cartItems.find((x) => x.id === food.id)
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
				)
			)
		} else {
			setCartItems([...cartItems, { ...food, quantity: 1 }])
		}
	}

	const onRemove = (food: IData) => {
		const exist = cartItems.find((x) => x.id === food.id)

		if (exist) {
			if (exist.quantity === 1) {
				setCartItems(cartItems.filter((x) => x.id !== food.id))
			} else {
				setCartItems(
					cartItems.map((x) =>
						x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
					)
				)
			}
		}
	}

	const onCheckout = () => {
		tele.MainButton.text = 'Pay :)'
		tele.MainButton.show()
	}

	return (
		<>
			<Cart cartItems={cartItems} onCheckout={onCheckout} />
			<div className="flex justify-center flex-wrap">
				{getData.map((food) => (
					<Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
				))}
			</div>
		</>
	)
}

export default Shop
