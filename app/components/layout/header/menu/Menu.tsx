import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Menu: FC = () => {
	return (
		<div>
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
					<li>
						<Link href='/'>Navigation</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Menu
