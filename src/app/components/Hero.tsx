
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
    <section className="flex gap-6 w-full bg-black py-8 min-h-[480px]">
      <aside className="bg-white rounded-xl py-4 w-[260px] flex flex-col gap-2 shadow">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex items-center gap-2 text-lg px-2 py-[2px] cursor-pointer rounded-lg hover:bg-gray-100">
            {cat.icon && <span className="text-xl">{cat.icon}</span>}
            <span className='text-[12px] text-[#000]'>{cat.label}</span>
          </div>
        ))}
      </aside>
      <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-xl shadow relative min-w-[600px] min-h-[400px] overflow-hidden">
        <Image
          src={Herobg}
          alt="Hero Background"
          fill
          className="inset-0 h-full object-cover z-0"
          priority
        />
      </div>
      <aside className="flex flex-col gap-4 w-[260px]">
        <div className='bg-white rounded-lg'>
            <div className="bg-white rounded-xl p-4 flex items-center gap-4">
          <span className="text-3xl text-orange-500">📞</span>
          <div>
            <div className="font-bold text-[14px] text-gray-900">CALL TO ORDER</div>
            <div className="text-sm text-[#000]">0700-600-0000, 0201888...</div>
          </div>
        </div>
        <div className=" rounded-xl p-4 flex items-center gap-4">
          <span className="text-3xl text-orange-500">🏪</span>
          <div>
            <div className="font-bold text-[14px] text-gray-900">Sell on Jumia</div>
          </div>
        </div>
        <div className=" rounded-xl p-4 flex items-center gap-4">
          <span className="text-3xl text-orange-500">🚚</span>
          <div>
            <div className="font-bold text-[14px] text-gray-900">Send Your Packages</div>
          </div>
        </div>
        </div>
        <div className="bg-orange-500 rounded-xl p-8 flex items-center justify-center min-h-[100px]">
          <div className="text-2xl font-bold text-white tracking-widest">JUMIA<span className="ml-1">★</span> FORCE</div>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
