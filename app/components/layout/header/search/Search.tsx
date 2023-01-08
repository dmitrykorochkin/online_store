import {Input} from 'antd'
import { FC, useState } from 'react'

import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	return (
		<div className={styles.search}>
			<Input.Search
				onChange={e => setSearchTerm(e.target.value)}
				value={searchTerm}
			/>
		</div>
	)
}

export default Search
