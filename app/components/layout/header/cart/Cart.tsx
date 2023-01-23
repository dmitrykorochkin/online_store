import { FC } from 'react'
import styles from './Cart.module.scss'
import { cart } from '@/data/cart.data'
import CartItem from './cartitem/CartItem'

const Cart: FC = () => {
	return <div className={styles['wrapper-cart']}>
		<button className={styles.heading}>
			<span className={styles.badge}>1</span>
			<span className={styles.text}>MY BASKET</span>
		</button>
		<div className={styles.cart}>
			{cart.map(item => (
				<CartItem item={item} key={item.id}/>
			))}
		</div>
	</div>
}

export default Cart

