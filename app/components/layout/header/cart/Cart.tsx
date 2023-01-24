import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './Cart.module.scss'
import CartItem from './cartitem/CartItem'
import { cart } from '@/data/cart.data'
import { useTypedSelector } from '@/hooks/useTypesSelector'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const cart = useTypedSelector(state => state.cart.items)

	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => setIsOpen(!isOpen)}
				ref={btnRef}
			>
				<span className={styles.badge}>1</span>
				<span className={styles.text}>MY BASKET</span>
			</button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>My basket</DrawerHeader>

					<DrawerBody>
						<div className={styles.cart}>
							{cart.map(item => (
								<CartItem item={item} key={item.id} />
							))}
						</div>
					</DrawerBody>

					<DrawerFooter
						justifyContent='space-between'
						borderTopColor={'#A49B8F'}
						borderTopWidth={1}
					>
						<div className={styles.footer}>
							<div>Total:</div>
							<div>$100</div>
						</div>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
