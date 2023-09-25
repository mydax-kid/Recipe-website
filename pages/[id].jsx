import {CgProfile} from 'react-icons/cg'
import Directioncard from '../components/Directioncard'
import Header from '../components/Head'
import {recipes} from '../recipes.js'
import RelatedList from '../components/RelatedList'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import AddComment from '../components/AddComment'
import IngredientList from '../components/IngredientList'


const Singlepage = () => {
  const router = useRouter()
  const {id} = router.query

  const [recipe, setRecipe] = useState()

  useEffect(() => {
    const newRecipe = recipes.find(item => item.id.toString() === id);
    setRecipe(newRecipe);
  }, [id]); 


  return (
      <div className= 'relative z-10 max-w-[1400px] mx-auto bg-white'>
        <Header />
        <h1 className= 'p-6 md:p-12 border-y text-2xl'>HOME > BEEF > {recipe?.title}</h1>
        <div className= 'flex flex-col lg:flex-row' >
        <div className= 'p-2 md:p-8 lg:p-10 w-full lg:w-[50%] border-y'>
            <div className= 'h-[250px] md:h-[500px]'>
              <img 
                src= {recipe?.image} 
                alt= ''
                className= 'w-full h-full object-cover object-center rounded-xl'
              />
            </div>
            <ul className= 'flex justify-center gap-6 p-4 py-8 border-y text-xl'>
             <li>Shares: 356</li>
             <li>Likes: 670</li>
             <li>Views: 546</li>
            </ul>
            <div className= ''>
              <IngredientList recipe={recipe} />
            </div>
            <div className= 'bg-sky-100 p-2 sm:p-4 md:p-8 lg:p-12 py-6 rounded-lg border mt-12'>
              <h1 className= 'p-6 text-3xl text-center font-medium border-b border-black/20 border-dashed mb-6'>Bookmark this recipe</h1>
              <div className= 'p-10 bg-sky-200 rounded-lg text-center'>
                <p>You need to login/register to bookmark or favourite this content</p>
              </div>
            </div>
        </div>
        <div className= 'w-full lg:w-[50%] py-12 px-2 md:px-4 lg:px-8'>
          <div className= 'py-12'>
            <h1 className= 'text-center text-3xl p-4 font-medium'>{recipe?.title}</h1>
            <h3 className= 'text-center text-xl text-zinc-500 pb-12'>{recipe?.caption?.toUpperCase()}</h3>
            <div className= 'flex justify-between p-6 border-y border-dashed'>
              <p>FEATURES: {recipe?.features[0]}</p>
              <p>CUISINE: {recipe?.specifics?.cuisineOrigin}</p>
            </div>
            <p className= 'py-20 text-center text-4xl '>
              <i>"{recipe?.description}"</i>
            </p>
            <div className= 'flex justify-center gap-2 md:gap-8 text-xl font-medium bg-sky-100 p-2 md:p-4 rounded-md'>
              <p className= 'p-3 text-center'>140mins</p>
              <p className= 'border-l border-zinc-400 p-3 text-center'>Serves 3</p>
              <p className= 'border-l border-zinc-400 p-3 text-center'>Easy</p>
            </div>
            <div className= 'py-12'>
              <h1 className= 'p-4 underline text-xl font-bold'>DIRECTIONS:</h1>
              {
                recipe?.steps && recipe?.steps?.map((item,index) => {
                  return(
                    <Directioncard key= {index} {...item } />
                  )
                })
              }
            </div>
            <div className= 'bg-sky-100 p-6 rounded-md flex justify-around items-center font-medium'>
              <Link href= '#comment'><p className= 'cursor-pointer'>COMMENT</p></Link>
              <p>SHARE</p>
            </div>
            <div className= 'bg-gray-100 p-4 md:p-8 lg:p-12 py-8 rounded-md mt-6 flex items-center'>
              <div className= 'mr-10'>
                <CgProfile size={80}/>
              </div>
              <div  className= 'w-full'>
                <h1 className= 'text-2xl py-2 w-full font-medium border-b border-gray/40 mb-2'>Mydax Chef</h1>
                <p>My Links</p>
              </div>
            </div>
            <div className= 'bg-gray-200 p-12 rounded-md mt-6'>
              <p className= 'py-4 text-2xl font-medium border-b border-gray/50'>Recipe reviews</p>
              <p className= 'py-4 text-md'>There are no reviews for this recipe yet, use a form below to write your review</p>
            </div>
            <div className= 'bg-sky-100 p-3 md:p-8 rounded-md mt-6'>
              <div className= 'flex justify-around py-3 border-b-2 border-gray/70'>
                <h1 className= 'font-medium'>Log in to write a review</h1>
                <p className= 'underline text-gray-500 font-medium'>Forgot your password?</p>
              </div>
              <form className= 'mt-4 py-4 px-8'>
                <input type='text' placeholder= 'Username or email:' className= 'mb-6 w-full bg-transparent border-b-2 outline-0 py-2' />
                <br></br>
                <input type='password' placeholder= 'Password:' className= 'mb-6 w-full bg-transparent border-b-2 outline-0 py-2' />
                <div className= ' flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10 mt-2'>
                  <button className= 'w-full px-2 md:px-6 py-1 md:py-3 border border-black/20 bg-gray-200 hover:bg-gray-400 rounded-md'>LOGIN</button>
                  <button className= 'w-full px-2 md:px-6 py-1 md:py-3 border border-black/20 bg-gray-200 hover:bg-gray-400 rounded-md'>CREATE ACCOUNT</button>
                </div>
              </form>
            </div>
            
          </div>
        </div> 
      </div>

      <RelatedList category={recipe?.category} currentId= {id} />
        
      <AddComment/>
    </div>
  )
}


export default Singlepage;

// const [servingCount, setServingCount] = useState(() => {
  //   return recipes.filter(item => item.id.toString() === id)[0].specifics.serves || 1
  // })
// () => {
//     console.log('my-id', id)
//     return recipes.filter(item => item.id.toString() === id)[0]
//   }