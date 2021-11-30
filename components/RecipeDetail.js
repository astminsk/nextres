import React from "react";
import Image from "next/image";

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="md:flex md:items-center">
      <div className="w-full h-64 md:w-1/2 lg:h-96 relative">
        <Image
          src={recipe.image}
          alt={recipe.name}
          layout="fill"
          objectFit="cover"
          className="absolute z-0 rounded"
        />
      </div>
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
        <h3 className="text-gray-700 uppercase text-lg">{recipe.name}</h3>
        <h3>{recipe.ingredients}</h3><br/>
        <h3>{recipe.description}</h3>
        <span className="text-gray-500 mt-3">{recipe.time} минут</span>
        <hr className="my-3" />
        <div className="mt-2">
          <div className="flex items-center mt-1">
          </div>
        </div>
        <div className="flex items-center mt-6">
          <button className="px-8 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500">
            Добавить в любимые
          </button>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default RecipeDetail;