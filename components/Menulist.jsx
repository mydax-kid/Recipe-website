import Menucard from './Menucard'
import {recipes} from '../recipes.js'
import {useState} from 'react'

const Menulist = () => {
  const [recipeList, setRecipeList] = useState(recipes)

  console.log(recipeList)
  
  return(
    <div className= 'flex justify-between flex-wrap w-[70%] px-8'>
      {
        recipeList.map((item, index) => {
          return <Menucard {...item} key= {index} />
        })
      }
    </div>
  )
}

export default Menulist;