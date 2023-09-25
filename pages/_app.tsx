import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import DropdownMenu from '../components/DropdownMenu'
import Appprovider from '../context'
import Searchbar from '../components/Searchbar'
import Footer from '../components/Footer'
import {useState} from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    const [menu, setMenu] = useState(false)

  return (
    <div className= ''>
      <Appprovider>
        <Searchbar />
        <DropdownMenu menu= {menu} />
        <Navbar menu= {menu} setMenu= {setMenu} />
        <Component {...pageProps} />
        <Footer/>
      </Appprovider>
    </div>
  )
}

export default MyApp
