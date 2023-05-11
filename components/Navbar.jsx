import Link from 'next/link'
import {useGlobal} from '../context'
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
  const {searchBar} = useGlobal()
  
  return(
    <div className= ' px-12 py-10 flex justify-between items-center rounded-t-md bg-white mt-10 max-w-[1400px] mx-auto sticky top-0 z-10'>
      <div className= 'flex gap-5 items-center'>
       <Link href= '/'>
         <h1 className= 'text-xl text-violet-600 mr-12 font-bold cursor-pointer'>COOK<i>it</i></h1>
       </Link>
        <ul className= 'flex gap-3'>
          <Link href='/'><li className= 'border-l-2 px-2 font-medium text-xl cursor-pointer'>HOME</li></Link>
          <Link href='/categories'><li className= 'border-l-2 px-2 font-medium text-xl cursor-pointer'>CATEGORIES</li></Link>
          <Link href='submit-recipe'><li className= 'border-l-2 px-2 font-medium text-xl cursor-pointer'>SUBMIT-RECIPE</li></Link>
        </ul>
      </div>
      <h1 className= 'border-l-2 pl-2 mr-12 font-medium text-xl cursor-pointer' onClick = {searchBar}><BiSearch className= 'inline-block relative top-[-2px] mr-[3px]'/>SEARCH</h1>
    </div>
  )
}

export default Navbar;