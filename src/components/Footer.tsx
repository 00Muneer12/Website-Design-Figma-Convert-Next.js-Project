import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <div className=" mt-2 flex">
          <Image
            className="w-[30px] h-[30px] rounded-full"
            src={'/logo2.jpg'}
            width={30}
            height={30}
            alt="Logo"
             />
             {/* Footer Bottom Text */}
      <div className=" mt-2 px-2 text-center text-white text-[10px]">
        <p>MUNEER  WATCHES  &copy; {new Date().getFullYear()}  ALL  RIGHTS  RESERVED</p>
      </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
