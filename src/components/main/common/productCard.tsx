import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="flex flex-col justify-start items-start min-w-64 min-h-96 m-4">
      <img
        src={product?.img || "category/c1.webp"}
        alt=""
        className="h-60 w-60 object-cover rounded-none shadow-md"
      />
      <span className="text-[#103A3A] font-serif font-normal text-md mt-2">
        {product?.seller_name || ""}
      </span>
      <h3 className="text-[#103A3A] font-serif font-normal text-2xl">
        {product?.title || "Living Room"}
      </h3>
    </div>
  );
};

export default ProductCard;
