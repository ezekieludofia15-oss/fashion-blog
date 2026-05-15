import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();

  const product = useSelector((state) =>
    state.products.products.find((item) => item.id === Number(id))
  );

  if (!product) {
    return <h1 className="text-center mt-10">Product Not Found</h1>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[500px] object-cover rounded-2xl"
      />

      <h1 className="text-4xl font-bold mt-6 mb-4">{product.title}</h1>

      <p className="text-gray-700 text-lg">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
