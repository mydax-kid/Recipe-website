import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import {useState} from 'react'
import Header from "../components/Head";

function Auth() {
  const [isNewbie, setIsNewbie] = useState(false)
  
  return(
    <>
      <Header />
      <div className='max-w-[1400px] mx-auto bg-white flex justify-center items-center mt-2 py-4 md:mt-4 md:py-10 py-20'>
        { !isNewbie ? <LoginForm setIsNewbie={setIsNewbie} isNewbie={isNewbie}/> 
                    : <RegisterForm setIsNewbie={setIsNewbie} isNewbie={isNewbie} /> 
        }
      </div>
    </>
  )
}

export default Auth;