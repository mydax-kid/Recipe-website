import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaPinterestP} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

import Link from 'next/link'

function Footer() {
  return(
    <div className='flex justify-between p-6 md:p-12 px-6 md:px-16 rounded-sm max-w-[1400px] mx-auto bg-white my-2 md:my-[30px]'>
     <h1 className='text-xs'>Cookit Kitchens, Est 2022</h1>
      <div className='flex items-center gap-[10px]'>
        <Link href='www.facebook.com'>
          <FaFacebookF size={20} className='text-sky-300'/>
        </Link>
        <Link href='www.instagram.com'>
          <BsInstagram size={20} className='text-purple-600'/>
        </Link>
        <Link href='www.pinterest.com'>
          <FaPinterestP size={20} className='text-rose-500'/>
        </Link>
        <Link href='www.twitter.com'>
          <FaTwitter size={20} className='text-blue-300'/>
        </Link>
      </div>
    </div>
  )
}

export default Footer;
