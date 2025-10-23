'use client'

import React from 'react';
import Image from 'next/image';
import Jumia from '../../../public/images/jumia.png';
import Xtra from '../../../public/images/xtra.png';
import Deals from '../../../public/images/deals.png';
import Television from '../../../public/images/television.png';
const promos = [
    {
        image: Jumia,
        caption: 'Earn While You Shop',
    },
    {
        image: Xtra,
        caption: 'Unlock Your Deal',
    },
    {
        image: Television,
        caption: 'Appliances Bonanza',
    },
    {
        image: Deals,
        caption: 'Deals Reloaded',
    },
    {
        image: Jumia,
        caption: 'Sporting Goods',
    },
    {
        image: Jumia,
        caption: 'Groceries',
    },
    // {
    //     image: Jumia,
    //     caption: 'Video Games',
    // },
    // {
    //     image: Jumia,
    //     caption: 'Toys & Games',
    // },
    // {
    //     image: Jumia,
    //     caption: 'Video Games',
    // },
    // {
    //     image: Jumia,
    //     caption: 'Toys & Games',
    // },
];

import { useState } from 'react';

const VISIBLE_COUNT = 8;

const PromoCarousel = () => {
    const [startIdx, setStartIdx] = useState(0);
    const endIdx = startIdx + VISIBLE_COUNT;
    const canGoLeft = startIdx > 0;
    const canGoRight = endIdx < promos.length;

    const handleLeft = () => {
        if (canGoLeft) setStartIdx(startIdx - 1);
    };
    const handleRight = () => {
        if (canGoRight) setStartIdx(startIdx + 1);
    };

    return (
        <div className="flex items-center bg-white rounded-sm py-4 my-6 shadow">
            <button
                className={`bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-3xl text-gray-500 mx-2 ${!canGoLeft ? 'opacity-40 cursor-not-allowed' : ''}`}
                onClick={handleLeft}
                disabled={!canGoLeft}
                aria-label="Scroll left"
            >
                <span>&#8592;</span>
            </button>
            <div className="relative w-full overflow-hidden" style={{ minWidth: `${VISIBLE_COUNT * 170}px` }}>
                <div
                    className="flex transition-transform duration-500 overflow-scrollbar-hide"
                    style={{
                        width: `${promos.length * 180}px`,
                        transform: `translateX(-${startIdx * 180}px)`
                    }}
                >
                    {promos.map((promo, idx) => (
                        <div
                            key={idx}
                            className="w-[170px] h-[210px] rounded-xl flex flex-col items-center justify-center p-4 bg-white border border-gray-100 mx-[5px]"
                        >
                            {promo.image && (
                                <Image
                                    src={promo.image}
                                    alt={promo.caption}
                                    width={150}
                                    height={90}
                                    className="w-[150px] h-[90px] object-cover rounded-lg mb-2"
                                />
                            )}
                            <div className="text-[12px] text-gray-900 text-center mt-2 font-medium whitespace-normal leading-tight">{promo.caption}</div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className={`bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-3xl text-gray-500 mx-2 ${!canGoRight ? 'opacity-40 cursor-not-allowed' : ''}`}
                onClick={handleRight}
                disabled={!canGoRight}
                aria-label="Scroll right"
            >
                <span>&#8594;</span>
            </button>
        </div>
    );
}

export default PromoCarousel;
