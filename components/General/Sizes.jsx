
import React from 'react'
import {  RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const product = {
    
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
     
    ],
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Sizes = () => {

const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return (
    <div>

  
        
   <div className="mt-1">                  
   <RadioGroup value={selectedSize} onChange={setSelectedSize} className="">
   <RadioGroup.Label className="sr-only ">Choose a size</RadioGroup.Label>
   <div className="flex flex-wrap  justify-start  sm:grid  sm:grid-cols-7  gap-3  sm:grid-flow-col sm:justify-center ">
    {product.sizes.map((size) => (
    <RadioGroup.Option key={size.name} value={size} disabled={!size.inStock} className={({ active }) =>
    classNames( size.inStock
     ? 'cursor-pointer font-space  text-black text-[14px]  hover:shadow-2xl'
     : 'cursor-not-allowed text-black',
     active ? 'ring-1 ring-black' : '',
     'group relative flex items-center justify-center rounded-full border-black   font-space w-[45px] h-[45px] border py-3 px-4 text-[13px] uppercase  hover:drop-shadow-lg focus:outline-none sm:flex-1'
     )}>
      {({ active, checked }) => (
      <>
      <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
      {size.inStock ? (
      <span className={classNames(
       active ? 'border' : 'border-2',
       checked ? ' border-stone-600' : 'border-transparent',
       'pointer-events-none absolute -inset-px rounded-full')} aria-hidden="true"/>
        ) : (
        <span aria-hidden="true"
        className="pointer-events-none absolute i inset-[5px] rounded-full border-1 border-black">
        <svg className="absolute inset-0 h-full w-full stroke-1 text-black" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
         </svg>
        </span>
         )}
         </>
        )}
        </RadioGroup.Option>
       ))}
     </div>
   </RadioGroup>

    </div>

                                     
    </div>
  )
}

export default Sizes
