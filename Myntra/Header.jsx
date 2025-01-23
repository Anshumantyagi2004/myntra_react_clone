import React from "react";
import img from "../Assets/myntra.webp";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white"> 
      <ul className="flex items-center p-2 shadow-lg sticky top-0 z-50 bg-white">
        <li className="h-16 w-16 mr-10 ml-14">
          <img src={img} alt="Myntra Logo" />
        </li>
        <li className="font-bold text-xs m-4">MEN</li>
        <li className="font-bold text-xs m-4">WOMEN</li>
        <li className="font-bold text-xs m-4">KIDS</li>
        <li className="font-bold text-xs m-4">HOME & LIVING</li>
        <li className="font-bold text-xs m-4">BEAUTY</li>
        <li className="m-4">
          <div className="text-pink-600 font-semibold text-xs ml-11">NEW</div>
          <div className="font-bold text-xs text-black mb-4">STUDIO</div>
        </li>
        <li>
          <input
            type="text"
            className="h-10 w-[550px] ml-8 border border-gray-300 focus:border-blue-500 focus:ring-0 p-4 rounded"
            placeholder="Search for product, brand and more"
          />
        </li>
        <li className="font-bold text-xs ml-12">Profile</li>
        <li className="font-bold text-xs m-6">Wishlist</li>
        <li className="font-bold text-xs m-6">Bag</li>
      </ul>
    </div>
  );
}

export default Header;
{/*import React from "react";
import img from "../Assets/myntra.webp";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <ul className="flex items-center p-2 shadow-lg space-x-4 md:space-x-6 lg:space-x-10 overflow-x-auto">
        <li className="h-16 w-16 flex-shrink-0 ml-4 md:ml-10 lg:ml-14">
          <img src={img} alt="Myntra Logo" className="h-full w-full object-contain" />
        </li>
        <li className="font-bold text-xs md:text-sm lg:text-base flex-shrink-0 mx-2 md:mx-4 lg:mx-6">MEN</li>
        <li className="font-bold text-xs md:text-sm lg:text-base flex-shrink-0 mx-2 md:mx-4 lg:mx-6">WOMEN</li>
        <li className="font-bold text-xs md:text-sm lg:text-base flex-shrink-0 mx-2 md:mx-4 lg:mx-6">KIDS</li>
        <li className="font-bold text-xs md:text-sm lg:text-base flex-shrink-0 mx-2 md:mx-4 lg:mx-6">HOME & LIVING</li>
        <li className="font-bold text-xs md:text-sm lg:text-base flex-shrink-0 mx-2 md:mx-4 lg:mx-6">BEAUTY</li>
        <li className="flex-shrink-0 mx-2 md:mx-4 lg:mx-6">
          <div className="text-pink-600 font-semibold text-xs md:text-sm lg:text-base">NEW</div>
          <div className="font-bold text-xs md:text-sm lg:text-base text-black mb-4">STUDIO</div>
        </li>
        <li className="flex-grow ml-4 md:ml-8 lg:ml-12">
          <input
            type="text"
            className="h-10 w-full md:w-[400px] lg:w-[550px] border border-gray-300 focus:border-blue-500 focus:ring-0 p-4 rounded"
            placeholder="Search for product, brand and more"
          />
        </li>
        <li className="font-bold text-xs md:text-sm lg:text-base mx-2 md:mx-4 lg:mx-6">Profile</li>
        <li className="font-bold text-xs md:text-sm lg:text-base mx-2 md:mx-4 lg:mx-6">Wishlist</li>
        <li className="font-bold text-xs md:text-sm lg:text-base mx-2 md:mx-4 lg:mx-6">Bag</li>
      </ul>
    </div>
  );
}

export default Header;
*/}
