import Header from "../components/Head";



const Categories = () => {
  return(
    <div className= 'max-w-[1400px] mx-auto'>
      <Header/>
      <div className= 'bg-white p-12'>
        <h1>Home > Categories</h1>
        <div className= 'flex justify-center gap-[30px] my-12'>
          
          <div className= 'relative w-[350px] h-[350px] overflow-hidden'>
            <img 
              src='https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
              alt= '' 
              className= 'w-full h-full object-cover object-center'
            />
            <div className= 'absolute top-0 left-0 w-full h-full bg-black/50 p-6 hover:translate-y-[30px] hover:opacity-0 ease-out duration-700'>
              <h1 className= 'px-6 py-8 text-3xl font-bold text-white border-b-2 absolute left-[30px] bottom-[60px] w-[80%] '>Beef</h1>
            </div>
          </div>
  
          <div className= 'relative w-[350px] h-[350px] overflow-hidden'>
            <img 
              src='https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
              alt= '' 
              className= 'w-full h-full object-cover object-center'
            />
            <div className= 'absolute top-0 left-0 w-full h-full bg-black/50 p-6 hover:translate-y-[30px] hover:opacity-0 ease-out duration-700'>
              <h1 className= 'px-6 py-8 text-3xl font-bold text-white border-b-2 absolute left-[30px] bottom-[60px] w-[80%] '>Chicken</h1>
            </div>
          </div>
  
          <div className= 'relative w-[350px] h-[350px] overflow-hidden'>
            <img 
              src='https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
              alt= '' 
              className= 'w-full h-full object-cover object-center'
            />
            <div className= 'absolute top-0 left-0 w-full h-full bg-black/50 p-6 hover:translate-y-[30px] hover:opacity-0 ease-out duration-700'>
              <h1 className= 'px-6 py-8 text-3xl font-bold text-white border-b-2 absolute left-[30px] bottom-[60px] w-[80%] '>Fish</h1>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Categories;