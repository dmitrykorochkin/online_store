import { FC } from 'react'

import Layout from '@/layout/Layout'

const Home: FC = () => {
	return (
		<Layout title='Home'>
			<div className='flex h-screen w-full items-center justify-center'>
				<h1 className='text-center text-7xl font-bold text-red'>Xmas shop</h1>
			</div>
		</Layout>
	)
}

export default Home
