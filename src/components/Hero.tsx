import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-gradient bg-gradient-to-r from-gold-500 via-silver-500 to-platinum-500 bg-clip-text leading-tight">
            The Art of Time
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-400 opacity-85 hover:opacity-100 transition-opacity duration-300">
            Experience timeless luxury with our exclusive collection of precision timepieces.
          </h2>
          <Link href={'#'}>
            <button className="bg-gradient-to-r from-gold-500 to-silver-500 text-black font-semibold px-8 py-4 text-lg md:text-xl rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-silver-500 hover:to-gold-500 transform">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Watch Image */}
        <div className="flex justify-center transition-all duration-500 transform hover:scale-110 hover:rotate-3">
          <Image
            className="rounded-lg shadow-2xl w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px] transition-transform duration-500 hover:shadow-2xl hover:scale-105"
            src="/hero.jpg"
            width={700}
            height={700}
            alt="Luxury Watch"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
