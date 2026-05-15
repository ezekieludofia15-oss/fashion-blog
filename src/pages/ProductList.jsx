import React from "react";
import { useSelector } from "react-redux";
import Card from "../component/card";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;