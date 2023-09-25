import Menucard from './Menucard'
import {recipes} from '../recipes.js'
import {useState} from 'react'

const Menulist = () => {
  const [recipeList, setRecipeList] = useState(recipes)
  
  return(
    <div>
      <div className= 'grid grid-cols-1 sm:grid-cols-2 gap-[20px] w-full md:px-4 lg:px-8'>
        {
          recipeList.map((item,index) => {
            return <Menucard {...item} key= {index} />
          })
        }
      </div>
      <div className='px-10 pt-10 flex justify-between z-10'>
        <button disable= 'true' className='hover:drop-shadow-xl z-10'>{`< Prev Entries`}</button>
        <button disable= 'true' className='hover:drop-shadow-xl z-10'>{`Next Entries >`}</button>
      </div>
    </div>
  )
}

export default Menulist;