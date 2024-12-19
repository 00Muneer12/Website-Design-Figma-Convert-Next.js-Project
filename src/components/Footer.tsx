import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-around p-5 text-gray-300 bg-gray-700'>
        <div className=' lg:text-[20px]'>
            <h2 className='text-orange-600 font-bold'>Conditions</h2>
            <Link href={''}><p>Term & Servises</p></Link>
            <Link href={''}><p>Policies</p></Link>
            <Link href={''}><p>Refunde Police</p></Link>
            <Link href={''}><p>Delivery</p></Link>
        </div>


        <div className='bg-white w-1 rounded-2xl'></div>
          



        <div className='pl-2 lg:text-[20px]'>
            <h2 className='text-orange-600 font-bold '>Discount Winners</h2>
            <Link href={''}><p>100+ products /month</p></Link>
            <Link href={''}><p>New Customer</p></Link>
            <Link href={''}><p>Old Customer</p></Link>
            <Link href={''}><p>From Us</p></Link>
            
        </div>
        <div>
            <Image className='lg:w-[350px]'
            src={'/Furnite.png'}
            width={200}
            height={200}
            alt=''
            />
        </div>
    </footer>
  )
}

export default Footer