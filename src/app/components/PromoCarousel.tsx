import React from 'react';
import Image from 'next/image';
import Jumia from '../../../public/images/jumia.png';
const promos = [
  {
    image: Jumia,
    title: 'JUMIA FORCE',
    subtitle: 'JOIN NOW',
    caption: 'Earn While You Shop',
  },
  {
    image: Jumia,
    title: 'XTRA 10%',
    subtitle: 'AT CHECKOUT',
    caption: 'Unlock Your Deal',
  },
  {
    image: Jumia,
    title: 'APPLIANCES & TELEVISIONS BONANZA',
    subtitle: '',
    caption: 'Appliances Bonanza',
  },
  {
    image: Jumia,
    title: 'DEALS RELOADED',
    subtitle: '',
    caption: 'Deals Reloaded',
    highlight: true,
  },
  {
   image: Jumia,
    caption: 'Sporting Goods',
  },
  {
    image: Jumia,
    caption: 'Groceries',
  },
  {
   image: Jumia,
    caption: 'Video Games',
  },
  {
    image: Jumia,
    caption: 'Toys & Games',
  },
];

const PromoCarousel = () => {
  return (
    <div className="flex items-center bg-white rounded-xl py-4 my-6 shadow">
      <button className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-3xl text-gray-500 mx-2">
        <span>&#8592;</span>
      </button>
      <div className="flex gap-4 overflow-x-auto px-2">
        {promos.map((promo, idx) => (
          <div
            key={idx}
            className={
              promo.highlight
                ? 'min-w-[170px] max-w-[170px] h-[210px] rounded-xl shadow-lg flex flex-col items-center justify-end p-4 relative border-2 border-gray-200 bg-blue-100 z-10'
                : 'min-w-[170px] max-w-[170px] h-[210px] rounded-xl shadow flex flex-col items-center justify-end p-4 relative'
            }
            style={promo.bg ? { background: promo.bg } : {}}
          >
            {promo.image && (
              <Image
                src={promo.image}
                alt={promo.title || promo.caption}
                width={170}
                height={90}
                className="w-full h-[90px] object-cover rounded-lg mb-2"
                style={{objectFit: 'cover'}}
              />
            )}
            {promo.title && (
              <div className="text-lg font-bold text-white text-center mb-1">{promo.title}</div>
            )}
            {promo.subtitle && (
              <div className="text-base text-white text-center mb-1">{promo.subtitle}</div>
            )}
            <div className="text-base text-gray-900 text-center mt-2">{promo.caption}</div>
          </div>
        ))}
      </div>
      <button className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-3xl text-gray-500 mx-2">
        <span>&#8594;</span>
      </button>
    </div>
  );
};

export default PromoCarousel;
