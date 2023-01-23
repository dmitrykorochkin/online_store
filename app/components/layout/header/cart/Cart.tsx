import { FC, useState, useRef } from 'react'
import styles from './Cart.module.scss'
import { cart } from '@/data/cart.data'
import CartItem from './cartitem/CartItem'
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody,Button, DrawerFooter } from '@chakra-ui/react'


const Cart: FC = () => {

	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	return <div className={styles['wrapper-cart']}>
		<button className={styles.heading} onClick = {() => setIsOpen(!isOpen)} ref={btnRef}>
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
						<CartItem item={item} key={item.id}/>
					))}
				</div>
			</DrawerBody>

			<DrawerFooter>
				<Button colorScheme='green'>Checkout</Button>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>

	</div>
}

export default Cart

