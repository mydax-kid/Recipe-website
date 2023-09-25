import {useState, useEffect} from 'react'

const LoginForm = ({isNewbie, setIsNewbie}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return(
    <div className= 'bg-zinc-100 rounded-lg drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]'>
       <div className='slide-custom relative bg-white p-4 md:p-10 w-[320px] sm:w-[350px] md:w-[500px] text-sm text-gray-400 rounded-sm'>
          <div className='grid place-items-center p-2 text-black font-bold'>
              <h1 className='text-lg'>Welcome Back!</h1>
          </div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
              <div className='mb-4'>
                  <label htmlFor="">EMAIL</label>
                  <br></br>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='p-1 md:p-2 border border-gray-300 rounded-sm w-full mt-1' />
              </div>
              <div className='mb-4'>
                  <label htmlFor="">PASSWORD</label>
                  <br></br>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='p-1 md:p-2 border border-gray-300 rounded-sm w-full mt-1' />
              </div>
              <div className='mb-4 flex justify-between items-center'>
                  <div className='flex items-center'>
                      <input type="checkbox" className='mr-2' />
                      <label>Remember me</label>
                  </div>
                  <p className='hover:text-black cursor-pointer'>Forgot Password?</p>
              </div>
              <button className='my-2 p-1 md:p-3 w-full bg-amber-500 rounded-md hover:bg-amber-200 text-black'>Login</button>
          </form>
          <div
              className='p-5 text-center text-black'>Dont have an account?
              <span className='hover:text-gray-400 cursor-pointer ml-2' onClick={() => setIsNewbie(!isNewbie)}>REGISTER</span>
          </div>
      </div>
    </div>
  )
}

export default LoginForm;