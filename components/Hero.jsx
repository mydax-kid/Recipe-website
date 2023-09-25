//import Image from 'next/image'
import {useEffect, useState} from 'react'

const images = [
  'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg? auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ,
   'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ,
  'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1600' 
]


const Hero = () => {
  const [element, setElement] = useState([])
  const [counter, setCounter] = useState(1)

  useEffect(() => {
   let el = document.getElementsByTagName("img")
   setElement(el)
  },[])

  const slideLeft = () => {
    let slideDistance;
    
    if (counter > images.length) {
      slideDistance = 100
    } else {
      slideDistance = 100 * counter
    }
    
    element.forEach(item => {
      item.style.transform= `translateX(${slideDistance}%)`
      item.style.transition=" all 2s ease-out"
    })
    setCounter(counter++)
  }

  const slideRight = () => {
    let slideDistance;
    
    if (counter === 0) {
      slideDistance = 100 * images.length
    } else {
      slideDistance = 100 * counter
    }
    
    element.forEach(item => {
      item.style.transform= `translateX(-${slideDistance}%)`
      item.style.transition=" all 2s ease-out"
    })
    setCounter(counter--)
  }
    
  return (
    <div className= 'max-h-[550px] flex overflow-x-hidden py-3'>
          {
            images.map((each, index) => {
              return (
                <div key={index} className= 'min-w-full'>
                  <img 
                    src= {each}
                    alt = '' 
                    className= 'w-full h-full object-cover object-center rounded-lg'
                    id= 'slide'
                  />
                </div>
              )
            })
          }
    </div>
  )
}

export default Hero;