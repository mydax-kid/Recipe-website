import Link from 'next/link'


const DropdownMenu = ({menu}) => {
  return(
    <ul 
        className= {`relative bg-black text-white text-center ease-out duration-500 md:hidden z-20 ${menu ? 'h-[190px] py-[12px] md:py-[30px] ' : 'h-0 overflow-hidden'}`}>
          <Link href='/'><li className= 'w-full p-[10px] md:p-[20px] cursor-pointer hover:bg-white hover:text-black'>HOME</li></Link>
          <Link href='/categories'><li className= 'w-full p-[10px] md:p-[20px] cursor-pointer hover:bg-white hover:text-black'>CATEGORIES</li></Link>
          <Link href='/submit-recipe'><li className= 'w-full p-[10px] md:p-[20px] cursor-pointer hover:bg-white hover:text-black'>SUBMIT-RECIPE</li></Link>
      </ul>
  )
}

export default DropdownMenu;