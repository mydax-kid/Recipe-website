import {useGlobal} from '../context'
import {useState} from 'react'
import {recipes} from '../recipes.js'
import { useRouter } from 'next/router';

const Searchbar = () => {
  const {search, setSearch} = useGlobal()
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('')

  const router = useRouter();
  const currentRoute = router.pathname;

  const showSearchBar = (e) => {
    const element = e.target
    if (element.classList.contains('target')) {
      setSearch(false)
    }
  }

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val)
    if(val < 1) {
      setSearchResults([])
      return;
    }
    setLoading(true);
    let newValue = val.toLowerCase()
    const matches = recipes.filter(each => {
      return each.title.toLowerCase().includes(newValue) 
    })
    const newMatches = matches.slice(0,5)
    setSearchResults(newMatches)
    setLoading(false)
  }

  const handleRoute = (id) => {
    setValue('')
    setSearch(false)
    setSearchResults([])
    router.push(`/${id}`)
  }

  return(              
    <div onClick= {showSearchBar} className= {`target fixed cursor-pointer top-0 h-screen left-0 w-screen flex justify-center pt-[30%] md:pt-[10%] ${search ? 'bg-black/70 z-40' : 'z-0' }`} >
      <div className= 'h-max'>
        <div className= {`bg-sky-200 border border-white rounded-md w-[300px] sm:w-[380px] md:w-[600px] p-1 sm:p-2 md:p-3  ease-out duration-700 z-50 ${search ? 'translate-y-[0%]' : 'translate-y-[-1000%]'}` }>
          <span className= {`${loading ? 'spinner inline-block' : 'hidden'} rounded-full w-4 h-4 border-l-2 border-sky-400`}></span>
          <input 
            type='text' 
            placeholder= 'Search...' 
            className= 'ignore w-[70%] px-3 bg-transparent outline-none text-xl'
            value= {value}
            onChange= {handleChange}
          />
          <button 
            disabled= {searchResults?.length > 0}
            className= 'hidden py-2 px-5 bg-black text-white rounded-sm cursor-pointer '>
            SEARCH
          </button>
        </div>

        <div className= ''>
          {searchResults?.map(item => (
              <div 
                onClick= {() => handleRoute(item.id)}
                key= {item?.id} 
                className= 'slide-in w-full flex items-center p-1 sm:p-2 bg-white/80 my-1 rounded-md hover:bg-white'>
                <div className= 'mr-3'>
                  <img 
                    src={item?.image} 
                    alt={item?.title} 
                    className= 'object-center w-[50px] h-[50px] md:w-[70px] md:h-[70px] object-cover rounded-md' 
                  />
                </div>
                <h2 className= ''>{item?.title}</h2>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Searchbar