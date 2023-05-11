import {CgProfile} from 'react-icons/cg'

const Herocard = () => {
  return(
    <div  className= 'absolute right-[100px] top-[50px] w-[350px] min-h-[350px] bg-white p-8 rounded-lg'>
      <h1 className= 'font-bold text-2xl p-2 border-b-2 border-dashed'>Tumbukiza</h1>
      <p className= 'p-2 py-4'>Whether hungry, hang-overed or having serious cravings, the answer will almost maybe always be Tumbukiza.</p>
      <div className= 'flex justify-between items-center p-2'>
        <CgProfile size= {35}/>
        <div className= 'text-[14px]'>
          <h2>Chef Sammy</h2>
          <p>July 12, 2015</p>
        </div>
        <p className= 'self-start'>Like: 346</p>
      </div>
      <p className= 'p-2 pt-6 underline decoration-red-500'>Read More</p>
      
    </div>
  )
}

export default Herocard