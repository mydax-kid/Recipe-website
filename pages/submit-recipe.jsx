import Header from "../components/Head";

const Submitrecipe = () => {
  return(
    <div className= 'relative bg-white max-w-[1400px] mx-auto border-t md:p-4 lg:p-8 z-10'>
      <Header />
      <div className= 'p-3'>
        <h1>{`HOME > SUBMIT-RECIPE`}</h1>
      </div>
      <div className= 'h-[90px] md:h-[180px] submit-banner flex items-center '>
        <h1 className= 'p-2 bg-white rounded-sm font-bold inline-block ml-6'>Submit recipe</h1>
      </div>
      
      <div className= 'flex justify-center py-4 md:p-8'>
        <div className= 'p-3 bg-sky-100 md:p-6'>
          <div className= ' flex justify-between items-center gap-[30px] border-b p-2'>
            <h1>Login to submit your recipe</h1>
            <h1>Forgot your password?</h1>
          </div>
          <form className= 'py-4 px-4' >
            <label>Username or email:</label>
            <br></br>
            <input type='text' required  className= 'w-full rounded-sm border my-2 p-1 outline-none'  />
            <br></br>
            <label>Password:</label>
            <br></br>
            <input type='password' required  className= 'w-full rounded-sm border my-2 p-1 outline-none'  />
            <br></br>
            <input type="checkbox" id="remember" className= 'mr-4 my-2'/ >
            <label htmlFor="remember">Remember me</label>
            <br></br>
            <div className= 'py-3 flex justify-around items-end'>
              <button className= 'border px-4 rounded-sm py-1 bg-green-100 border-black hover:bg-green-300'>Login</button>
              <button className= 'border px-4 rounded-sm py-1 bg-red-100 border-black hover:bg-red-300'>Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Submitrecipe