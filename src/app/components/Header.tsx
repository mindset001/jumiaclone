import React from 'react';
import Image from 'next/image';
import { StarFilled, UserOutlined, QuestionCircleOutlined, ShoppingCartOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons';


const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm font-sans">
      {/* Mobile Header */}
      <div className="md:hidden w-full">
        <div className="flex items-center justify-between px-2 py-2">
          <div className='flex'>
            {/* Hamburger */}
          <span className="text-2xl text-gray-700">
            <svg width="24" height="24" fill="currentColor">
              <rect x="4" y="7" width="16" height="2" rx="1"/>
              <rect x="4" y="12" width="16" height="2" rx="1"/>
              <rect x="4" y="17" width="16" height="2" rx="1"/>
            </svg>
          </span>
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-gray-900">JUMIA</span>
            <span className="bg-orange-400 rounded-full p-1 flex items-center justify-center">
              <StarFilled className="text-white text-xs" />
            </span>
          </div>
          </div>
          {/* User & Cart */}
          <div className="flex items-center gap-3">
            <UserOutlined className="text-xl text-[#000]" />
            <ShoppingCartOutlined className="text-xl text-[#000]" />
          </div>
        </div>
        {/* Search Bar */}
        <div className="px-2 pt-1 pb-2">
          <div className="flex items-center w-full bg-white border border-gray-300 rounded-full px-3 py-2">
            <SearchOutlined className="text-lg text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products, brands and categories"
              className="bg-transparent outline-none w-full text-gray-700 text-sm"
            />
          </div>
        </div>
        {/* Call to Order Bar */}
        <div className="w-full bg-orange-500 text-center text-black font-semibold py-2 text-sm">
          CALL TO ORDER: 07006000000, 02018883300
        </div>
      </div>
      {/* Desktop/Tablet Header (hidden on mobile) */}
      <div className="hidden md:block">
      <header className="w-full bg-white shadow-sm font-sans">
      <div className="flex items-center justify-between bg-gray-100 px-8 py-2 text-[15px]">
        <span className="text-orange-500 font-medium flex items-center">
          <span className='bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center mr-1'><StarFilled className="!text-white text-base" /></span> Sell on Jumia
        </span>
        <div className="flex items-center gap-5 text-gray-400 text-[15px]">
          <span className="font-bold text-gray-900 text-lg tracking-widest flex"><span>JUMIA</span> <span className='bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center mr-1'><StarFilled className="!text-white text-base" /></span> </span>
          <span className="opacity-60">PAY</span>
          <span className="opacity-60">DELIVERY</span>
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-between px-8 pt-5 pb-2 bg-white">
        <div className="flex-none">
          <span className="font-bold text-gray-900 text-4xl tracking-widest flex"><span>JUMIA</span><span className='bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center mr-1'><StarFilled className="!text-white text-[30px]" /></span> </span>
        </div>
       <div className='flex items-center'>
         <div className="flex items-center flex-1 mx-8 bg-white rounded-lg border">
          <div className='bg-yellow rounded full p-2' >
            <SearchOutlined className="text-xl text-[#fff] " />
          </div>
          <input
            type="text"
            className="flex-1 px-4 py-2 text-xl border-none gap-2 outline-none bg-transparent"
            placeholder="Search products, brands and categories"
          />
         
        </div>
         <button className="bg-orange-500 text-white rounded-sm px-4 py-2 text-xl font-medium mr-2">Search</button>
       </div>
        <div className="flex items-center gap-8">
          <span className="flex items-center text-[16px] text-gray-900 font-normal cursor-pointer"><UserOutlined className="text-sm mr-2" /> Account <DownOutlined className="ml-1 text-[10px]" /></span>
          <span className="flex items-center text-[16px] text-gray-900 font-normal cursor-pointer"><QuestionCircleOutlined className="text-sm mr-2" /> Help <DownOutlined className="ml-1 text-[10px]" /></span>
          <span className="flex items-center text-[16px] text-gray-900 font-normal cursor-pointer"><ShoppingCartOutlined className="text-sm mr-2" /> Cart</span>
        </div>
      </div>
    </header>
      </div>
    </header>
  );
};

export default Header;
