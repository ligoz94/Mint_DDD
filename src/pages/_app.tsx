import '../styles/globals.css'
import '../styles/Home.scss'
import '../styles/Mint.scss'
import '../styles/Navbar.scss'
import '../styles/Main.scss'
import '../components/template/style.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
