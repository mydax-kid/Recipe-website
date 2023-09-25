import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Herocard from './Herocard';
import {recipes} from '../recipes.js'

const newRecipes = recipes.slice(0,5)

const Hero3 = () => {
  let settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplaySpeed: 5000
  };
  
  return(
    <Slider {...settings}>
      { newRecipes.map(each => (
          <div key={each.id} className='h-[650px] relative rounded-sm'>
            <img src={each.image} alt='' className='w-full h-full object-center object-cover' />
            <Herocard item={each} />
          </div>
      ))}
    </Slider>
  )
}

export default Hero3;