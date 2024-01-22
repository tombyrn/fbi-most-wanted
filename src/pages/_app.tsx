import ListProvider from '@/contexts/ListContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ListProvider>
      <Component {...pageProps} />
    </ListProvider>
  )
}
