import {useState} from 'react'

const Directioncard = ({rank, title, body}) => {
  const [done, setDone] = useState(false)
  
  return(
    <div className= 'flex flex-col md:flex-row py-4 px-4 border-b'>
      <div className= 'w-[60%] sm:w-[40%] md:w-[30%] pr-14 space-y-8'>
        <div 
          className= {`${done ? 'border-black/20 border-2 bg-white' : 'bg-zinc-100 border border-black/30'} text-center rounded-md h-[50%] cursor-pointer hover:border-black/60 hover:bg-zinc-200 transition ease duration-700`}
          onClick={() => setDone(!done)}>
          <h1 className= 'h-[65%] border-b flex justify-center items-center text-4xl font-bold text-zinc-500'>{rank}</h1>
          <p className={`${done ? 'line-through' : null} flex justify-center items-center`} >DONE</p>
        </div>

        <div className= 'bg-red-500 rounded-md h-[20%] flex justify-center items-center p-1'>
          <p className= 'text-white text-sm'>60-90 MINS</p>
        </div>
      </div>
      
      <div className= 'relative w-full md:w-[70%]'>
        <h2 className= 'py-4 border-b text-lg font-medium'>{title.toUpperCase()}</h2>
        <p className={`${done ? 'scale-y-50' : null} text-[18px] py-4 transition ease-out duration-700`}>{body}</p>
      </div>
      
    </div>
  )
}

export default Directioncard;