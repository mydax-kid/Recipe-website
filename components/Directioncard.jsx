const Directioncard = ({rank, title, body}) => {
  return(
    <div className= 'flex py-4 border-b'>
      
      <div className= 'w-[30%] px-2 pr-14 space-y-8'>
        <div className= 'bg-zinc-300 text-center rounded-md h-[50%]'>
          <h1 className= 'h-[65%] border-b flex justify-center items-center text-4xl font-bold text-zinc-500'>{rank}</h1>
          <p className= 'flex justify-center items-center '>DONE</p>
        </div>

        <div className= 'bg-red-500 rounded-md h-[20%] flex justify-center items-center p-1'>
          <p className= 'text-white text-sm'>60-90 MINS</p>
        </div>
      </div>
      
      <div className= 'w-[70%]'>
        <h2 className= 'py-4 border-b text-lg font-medium'>{title.toUpperCase()}</h2>
        <p className= 'py-4'>{body}</p>
      </div>
      
    </div>
  )
}

export default Directioncard;