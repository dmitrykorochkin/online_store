import Image from 'next/image'
import { FC } from 'react'

import styles from './Cart.module.scss'
import { ICartItem } from '@/types/cart.interface'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image>
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product}
			</Image>
			<div>
				<div className={styles.name}>{item.product.name}</div>
				<div className={styles.price}>
					{new Intl.NumberFormat(undefined, {
						style: 'currency',
						currency: 'USD'
					}).format(item.product.price)}
				</div>
			</div>
		</div>
	)
}

export default CartItem
