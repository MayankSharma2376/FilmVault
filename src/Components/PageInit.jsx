import React from 'react'
import For from "../assets/Afor.png"
import Back from "../assets/Aback.png"

function PageInit({handlePrev, handleNext, pageNo}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div onClick={handlePrev}><img src={Back} className='px-8 ' alt="" /></div>
       <div className='font-bold'>{pageNo}</div>
        <div onClick={handleNext}><img src={For} className='px-8 ' alt="" /></div>
    </div>
  )
}

export default PageInit