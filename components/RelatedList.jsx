import { recipes } from '../recipes.js';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const RelatedList = ({ category, currentId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (category) {
      const newItems = recipes.filter(each => each.category === category)
                              .filter(each => each.id != currentId)
                              .slice(0,4)
      setItems(newItems);
    } else {
      setItems([]);
    }
  }, [category, currentId]);

  return (
    <div className='min-h-[500px] comment-banner p-8 cursor-pointer'>
      <span className='text-3xl font-bold p-2 bg-white rounded-md inline-block my-6'>Related Recipes</span>
      <div className='flex justify-center gap-4 md:gap-8 lg:gap-10 flex-wrap items-center'>
        {items?.map(each => (
          <Link href={`/${each?.id}`} key={each?.id}>
            <div className='bg-white p-4 rounded-md w-[250px] cursor-pointer hover:shadow-lg'>
              <img
                src={each?.image}
                alt=''
                className='rounded-md w-full h-[200px] object-cover object-center'
              />
              <p className='py-2 font-medium'>{each?.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedList;

