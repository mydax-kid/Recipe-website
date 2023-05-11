import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Appprovider from '../context'
import Searchbar from '../components/Searchbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Appprovider>
        <Searchbar />
        <Navbar/>
        <Component {...pageProps} />
      </Appprovider>
    </>
  )
}

export default MyApp
