import {FaFacebookSquare, FaTwitter, FaInstagram} from 'react-icons/fa'


const Sidemenu = () => {
  return(
    <div className= 'bg-cyan-50 w-[30%] rounded-md p-4 py-12'>
      <div className= 'text-center p-6 py-12 space-y-4 border-y border-dashed'>
        <h1 className= 'font-bold text-md'>CONNECT ON SOCIAL MEDIA</h1>
        <div className= 'flex justify-center gap-2'>
          <FaFacebookSquare/>
          <FaInstagram/>
          <FaTwitter/>       
        </div>
      </div>
        
        <div className= 'text-center p-6'>
          <h1 className= 'py-4 font-bold'>POPULAR RECIPES</h1>
          <div className= 'flex items-center gap-2 border-b-2 py-8'>
            <img 
              src='https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
              alt= '' 
              className= 'w-[100px] h-[110px] rounded-lg object-cover object-center'
            />
            <p>Madondo(bean stew)</p>
          </div>
          <div className= 'flex items-center gap-2 border-b-2 py-8'>
            <img 
              src='https://images.pexels.com/photos/14883760/pexels-photo-14883760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
              alt= '' 
              className= 'w-[100px] h-[110px] rounded-lg object-cover object-center'
            />
            <p>Dry Fry Pork</p>
          </div>
          <div className= 'flex items-center gap-2 mb-4 border-b-2 py-8'>
            <img 
              src='https://images.pexels.com/photos/5713756/pexels-photo-5713756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
              alt= '' 
              className= 'w-[100px] h-[110px] rounded-lg object-cover object-center'
            />
            <p>Tumbukiza</p>
          </div>
        </div>

      <div className= 'px-4 py-12 text-center'>
        <h1 className= 'py-6 font-bold underline' >RECIPE CATEGORIES</h1>
        <div className= 'flex justify-center flex-wrap gap-[5px] gap-y-6 py-6'>
          <div className= 'w-[45%] p-2 rounded-md bg-green-500'>
            <p>BEEF</p>
          </div>
          <div className= 'w-[45%] p-2 rounded-md bg-red-300'>
            <p>FISH</p>
          </div>
          <div className= 'w-[45%] p-2 rounded-md bg-cyan-200'>
            <p>CHICKEN</p>
          </div>
          <div className= 'w-[45%] p-2 rounded-md bg-orange-500'>
            <p>PORK</p>
          </div>
          <div className= 'w-[45%] p-2 rounded-md bg-yellow-400'>
            <p>QUICK FIXES</p>
          </div>
          <div className= 'w-[45%] p-2 rounded-md bg-lime-400'>
            <p>VEGETABLES</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidemenu;