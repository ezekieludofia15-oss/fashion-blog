import React from "react";

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>

        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>

        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
