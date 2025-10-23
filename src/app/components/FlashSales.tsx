'use client';
import React, { useEffect, useState } from 'react';
// ...existing code...
import Image from 'next/image';
import PhillyImage from '../../../public/images/philly.jpg';
import Redmi from '../../../public/images/redmi.jpg';
import Nivea from '../../../public/images/Nivea.jpg';
import Silver from '../../../public/images/two.jpg';
import Fan from '../../../public/images/fan.jpg';
import Four from '../../../public/images/four.jpg'


const products = [
  {
    image: PhillyImage,
    name: 'Philly 20000mAh Power C...',
    price: 6946,
    oldPrice: 12971,
    discount: 46,
    itemsLeft: 500,
    totalItems: 500,
  },
  {
    image: Silver,
    name: 'SILVER CREST 2L Industri...',
    price: 24890,
    oldPrice: 26390,
    discount: 6,
    itemsLeft: 50,
    totalItems: 50,
  },
  {
    image: Fan,
    name: 'Hp Stream 11 Pro- Intel C...',
    price: 135000,
    oldPrice: null,
    discount: null,
    itemsLeft: 49,
    totalItems: 50,
  },
  {
    image: Four,
    name: 'NIVEA DoShakara Pack - ...',
    price: 13646,
    oldPrice: null,
    discount: null,
    itemsLeft: 47,
    totalItems: 50,
  },
  {
    image: Redmi,
    name: 'XIAOMI REDMI A5 - 6.88 ...',
    price: 106585,
    oldPrice: 106685,
    discount: 1,
    itemsLeft: 25,
    totalItems: 50,
  },
  {
    image: Nivea,
    name: 'NIVEA MEN Black & Whit...',
    price: 4930,
    oldPrice: 6274,
    discount: 21,
    itemsLeft: 50,
    totalItems: 50,
  },
];

function formatPrice(price: number) {
  return `₦ ${price.toLocaleString()}`;
}

function pad(num: number) {
  return num.toString().padStart(2, '0');
}

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(4 * 60 * 60 + 50 * 60 + 27); // 4h 50m 27s

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="bg-white rounded-xl mt-8 mb-8 shadow pb-4">
      <div className="flex items-center justify-between bg-red-600 text-white rounded-t-xl px-6 py-4 text-lg font-semibold">
        <div className="flex items-center gap-2"><span className="text-2xl">⚡</span> <span className="text-2xl font-bold">Flash Sales</span></div>
        <div className="text-lg font-semibold">Time Left: <span className="font-bold text-2xl">{pad(hours)}h : {pad(minutes)}m : {pad(seconds)}s</span></div>
        <a href="#" className="flex items-center gap-1 text-lg font-semibold text-white hover:underline">See All <span className="text-xl">&#8594;</span></a>
      </div>
      <div className="flex gap-4 overflow-x-auto px-6 pt-4">
        {products.map((p, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow min-w-[220px] max-w-[220px] p-3 flex flex-col items-start relative">
            <div className="relative w-full h-[120px] flex items-center justify-center mb-2">
              <Image
                src={p.image}
                alt={p.name}
                width={220}
                height={120}
                className="max-w-full max-h-full rounded-lg object-contain"
                style={{objectFit: 'contain'}}
                unoptimized
              />
              {p.discount && (
                <span className="absolute top-2 right-2 bg-orange-100 text-red-600 text-base font-bold px-2 py-1 rounded">-{p.discount}%</span>
              )}
            </div>
            <div className="text-base font-medium text-gray-900 mb-1 truncate w-full">{p.name}</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-bold text-gray-900">{formatPrice(p.price)}</span>
              {p.oldPrice && (
                <span className="text-sm text-gray-400 line-through">{formatPrice(p.oldPrice)}</span>
              )}
            </div>
            <div className="text-sm text-gray-400 mb-1">{p.itemsLeft} items left</div>
            <div className="w-full h-2 bg-gray-200 rounded mt-1">
              <div
                className="h-2 bg-red-600 rounded transition-all"
                style={{ width: `${(p.itemsLeft / p.totalItems) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashSales;
