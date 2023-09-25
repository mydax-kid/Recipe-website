import {FaFacebookSquare, FaTwitter, FaInstagram} from 'react-icons/fa'
import { useState } from 'react'
import {useGlobal} from '../context'
import {popular} from '../recipes.js'
import Link from 'next/link'

const colors = ['bg-red-300', 'bg-cyan-200', 'bg-orange-500', 'bg-orange-400', 'bg-lime-400']
let colorIndx = 0

const Sidemenu = () => {
  const { categories } = useGlobal()
  const [recipes, setRecipes] = useState([...new Set(categories)])

  const handleColors = () => {
    if (colorIndx >= colors.length - 1) {
      colorIndx = 0;
    } else {
      colorIndx = colorIndx + 1;
    }
    return colors[colorIndx];
};

 
  return(
    <div className= 'hidden bg-cyan-50 w-full rounded-md p-4 py-12 lg:block z-10'>
      <div className= 'text-center p-6 py-12 space-y-4 border-y border-dashed'>
        <h1 className= 'font-bold text-xl text-md'>CONNECT ON SOCIAL MEDIA</h1>
        <div className= 'flex justify-center gap-2'>
          <FaFacebookSquare size={25} className='text-sky-500'/>
          <FaInstagram size={25} className='text-purple-400'/>
          <FaTwitter size={25} className='text-blue-400'/>       
        </div>
      </div>
        
      <div className= 'text-center p-6'>
        <h1 className= 'py-4 font-bold text-2xl'>POPULAR RECIPES</h1>
         {
            popular.map(item => (
              <Link href={`/${item.id}`} key={item.id}>
                <div className= 'flex items-center gap-2 border-b-2 py-8'>
                  <img 
                    src= {item.image} 
                    alt= '' 
                    className= 'w-[140px] h-[110px] rounded-lg object-cover object-center hover:scale-105 transition ease-out duration-500 cursor-pointer'
                  />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))
         }
      </div>

      <div className= 'px-4 py-12 text-center'>
        <h1 className= 'py-6 font-bold text-2xl' >RECIPE CATEGORIES</h1>
        <div className= 'flex justify-center flex-wrap gap-[5px] gap-y-6 py-6'>
          {
            recipes.map((each, index) => (
              <Link href={`/categories/${each}`} key={each}>
                <div key= {index} className={ `w-[45%] p-2 rounded-md ${handleColors()} hover:opacity-80 cursor-pointer` }>
                  <p>{each}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sidemenu;