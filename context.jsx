import { useContext, createContext, useState } from 'react'

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

  return (
    <Appcontext.Provider value={ {search, setSearch, searchBar} }>
      {children}
    </Appcontext.Provider>
  )
}

export default Appprovider
