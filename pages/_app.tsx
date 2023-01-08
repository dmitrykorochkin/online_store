import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
