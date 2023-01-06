import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { menu } from './menu.data'
import MenuItem  from './menu-item/MenuItem'

import styles from './Menu.module.scss'

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<Link href='/'>
				<Image
					src='/images/logo.png'
					width={50}
					height={50}
					alt='logo'
				/>
			</Link>

			<nav>
				<ul>
                    {menu.map(item => <MenuItem key={item.link} item={item}/>)}
				</ul>
			</nav>
		</div>
	)
}

export default Menu
