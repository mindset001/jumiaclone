import React from 'react';
import Image from 'next/image';
import { StarFilled, UserOutlined, QuestionCircleOutlined, ShoppingCartOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons';


const Header = () => {
  return (
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
            <SearchOutlined className="text-2xl text-[#fff] ml-3" />
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
          <span className="flex items-center text-xl text-gray-900 font-normal cursor-pointer"><UserOutlined className="text-[2px] mr-2" /> Account <DownOutlined className="ml-1" /></span>
          <span className="flex items-center text-xl text-gray-900 font-normal cursor-pointer"><QuestionCircleOutlined className="text-2xl mr-2" /> Help <DownOutlined className="ml-1" /></span>
          <span className="flex items-center text-xl text-gray-900 font-normal cursor-pointer"><ShoppingCartOutlined className="text-2xl mr-2" /> Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
