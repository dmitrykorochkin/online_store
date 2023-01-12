import { FC } from 'react'
import styles from 'Cart.module.scss'

const Cart: FC = () => {
	return <div className={styles['wrapper-cart']}>
		<div className={styles.heading}>
			<span className={styles.badge}>1</span>
			<span className={styles.text}>MY BASKET</span>
		</div>
		<div className={styles.cart}></div>
	</div>
}

export default Cart

