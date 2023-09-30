import React, { useState } from 'react'
import Button from '../componet/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../componet/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container relative '>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-[10rem]'>
        <p className='text-x font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='font-palanquin mt-10 text-7xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className=' xl:bg-white xl:whitespace-nowrap relative z-10 pr-9'>The New Arrival</span>
          <br />
          <span className='text-coral-red mt-1 inline-block'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-xl leading- mt-6 mb-10 sm:max-w-sm'>Discover stylish Nike Arrival quality comfort, and inovation for your active life</p>
        <Button label="Shop Now" iconURL={arrowRight}/>
        <div className='flex justify-start items-start flex-wrap w-full mt-16 gap-16'>
          {
            statistics.map((stat) =>(
              <div key={stat.label}>
                <p className='font-palanquin font-bold text-4xl '>{stat.value}</p>
                <p className='leading-7 text-slate-gray font-montserrat'>{stat.label}</p>
              </div>
            ))
            }
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover border-2'>
        <img src={bigShoeImg} alt="show collection" width={510} height={500} className='object-contain relative z-10 '/>
      </div>
      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[50%] max-sm:px-6'>
        {
          shoes.map((shoe, index) =>(
            <div key={index}>
              <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(shoe) =>{setBigShoeImg(shoe)}}
              bigShoeImg={bigShoeImg}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Hero