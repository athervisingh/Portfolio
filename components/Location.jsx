import React from 'react'

const Location = () => {
  return (
      <div className='absolute top-[40%] w-72 h-[95px] text-white left-[-4%] bg-[#1c1d20] items-center flex justify-end p-3 rounded-full'>
          <div className='  flex justify-center items-center gap-4'>
              <div className=' flex flex-col text-white justify-start text-sm '>
                  <span>Located</span>
                  <span>in the</span>
                  <span>UttarPradesh,India</span>
              </div>
              <div className='rounded-full w-16 h-16 bg-[#999d9e] items-center flex justify-center'>
                  <img src="gif/globe.gif" className=' invert w-14 h-14' alt="dsddsdd" />
              </div>
              
          </div>
    </div>
  )
}

export default Location