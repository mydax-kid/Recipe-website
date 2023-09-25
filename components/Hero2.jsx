import { useState } from 'react'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Herocard from './Herocard';

const images = [
  'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg? auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ,
  'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ,
  'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1600' 
]


const Hero2 = () => {

  const [index, setIndex] = useState(0)

  const slideRight = () => {
    if (index === images.length - 1) {
      setIndex(0)
    } else {
    setIndex(index + 1)
    }
  }

  const slideLeft = () => {
    if (index === 0) {
      setIndex(images.length - 1)
    } else {
    setIndex(index - 1)
    }
  }

  const changeSlide = (indx) => {
    setIndex(indx)
  }
  
  return (
    <div className= 'h-[600px] py-3 px-4 bg-white mb-2'>
      <div className= 'min-w-full h-[100%] relative'>
        <img 
          src= {images[index]}
          alt = '' 
          className= 'w-full h-[100%] object-cover object-center rounded-lg'
        />
        <div onClick= {slideRight} className= 'absolute top-[45%] right-[15px] hover:text-4xl hover:text-white bg-white/50 rounded-full p-0.5 hover:bg-white/80'><GrFormNext size= {60}/></div>
        <div onClick= {slideLeft} className= 'absolute top-[45%] left-[15px] hover:text-4xl hover:text-white bg-white/50 rounded-full p-0.5 hover:bg-white/80'><GrFormPrevious size= {60}/></div>
        <div className= 'absolute bottom-[10px] left-0 right-0 text-center space-x-[10px]'>
          {
            images.map((each, idx) => {
              return ( <span
                       key={idx}
                       onClick= {() => changeSlide(idx)} 
                       className= { idx === index 
                                                ? 'inline-block h-[20px] w-[15px] border rounded-full cursor-pointer'
                                                : 'inline-block h-[20px] w-[15px] bg-white rounded-full cursor-pointer' }>
                      </span> 
                     )
            })
          }
        </div>
        <Herocard />
      </div>
    </div>
  )
}

export default Hero2;