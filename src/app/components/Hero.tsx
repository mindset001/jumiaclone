
import React from 'react';
// ...existing code...
import Image from 'next/image';
import Herobg from '../../../public/images/hero.jpg';

const categories = [
  { icon: '📦', label: 'Appliances' },
  { icon: '📱', label: 'Phones & Tablets' },
  { icon: '🧴', label: 'Health & Beauty' },
  { icon: '🏠', label: 'Home & Office' },
  { icon: '📺', label: 'Electronics' },
  { icon: '👗', label: 'Fashion' },
  { icon: '🍏', label: 'Supermarket' },
  { icon: '💻', label: 'Computing' },
  { icon: '🍼', label: 'Baby Products' },
  { icon: '🎮', label: 'Gaming' },
  { icon: '', label: 'Musical Instruments' },
  { icon: '⚪', label: 'Other categories' },
];

const Hero = () => {
  return (
  <section className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full bg-white md:bg-black py-4 lg:py-8 min-h-[320px] lg:min-h-[480px]">
  <aside className="hidden md:block bg-white rounded-sm py-2 lg:py-4 w-full lg:w-[260px] flex flex-row lg:flex-col gap-2 shadow mb-4 lg:mb-0">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex items-center gap-1 lg:gap-2 text-xs lg:text-lg px-2 py-1 lg:py-[2px] cursor-pointer rounded-lg hover:bg-gray-100 whitespace-nowrap">
            {cat.icon && <span className="text-base lg:text-xl">{cat.icon}</span>}
            <span className='text-[10px] lg:text-[12px] text-[#000]'>{cat.label}</span>
          </div>
        ))}
      </aside>
  <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-sm shadow relative w-full min-w-[0] min-h-[180px] lg:min-w-[600px] lg:min-h-[400px] overflow-hidden">
        <Image
          src={Herobg}
          alt="Hero Background"
          fill
          className="inset-0 h-full object-cover z-0"
          priority
        />
      </div>
  <aside className="hidden md:flex flex-row lg:flex-col gap-2 lg:gap-4 w-full lg:w-[260px]">
        <div className='bg-white rounded-sm w-full'>
          <div className="bg-white rounded-xl p-2 lg:p-4 flex items-center gap-2 lg:gap-4 w-full">
            <span className="text-xl lg:text-3xl text-orange-500">📞</span>
            <div>
              <div className="font-bold text-xs lg:text-[14px] text-gray-900">CALL TO ORDER</div>
              <div className="text-xs lg:text-sm text-[#000]">0700-600-0000, 0201888...</div>
            </div>
          </div>
          <div className="rounded-xl p-2 lg:p-4 flex items-center gap-2 lg:gap-4 w-full">
            <span className="text-xl lg:text-3xl text-orange-500">🏪</span>
            <div>
              <div className="font-bold text-xs lg:text-[14px] text-gray-900">Sell on Jumia</div>
            </div>
          </div>
          <div className="rounded-sm p-2 lg:p-4 flex items-center gap-2 lg:gap-4 w-full">
            <span className="text-xl lg:text-3xl text-orange-500">🚚</span>
            <div>
              <div className="font-bold text-xs lg:text-[14px] text-gray-900">Send Your Packages</div>
            </div>
          </div>
        </div>
        <div className="bg-orange-500 rounded-sm p-4 lg:p-8 flex items-center justify-center min-h-[60px] lg:min-h-[100px] w-full">
          <div className="text-lg lg:text-2xl font-bold text-white tracking-widest">JUMIA<span className="ml-1">★</span> FORCE</div>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
