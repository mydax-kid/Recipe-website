
import Header from "../../components/Head";
import {recipes} from '../../recipes.js'
import { useState } from 'react'
import Link from 'next/link'

function removeDuplicates(array) {
  const uniqueObjects = [];
  const categories = new Set();

  for (const obj of array) {
    if (!categories.has(obj.category)) {
      uniqueObjects.push(obj);
      categories.add(obj.category);
    }
  }
  return uniqueObjects;
}


const Categories = () => {
  const [recipe, setRecipe] = useState(() => removeDuplicates(recipes))
  
  return(
    <div className= 'max-w-[1400px] mx-auto'>
      <Header/>
      <div className= 'bg-white p-2 sm:p-4 md:p-6 lg:p-12 mt-3'>
        <h1>Home > Categories</h1>
        <div className= 'grid-custom gap-[30px] my-4 md:my-6 lg:my-12'>
          {
            recipe.map((each, index) => (
              <Link href= { `/categories/${each.category}` }>
                <div key= {index} className= 'relative w-full h-full overflow-hidden cursor-pointer'>
                    <img 
                      src= {each.image}
                      alt= '' 
                      className= 'w-full h-full object-cover object-center'
                    />
                    <div className= 'absolute top-0 left-0 w-full h-full bg-black/50 p-6 hover:opacity-0 ease-out duration-700 group'>
                      <h1 className= 'px-6 py-8 text-3xl font-bold text-white border-b-2 absolute left-[30px] bottom-[60px] w-[80%] group-hover:translate-y-[30px] ease-out duration-700'>{each.category}</h1>
                    </div>
                </div>
              </Link>
            ))
          }    
        </div>
      </div>
    </div>
  )
}

export default Categories;

// 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
//   'https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 


