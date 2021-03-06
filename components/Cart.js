import React from "react";
import Image from "next/image";
import {
  XIcon,
  PlusCircleIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <div
      className={`${
        isCartOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
      } fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 z-20`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium text-gray-700">Любимые рецепты</h3>
        <button className="text-gray-600 focus:outline-none">
          <XIcon
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="h-5 w-5"
          />
        </button>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between mt-6">
        <div className="flex">
          <Image
            src="/images/овсяное-печенье-новое.jpg"
            height={120}
            width={120}
            objectFit="cover"
            className="rounded"
            alt="Овсяное печенье НОВОЕ"
          />
          <div className="mx-3">
            <h3 className="text-sm text-gray-600">Овсяное печенье НОВОЕ</h3>
          </div>
        </div>
        <span className="text-gray-600"></span>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex">
          <Image
            src="/images/голландский-соус.jpg"
            height={120}
            width={120}
            objectFit="cover"
            className="rounded"
            alt="Голландский соус"
          />
          <div className="mx-3">
            <h3 className="text-sm text-gray-600">Голландский соус</h3>
            
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex">
          <Image
            src="/images/шакшука-без-яиц.jpg"
            height={120}
            width={120}
            objectFit="cover"
            className="rounded"
            alt="Шакшука без яиц"
          />
          <div className="mx-3">
            <h3 className="text-sm text-gray-600">Шакшука без яиц</h3>
            {/* <div className="flex items-center mt-2">
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <PlusCircleIcon className="h-5 w-5" />
              </button>
              <span className="text-gray-700 mx-2">1</span>
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <XIcon className="h-5 w-5" />
              </button>
            </div> */}
          </div>
        </div>
        {/* <span className="text-gray-600">30</span> */}
      </div>
      {/* <a className="flex items-center justify-center mt-4 px-3 py-2 bg-green-600 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500 cursor-pointer">
        <span>Просмотреть</span>
        <ArrowNarrowRightIcon className="w-5 h-5" />
      </a> */}
    </div>
  );
};

export default Cart;