import React from "react";

const page = () => {
  return (
    <form className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 px-4">
      <h2 className="text-2xl text-center text-orange-600 font-bold mb-4">Contact Us</h2>

      <div className="max-w-md mx-auto bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700">
        <div className="mb-4">
          <label className="text-gray-300 text-sm font-medium">Your Name</label>
          <input
            className="w-full py-2 px-3 text-gray-800 rounded bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-300 text-sm font-medium">Email Address</label>
          <input
            className="w-full py-2 px-3 text-gray-800 rounded bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-300 text-sm font-medium">Your Message</label>
          <textarea
            className="w-full py-2 px-3 text-gray-800 rounded bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            rows={3}
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 text-sm font-semibold text-white bg-orange-600 rounded hover:bg-orange-700 transition-all"
        >
          Send Message
        </button>
      </div>

      <div className="mt-6 text-center text-gray-400 text-sm">
        <p>Phone #: 03473239151</p>
        <p>Gmail: abc@gmail.com</p>
      </div>
    </form>
  );
};

export default page;
