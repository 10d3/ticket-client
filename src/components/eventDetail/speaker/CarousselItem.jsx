import React from 'react'

function CarousselItem({data}) {
  return (
    <div className='flex flex-col '>
        <img className='w-full h-fit' src={data.img} alt="" />
        <h1 className='text-2xl font-bold'>{data.title}</h1>
    </div>
  )
}

export default CarousselItem