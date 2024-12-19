import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="bg-gray-800 ">


      <h2 className="text-[30px] ml-3 text-orange-600 font-bold text-center p-5 lg:text-[60px]">
        Products
      </h2>

<div className="flex grid grid-cols-1 ml-[90px] mt-6 gap-y-8 pb-9 md:grid grid-cols-3 lg:grid-cols-4 lg:p-2 ">
      <div className=" ml-2 pb-2 ">
        <div >
          <Image className="rounded-2xl rounded-b-none lg:w-[400px] lg:h-[300px] "
            src={"/watch 1.jpeg"}
            width={250}
            height={200}
            alt="img"
          />
        </div>
        <div className=" w-[250px] bg-gray-700 ">
          <h2 className="text-gray-300 text-[20px] lg:text-[30px]">
          LIGE Fashion Top Brand
          </h2>
          <h4 className="text-blue-500 font-bold text-[20px] lg:text-[30px]">Rs.3000</h4>
          <p className="text-gray-300 text-[12px] lg:text-[15px]">
          Luxury Gold Watches Men's Stainless Steel.
          </p>
          <button className="w-[250px] py-2 bg-orange-500 text-gray-300 text-[20px]">
            {" "}
            <Link href={""}>Order Now</Link>{" "}
          </button>
        </div>
      </div>

      {/* product 2 */}

      <div className=" ml-2 pb-2">
        <div >
          <Image
            className="rounded-2xl rounded-b-none lg:w-[400px] lg:h-[300px]"
            src={"/watch 2.jpeg"}
            width={250}
            height={200}
            alt="img"
          />
        </div>
        <div className="w-[250px] bg-gray-700 ">
          <h2 className="text-gray-300 text-[20px] lg:text-[30px]">
          MEGIR men's quartz watches
          </h2>
          <h4 className="text-blue-500 font-bold text-[20px] lg:text-[30px]">Rs.3000</h4>
          <p className="text-gray-300 text-[12px] lg:text-[15px]">
           stainless steel mesh band black watch.          </p>
          <button className="w-[250px] py-2 bg-orange-500 text-gray-300 text-[20px]">
            {" "}
            <Link href={""}>Order Now</Link>{" "}
          </button>
        </div>
      </div>

      {/* product 3 */}

      <div className=" ml-2 pb-2  ">
        <div >
          <Image
            className="rounded-2xl rounded-b-none lg:w-[400px] lg:h-[300px]"
            src={"/watch 3.jpeg"}
            width={250}
            height={200}
            alt="img"
          />
        </div>
        <div className="w-[250px] bg-gray-700 ">
          <h2 className="text-gray-300 text-[20px] lg:text-[30px] ">
          NAVIFORCE Mens Watches
          </h2>
          <h4 className="text-blue-500 font-bold text-[20px] lg:text-[30px]">Rs.3000</h4>
          <p className="text-gray-300 text-[12px] lg:text-[15px]">
          Top Brand Luxury Sport Quartz Watch Leather.
          </p>
          <button className="w-[250px] py-2 bg-orange-500 text-gray-300 text-[20px] ">
            {" "}
            <Link href={""}>Order Now</Link>{" "}
          </button>
        </div>
      </div>

      {/* product 4 */}

      <div className=" ml-2 pb-2">
        <div >
          <Image
            className="rounded-2xl rounded-b-none lg:w-[400px] lg:h-[300px]"
            src={"/watch 4.jpeg"}
            width={250}
            height={200}
            alt="img"
          />
        </div>
        <div className="w-[250px] bg-gray-700 ">
          <h2 className="text-gray-300 text-[20px] lg:text-[30px]">
          New CURREN Top Brand
          </h2>
          <h4 className="text-blue-500 font-bold text-[20px] lg:text-[30px]">Rs.3000</h4>
          <p className="text-gray-300 text-[12px] lg:text-[15px]">
          Luxury Mens Watches Male Clocks Date Sport.
          </p>
          <button className="w-[250px] py-2 bg-orange-500 text-gray-300 text-[20px]">
            {" "}
            <Link href={""}>Order Now</Link>{" "}
          </button>
        </div>
      </div>

</div>      
    </section>
  );
};

export default page;
