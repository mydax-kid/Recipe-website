import {useState} from 'react'
import {IoIosArrowUp} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'

function IngredientList({recipe}) {
  
  const [cancel, setIsCancel] = useState({
    value: false,
    index: null
  });

  const [servingCount, setServingCount] = useState(1)

  const getNumberValue = (inputString, multiplier) => {
    if (multiplier <= 1) return inputString;
    
    const regex = /(\d+(\.\d+)?)/;
    const match = inputString.match(regex); //find num
    //if num is found
    if (match) {
      const number = parseFloat(match[0]);
      const multipliedNum = (number * multiplier).toFixed(10);
      const parsedNum = parseFloat(multipliedNum)
      const resultString = inputString.replace(regex, parsedNum);
      return resultString;
    } else {
      //return the original string
      return inputString;
    }
  }

  
  return (
    <div className= 'p-2 sm:p-4 md:p-8 lg:p-12 bg-rose-50 rounded-md mt-6 border'>
      <h1 className= 'py-8 text-3xl font-medium'>Ingredients</h1>
      <div className= 'p-6 bg-rose-200 rounded-lg border-1'>
        <p>
          Adjust servings: 
          <IoIosArrowDown 
            className= 'inline-block mx-[10px] bg-white rounded-full p-[3px] border-transparent hover:bg-gray-100 cursor-pointer' 
            size= {30} 
            onClick= {() => setServingCount(() => servingCount == 1 ? servingCount : servingCount - 1)}
          />
            {servingCount}
           <IoIosArrowUp 
            className= 'inline-block mx-[10px] bg-white rounded-full p-[3px] border-transparent hover:bg-gray-100 cursor-pointer' 
            size= {30}  
            onClick= {() => setServingCount(servingCount + 1)}
          />
        </p>
      </div>
      <div className= 'p-6'>
        <ul>
          {
            recipe?.ingredients.map((item, index) => {
              return(
                <li key= {index} className= 'p-4 text-lg font-medium border-b-2'>
                  <span 
                    className= {`${cancel.value && cancel.index == index ? 'bg-green-500' : 'bg-gray-100'} inline-block border border-black/70 p-[5px] rounded-full bg-gray-100 cursor-pointer`}
                    onClick={() => setIsCancel({value: true, index: index})}>
                  </span>
                  <span className='w-1 h-1 border bg-gray-100 mx-[12px]'></span>
                  <span className={`${cancel.value && cancel.index == index ? 'line-through' : null}`}>
                    { getNumberValue(item, servingCount) }
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default IngredientList;