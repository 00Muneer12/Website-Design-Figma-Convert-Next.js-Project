import Image from "next/image";
import Link from "next/link";
import { Input } from "postcss";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <section className="flex bg-cyan-800 justify-between ">
      <Image
        className="ml-[-10px] w-[250px] xl:w-[400px] 2xl:w-[500px] "
        src={"/Furnite.png"}
        width={300}
        height={200}
        alt=""
      />
      <div className="invisible md:visible ">
        <input
          className="text-[12px] text-center m-[15px] ml-[-10px] rounded-full h-7 mt-9 ml-[-50px] lg:w-[300px] lg:h-9 2xl:text-[30px] 2xl:py-7  "
          required
          type="text"
        />
        <button className="bg-white rounded-full p-1 ml-[-14px] 2xl:text-[20px]">
          search
        </button>
      </div>

      <nav className="flex text-[10px]  items-center mr-7  lg:text-[15px] xl:text-[20px] 2xl:text-[30px] 2xl:p-2 ">
        <ul className=" text-gray-100 font-bold grid gap-y-2  md:grid md:gap-x-6 md:gap-y-4 md:grid-cols-4   ">
          <Link href={"/"} className="hover:text-gray-300">Home</Link>
          <Link href={"/products"} className="hover:text-gray-300">Product</Link>
          <Link href={"/about"} className="hover:text-gray-300">About</Link>
          <Link href={"/contact"} className="hover:text-gray-300">Contact</Link>
        </ul>
      </nav>

      <Link className="m-2 text-gray-300 mt-9 xl:text-[30px]" href={""}>
        {" "}
        <FaCartArrowDown />{" "}
      </Link>
    </section>
  );
};

export default Navbar;
