import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
<section className='bg-gradient-to-r from-blue-500 via-gray-100 to-gray-300 '>

    <div className='text-center text-[20px]  md:flex '>
        <div className='md:mt-8  '>
            <h1 className='text-[30px] font-extrabold text-orange-500 p-4 md:text-[36px] lg:text-[50px] xl:text-[80px] xl:mt-[60px]   2xl:text-[90px] 2xl:mt-[70px]   '>Enjoy Your Shopping</h1>
            <h2 className='text-[20px] text-gray-600 lg:text-[25px] xl:text-[30px] 2xl:text-[36px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores?</h2>
        </div>
        <div >
            <Image className=' ml-[60px] md:mt-8 md:w-[500px] lg:w-[800px] lg:h-[400px] xl:w-[1200px] xl:h-[650px] '
            src={'/home.jpg'}
            width={500}
            height={300}
            alt='img'
            
            />
        </div>
    </div>

    <div>
        <button className='bg-orange-600 p-3 rounded-xl mx-[20px] mb-4 mt-4 text-gray-200 md:ml-[200px] lg:text-[25px] lg:px-9 xl:text-[30px] 2xl:text-[40px] '> <Link className='' href={''}>Start Shopping</Link> </button>

    </div>

  </section>    
  )
}

export default Hero