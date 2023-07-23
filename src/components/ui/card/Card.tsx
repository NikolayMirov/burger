import { IData } from '@/db/db'
import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'
import Button from '../button/Button'
import styles from './Card.module.scss'

interface ICard {
	food: IData
	onAdd: any
	onRemove: any
}

const Card: FC<ICard> = ({ food, onAdd, onRemove }) => {
	const [count, setCount] = useState(0)
	const { title, image, price, id } = food

	const handleIncrement = () => {
		setCount(count + 1)
		onAdd(food)
	}
	const handleDecrement = () => {
		setCount(count - 1)
		onRemove(food)
	}

	return (
		<div className={styles.card}>
			<span
				className={cn({
					[styles.badge]: count !== 0,
					[styles.hide]: count === 0,
				})}
			>
				{count}
			</span>
			<div className={styles.image}>
				<Image src={image} width={100} height={100} alt={title} />
			</div>
			<div className={styles.title}>
				<div>{title}</div>
				<div className={styles.price}>$ {price}</div>
			</div>

			<div className={styles.btn}>
				<Button title="+" type="add" onClick={handleIncrement} />
				{count !== 0 ? (
					<Button title="-" type="remove" onClick={handleDecrement} />
				) : null}
			</div>
		</div>
	)
}

export default Card
