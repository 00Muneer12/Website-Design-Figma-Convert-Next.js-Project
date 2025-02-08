import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-gray-800 pb-10 flex flex-col items-center text-center py-12 p-6">
      <h2 className="text-[60px] text-orange-600 font-bold mb-5">About Muneer Watches</h2>

      {/* Profile Image */}
      <div className="relative w-40 h-40 mb-4">
        <Image
          className="rounded-full border-4 border-orange-600 p-2 shadow-lg"
          src={"/pic1.jpg"} // Replace with your actual image path
          width={160}
          height={160}
          alt="Profile Image"
        />
      </div>

      {/* Bio Section */}
      <div className="max-w-lg">
        <p className="text-[18px] text-gray-400 leading-relaxed">
      we bring you a collection of dynamic, stylish, and high-quality watches designed for every occasion. Our timepieces blend the latest trends with timeless elegance, ensuring you always stay ahead in style. Crafted with precision and durability, our watches are more than accessories. Whether you seek sophistication, innovation, or reliability, we have the perfect watch for you. Experience excellence with our exclusive collection today!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
