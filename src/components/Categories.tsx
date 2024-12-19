import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="bg-gray-800 md:justify-items-center ">
      <h2 className="text-[30px] ml-3 pt-9 text-orange-600 font-bold text-center md:text-[40px] lg:text-[60px]  ">
        New Categories
      </h2>

      <div className="flex ">
        {/* cato-1 */}
        <div className="p-5 my-5 pl-2 ">
          <div>
            <Image
              className="lg:w-[340px] lg:h-[300px]"
              src={"/homee.jpeg"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="mt-2 ">
            <h2 className="text-[15px] text-blue-600 font-bold lg:text-[25px]">
              Home Assocories
            </h2>
            <p className="text-[15px] text-gray-600 lg:text-[19px]">
              Lorem ipsum dolor sit, amet <br /> consectetur adipisicing.
            </p>
          </div>
        </div>

        {/* cato-2 */}

        <div className="p-5 my-5 pl-2 ">
          <div>
            <Image
              className="lg:w-[340px] lg:h-[300px]"
              src={"/wom.jpeg"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="mt-2">
            <h2 className="text-[15px] text-blue-600 font-bold lg:text-[25px]">
              Women Assocories
            </h2>
            <p className="text-[15px] text-gray-600 lg:text-[19px]">
              Lorem ipsum dolor sit, amet <br /> consectetur adipisicing.
            </p>
          </div>
        </div>

        {/* cato-3 */}

        <div className="p-5 my-5 pl-2 ">
          <div>
            <Image
              className="lg:w-[340px] lg:h-[300px]"
              src={"/me.jpeg"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="mt-2">
            <h2 className="text-[15px] text-blue-600 font-bold lg:text-[25px]">
              Men Assocories
            </h2>
            <p className="text-[15px] text-gray-600 lg:text-[19px]">
              Lorem ipsum dolor sit, amet <br /> consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
