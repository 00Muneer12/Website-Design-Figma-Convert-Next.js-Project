import Image from 'next/image'
import React from 'react'

const Details = () => {
  return (
    <div className='flex justify-between bg-gray-800'>
        <div className='text-center mt-[26%] md:mt-[20%] lg:mt-[15%] '>
            <h2 className='text-[30px] ml-3 text-orange-600 font-bold md:text-[40px] lg:text-[60px]'>New Tecnology</h2>
            <h3 className='text-gray-300 font-bold lg:text-[23px]'>For You And Your Familiy</h3>

            <button className='bg-orange-600 m-5 px-8 py-1 rounded lg:text-[22px]'>Explor Now --</button>
        </div>
        <div className='p-5 my-5 pl-8 bg-gray-100 rounded-2xl '>
            <div className=''>
                <Image className='lg:h-[300px] lg:w-[400px]'
                src={'/Product-1.jpeg'}
                width={300}
                height={200}
                alt=''
                />
            </div>
            <div className='mt-2 lg:mt-4'>
                <h2 className='text-[20px] text-blue-600 font-bold lg:text-[30px]'>New Fashion Dining Chair</h2>
                <h4 className='text-blue-600 font-bold lg:text-[20px]'>Rs. 19,000</h4>
                <p className='text-[15px] text-gray-600 lg:text-[20px]'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing.</p>
            </div>
        </div>
    </div>
  )
}

export default Details