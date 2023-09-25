import { useContext, createContext, useState } from 'react'
import {recipes} from './recipes.js'

const Appcontext = createContext()

export const useGlobal = () => {
  return useContext(Appcontext)
}

const Appprovider = ({ children }) => {
   const [search, setSearch] = useState(false)

   const searchBar = () => {
     setSearch(!search)
     console.log('hello')
   }

  const categories = recipes.map(recipe => recipe.category)

  return (
    <Appcontext.Provider value={ {search, setSearch, searchBar, categories, recipes} }>
      {children}
    </Appcontext.Provider>
  )
}

export default Appprovider
