import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="bg-gray-900 py-10">
      <h2 className="text-4xl text-orange-600 font-extrabold text-center p-5 md:text-5xl lg:text-6xl">
        Discover Our Premium Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6">
        {/* Product 1 */}
        <div className="bg-gray-800 p-4 rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
          <div>
            <Image
              className="rounded-2xl mb-4 w-full h-[300px] object-cover transition-transform duration-300 hover:scale-110"
              src={"/watch 1.jpeg"}
              width={400}
              height={300}
              alt="Luxury Watch"
            />
          </div>
          <div>
            <h3 className="text-gray-200 text-2xl font-semibold">LIGE Fashion Top Mens Watches Wrist Watch Brand</h3>
            <h4 className="text-blue-500 font-bold text-xl mt-2">Rs.3000</h4>
            <p className="text-gray-400 text-sm mt-1">Luxury Gold Watches Men&#39;s Stainless Steel wrist watch brand.</p>
            <button className="w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-800 font-bold text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:from-yellow-500 hover:to-orange-500">
              <Link href={""}>Order Now</Link>
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-gray-800 p-4 rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
          <div>
            <Image
              className="rounded-2xl mb-4 w-full h-[300px] object-cover transition-transform duration-300 hover:scale-110"
              src={"/watch 2.jpeg"}
              width={400}
              height={300}
              alt="Luxury Watch"
            />
          </div>
          <div>
            <h3 className="text-gray-200 text-2xl font-semibold">MEGIR Men&#39;s Quartz Mens Watches Wrist Watch Brand</h3>
            <h4 className="text-blue-500 font-bold text-xl mt-2">Rs.3000</h4>
            <p className="text-gray-400 text-sm mt-1">Stainless steel mesh band black wrist watch premium stylish brand.</p>
            <button className="w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-800 font-bold text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:from-yellow-500 hover:to-orange-500">
              <Link href={""}>Order Now</Link>
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-gray-800 p-4 rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
          <div>
            <Image
              className="rounded-2xl mb-4 w-full h-[300px] object-cover transition-transform duration-300 hover:scale-110"
              src={"/watch 3.jpeg"}
              width={400}
              height={300}
              alt="Luxury Watch"
            />
          </div>
          <div>
            <h3 className="text-gray-200 text-2xl font-semibold">NAVIFORCE Men&#39;s Watches Wrist Watch Brand</h3>
            <h4 className="text-blue-500 font-bold text-xl mt-2">Rs.3000</h4>
            <p className="text-gray-400 text-sm mt-1">Top Brand Luxury Sport Quartz Watch Leather wrist watch brand.</p>
            <button className="w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-800 font-bold text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:from-yellow-500 hover:to-orange-500">
              <Link href={""}>Order Now</Link>
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-gray-800 p-4 rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
          <div>
            <Image
              className="rounded-2xl mb-4 w-full h-[300px] object-cover transition-transform duration-300 hover:scale-110"
              src={"/watch 4.jpeg"}
              width={400}
              height={300}
              alt="Luxury Watch"
            />
          </div>
          <div>
            <h3 className="text-gray-200 text-2xl font-semibold">New CURREN Top Mens Watches Wrist Watch Brand</h3>
            <h4 className="text-blue-500 font-bold text-xl mt-2">Rs.3000</h4>
            <p className="text-gray-400 text-sm mt-1">Luxury Mens Watches Male Clocks Date Sport wrist stylish watch.</p>
            <button className="w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-800 font-bold text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:from-yellow-500 hover:to-orange-500">
              <Link href={""}>Order Now</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
