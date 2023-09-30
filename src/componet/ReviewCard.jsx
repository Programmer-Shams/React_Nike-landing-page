import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="customer" className='rounded-full object-contain w-[120px] h-[120px]'/>
        <p className='mt-4 max-w-xs text-center info-text'>{feedback}</p>
        <div className='flex justify-center items-center gap-2.5 mt-3'>
            <img src={star} height={24} width={24}  className='object-contain m-0'/>
            <p className='font-montserrat text-slate-gray text-xl'>({rating})</p>
        </div>
        <div className='mt-1 text-3xl font-palanquin font-bold text-center'>{customerName}</div>
    </div>
  )
}

export default ReviewCard