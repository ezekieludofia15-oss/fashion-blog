import React from "react";
// import Navbar from "../component/navbar";
import ProductList from "./productList";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Navbar /> */}

      <div className="p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Latest Fashion Trends
        </h1>

        <ProductList />
      </div>
    </div>
  );
};

export default Home;