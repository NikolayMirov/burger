import dynamic from 'next/dynamic'
import { FC } from 'react'

const DynamicShop = dynamic(() => import('../shop/Shop'), {
	ssr: false,
})
const Home: FC = () => {
	return (
		<>
			<h1 className="text-center">Order Food</h1>
			<DynamicShop />
		</>
	)
}

export default Home
