import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col md:flex-row items-center justify-between gap-8'>
        {/*text  */}
        <div className='md:w-1/2 space-y-7 px-4'>
        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug' >Dive into Delights Of Delectable <span className='text-green' >Food</span></h2>
       <p className='text-xl text-[#4a4a4a]' >Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
        <button className='btn bg-green border-none rounded-full px-8 py-3 text-white font-semibold' >Order Now</button>
        </div>
        {/* images */}
        <div className='md:w-1/2'>right</div>
      </div>
    </div>
  )
}

export default Banner