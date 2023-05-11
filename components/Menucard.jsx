import Link from 'next/link'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {BiPlusMedical} from 'react-icons/bi'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaPinterestP} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'

const Menucard= ({title, description, image, specifics, category, id}) => {
  return(
    <div className= 'w-[45%] pt-8 group/card'>
      <div className= 'relative group h-[250px]'>
        <img 
          src= {image}
          alt= {title} 
          className= 'rounded-lg w-full h-full object-center object-cover'
        />
        <Link href= {`/${id}`} >
          <div className= 'absolute left-[10px] right-[10px] top-[10px] bottom-[10px] bg-white/50 rounded-lg rotate-45 scale-50 opacity-0 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100 ease-out duration-500 flex justify-center items-center'>
            <AiOutlinePlusCircle size= {60} className= 'text-white' />
          </div>
        </Link>
        <div className= 'bg-black p-2 text-white flex justify-between items-center gap-[5px] w-max rounded-md absolute top-[5px] left-[10px] translate-y-[-50px] opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 ease-out duration-300 group/socials'>
          <BiPlusMedical/>
          <p className= 'font-medium ml-[5px] relative top-[2px] tracking-wide text-xl peer'>SHARE</p>
          <span className= 'flex justify-center items-center px-[5px] gap-[10px] hidden group-hover/socials:flex ease-out duration-400'>
            <FaFacebookF className= ''/>
            <BsInstagram  className= ''/>
            <FaPinterestP className= ''/>
          </span>
        </div>
      </div>
      <h2 className= 'text-3xl py-3 font-bold'>{title}</h2>
      <div className= 'flex justify-between border-2 border-dashed py-4 px-2 rounded-md'>
        <p>Cooking time: {specifics.cookingTime}</p>
        <p className= 'border-2 border-black rounded-md px-2'>{category}</p>
        <p>{specifics.cuisineOrigin}</p>
      </div>
      <p className= 'py-4 border-b-2'>
        { description.length > 120 ? description.slice(0, 120).concat('....') : description }
      </p>
      <div className= 'flex justify-between py-4 border-b-2 px-1'>
        <p>January 25, 2015</p>
        <p><AiOutlineHeart size= {30} className= 'inline-block'/> {specifics.likes}</p>
      </div>
      <div className= 'flex justify-between items-center py-4'>
        <Link href= {`/${id}`} >
          <p className= 'border-2 border-black px-2 py-1 cursor-pointer hover:rounded-md hover:border-red-500 duration-700'>Read More</p>
        </Link>
        <p>15 views</p>
        <Link href= {`/${id}#comment`}><p className= 'cursor-pointer'>55 Comments</p></Link>
      </div>
    </div>
  )
}

export default Menucard;


// 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg? auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 