import { FC } from 'react'
import Button from '../button/Button'
import styles from './Cart.module.scss'

const Cart: FC<{ cartItems: any; onCheckout: any }> = ({
	cartItems,
	onCheckout,
}) => {
	const totalPrice = cartItems.reduce(
		(a: any, c: any) => a + c.price * c.quantity,
		0
	)
	return (
		<div className={styles.cart}>
			{cartItems.length === 0 ? 'No items in cart' : ''}
			<br /> <span className="mr-1">Total Price: ${totalPrice.toFixed(2)}</span>
			<Button
				title={`${cartItems.length === 0 ? 'Order !' : 'Checkout'} `}
				type={'checkout'}
				disabled={cartItems.length === 0 ? true : false}
				onClick={onCheckout}
			/>
		</div>
	)
}

export default Cart
