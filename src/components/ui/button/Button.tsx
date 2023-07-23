import cn from 'clsx'
import { FC } from 'react'
import styles from './Button.module.scss'

interface IButton {
	type: string
	title: string
	disabled?: boolean
	onClick: any
}

const Button: FC<IButton> = ({ type, title, disabled, onClick }) => {
	return (
		<button
			className={cn(styles.btn, {
				[styles.add]: type === 'add',
				[styles.remove]: type === 'remove',
				[styles.checkout]: type === 'checkout',
				[styles.disabled]: disabled,
			})}
			disabled={disabled}
			onClick={onClick}
		>
			{title}
		</button>
	)
}

export default Button
