import React from 'react'
import { GoArrowDownRight } from "react-icons/go";
const HeroHeanding = () => {
  return (
    <div className=' w-80 h-36 top-[28%] flex flex-col justify-between absolute right-0'>
          <div>
              <GoArrowDownRight size={30} className='invert'/>
          </div>
          
          <div className='text-white text-2xl font-normal'>
               Designer <br />
               FullStack Developer 

          </div>
    </div>
  )
}

export default HeroHeanding
