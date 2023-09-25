import {CgProfile} from 'react-icons/cg'
import Link from 'next/link'

const Herocard = ({item}) => {
  return(
    <Link href={`/${item.id}`}>
      <div className= 'absolute w-[300px] md:w-[360px] left-0 right-0 mx-auto top-[60px] min-h-[350px] bg-white p-3 md:px-6 cursor-pointer hover:bg-slate-100 transition ease duration-700 rounded-lg md:right-[100px] md:left-auto md:mx-0 group'>
        <h1 className= 'font-bold text-2xl p-2 border-b-2 border-dashed'>{item?.title}</h1>
        <p className= 'p-2 py-4'>{item?.description}</p>
        <div className= 'flex justify-between items-center p-2'>
          <CgProfile size= {35} className='self-start'/>
          <div className= 'text-[16px]'>
            <h2>Chef Sammy</h2>
            <p>July 12, 2015</p>
          </div>
          <p className= 'self-start'>Like: 346</p>
        </div>
        <p className= 'p-2 pt-6 group-hover:underline group-hover:decoration-red-500'>Read More</p>
      </div>
    </Link>
  )
}

export default Herocard