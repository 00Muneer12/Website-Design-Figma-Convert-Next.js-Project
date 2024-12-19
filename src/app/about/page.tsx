import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="bg-gray-800">
      <div className="flex grid grid-cols-2 gap-4 text-center">
        <div>
          <h2 className="text-[60px] ml-3 text-orange-600 font-bold  p-5 pt-10">
            About Us
          </h2>
        </div>
        <div className="text-[40px]">
          <h2 className="text-[25px] ml-3 text-gray-400 font-bold p-3 pt-9">
            Our Physical Branchs
          </h2>
          <p className="text-[15px] ml-3 text-gray-400 p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            obcaecati sequi adipisci.
          </p>
        </div>
      </div>

{/* Profiles ............................................................................ */}
      <div className="flex justify-around">
      <div className="flex">
        <div>
          <Image
            className="rounded-full"
            src={"/man.jpeg"}
            width={50}
            height={200}
            alt=""
          />
        </div>
        <div className="m-4">
          <h3 className="text-gray-400">Jai dev</h3>
          <p className="text-yellow-500 text-[20px]">* * * *</p>
        </div>
      </div>

      {/* profil-2 */}

      <div className="flex">
        <div>
          <Image
            className="rounded-full"
            src={"/girl.jpeg"}
            width={50}
            height={200}
            alt=""
          />
        </div>
        <div className="m-4">
          <h3 className="text-gray-400">julia</h3>
          <p className="text-yellow-500 text-[20px]">* * * *</p>
        </div>
      </div>

      {/* profile-3 */}

      <div className="flex">
        <div>
          <Image
            className="rounded-full"
            src={"/man 2.jpeg"}
            width={50}
            height={200}
            alt=""
          />
        </div>
        <div className="m-4">
          <h3 className="text-gray-400">Ghansham</h3>
          <p className="text-yellow-500 text-[20px]">* * * *</p>
        </div>
      </div>

      </div>

      <Image className="rounded-2xl"
      src={'/map.jpeg'}
      width={400}
      height={100}
      alt=""/>
{/* .................................................................................... */}
      <div className="text-left text-green-600 p-2 ">
        <h4>& Locations</h4>
        Tando Allahyar/Nasirpur Road
      </div>
      {/* <button className='bg-orange-600 p-3 rounded-xl mx-[20px] mb-4 mt-4 text-gray-200 '> <Link className='' href={''}>Contact Us</Link> </button> */}
    </section>
  );
};

export default page;
