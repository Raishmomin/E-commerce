import React from "react";

const CategoryCard = ({
  img,
  title,
  desc,
}: {
  img?: string;
  title?: string;
  desc?: string;
}) => {
  return (
    <div className="flex flex-col justify-start items-start min-w-64 min-h-96 m-4">
      <img
        src={img || "category/c1.webp"}
        alt=""
        className="h-60 w-60 object-cover rounded-none shadow-md"
      />
      <h3 className="text-[#103A3A] font-serif font-normal text-2xl mt-4">
        {title || "Living Room"}
      </h3>
      <span className="text-[#103A3A] font-serif font-normal text-md mt-2">
        {desc || "Sofas, Coffee Tables, TV Units & more"}
      </span>
    </div>
  );
};

export default CategoryCard;
