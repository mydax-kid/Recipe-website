import {useGlobal} from '../context'


const Searchbar = () => {
    const {search, setSearch} = useGlobal()

  return(              
    <div onClick= {() => setSearch(false)} className= {`absolute top-0 h-screen left-0 w-screen flex justify-center items-center ${search ? 'bg-black/70 z-40' : null }`} >
      <div className= {`bg-sky-200 border border-black rounded-md w-[600px] p-3 ease-out duration-700 z-50 ${search ? 'translate-y-[0%]' : 'translate-y-[-1000%]'}` }>
        <input type='text' placeholder= 'Search...' className= 'w-[80%] px-3 bg-transparent outline-none text-xl' />
        <button className= 'py-2 px-5 bg-black text-white rounded-sm cursor-pointer '>SEARCH</button>
      </div>
    </div>
  )
}

export default Searchbar