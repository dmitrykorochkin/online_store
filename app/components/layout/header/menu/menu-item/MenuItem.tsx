import { FC } from 'react'
import { IMenuLink } from './menu-item.interface'

interface IMenuItem {
    item: IMenuLink
}

const MenuItem: FC<IMenuItem> = ({item}) => {
	return <div>MenuItem</div>
}

export default MenuItem