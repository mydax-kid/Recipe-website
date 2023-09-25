import Link from 'next/link'
import {useGlobal} from '../context'
import {BiSearch} from 'react-icons/bi'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useEffect, useRef } from 'react'

const Navbar = ({menu, setMenu}) => {
  const {searchBar} = useGlobal()

  const scrollRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        if (window.scrollY > 10) {
          scrollRef.current.style.boxShadow =
            '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
        } else {
          scrollRef.current.style.boxShadow = 'none';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, []);

  
  
  return (
    <div ref= {scrollRef} className= ' relative p-3 sm:px-8 md:px-12 md:py-8 flex justify-between items-center rounded-t-md bg-white md:mt-10 max-w-[1400px] mx-auto sticky top-0 z-20'>
      <div className= 'hidden gap-5 items-center md:flex'>
         <Link href= '/'>
           <h1 className= 'text-xl text-amber-500 mr-12 font-bold cursor-pointer'>FLAVAFUSION</h1>
         </Link>
        <ul className= 'flex gap-3'>
          <Link href='/'><li className= 'border-l-2 px-2 font-medium text-xl cursor-pointer hover:text-zinc-500'>HOME</li></Link>
          <Link href='/categories'><li className= 'border-l-2 px-2 font-medium text-xl cursor-pointer hover:text-zinc-500'>CATEGORIES</li></Link>
          <Link href='/submit-recipe'><li className= 'border-l-2 px-2 font-medium text-xl cursor-pointer hover:text-zinc-500'>SUBMIT-RECIPE</li></Link>
          <Link href='/auth'><li className= 'border-l-2 px-2 font-medium text-xl cursor-pointer hover:text-zinc-500'>PROFILE</li></Link>
        </ul>
      </div>
      <h1 className= 'md:border-l-2 pl-2 mr-12 font-medium md:text-xl cursor-pointer hover:text-zinc-500' onClick = {searchBar}><BiSearch className= 'inline-block relative top-[-2px] mr-[3px]'/>SEARCH</h1>
      <RxHamburgerMenu className= 'text-xl md:hidden' onClick= {() => setMenu(!menu)}/>
    </div>
  )
}

export default Navbar;