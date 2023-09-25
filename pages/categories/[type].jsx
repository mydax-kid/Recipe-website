import Menucard from '../../components/Menucard'
import { useRouter} from 'next/router'
import { useState } from 'react'
import {recipes} from '../../recipes.js'
import Header from '../../components/Head'
import Sidemenu from '../../components/Sidemenu'

const CategoryType = () => {
  const router = useRouter()
  const {type} = router.query

  const [recipe, setRecipe] = useState(() => {
    return recipes.filter(item => item.category === type)
  })
  
  return (
    <>
      <Header />
      <div>
        <div className= ' w-full  md:px-4 lg:px-8 max-w-[1400px] mx-auto p-2 bg-white mt-2'>
          <h1 className= 'text-3xl mt-4 border-b-2 border-black inline-block'>{type}</h1>
          <div className= 'grid-category gap-[15px] md:gap-[30px] w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] '>
              {
                recipe.map((item,index) => {
                  return <Menucard {...item} key= {index} />
                })
              }
            </div>
            <Sidemenu/>
          </div>
        </div>
    </div>
    </>
  )
}

export default CategoryType;