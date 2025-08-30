import React from "react";
import CategoryCard from "../common/categoryCard";
import BannerTitle from "../common/bannerTitle";

const ShopbyCategory = () => {
  const categories: { img: string; title: string; desc: string }[] = [
    {
      img: "category/c1.webp",
      title: "Living Room",
      desc: "Sofas, Coffee Tables, TV Units & more",
    },
    {
      img: "category/c1.webp",
      title: "Bedroom",
      desc: "Beds, Wardrobes, Dressers & more",
    },
    {
      img: "category/c1.webp",
      title: "Dining Room",
      desc: "Dining Tables, Chairs, Sideboards & more",
    },
    {
      img: "category/c1.webp",
      title: "Home Office",
      desc: "Desks, Office Chairs, Bookcases & more",
    },
    {
      img: "category/c1.webp",
      title: "Outdoor",
      desc: "Patio Furniture, Garden Sets & more",
    },
    {
      img: "category/c1.webp",
      title: "Storage",
      desc: "Shelving Units, Cabinets, Baskets & more",
    },
    {
      img: "category/c1.webp",
      title: "Storage",
      desc: "Shelving Units, Cabinets, Baskets & more",
    },
    {
      img: "category/c1.webp",
      title: "Storage",
      desc: "Shelving Units, Cabinets, Baskets & more",
    },
    {
      img: "category/c1.webp",
      title: "Storage",
      desc: "Shelving Units, Cabinets, Baskets & more",
    },
  ];
  return (
    <div className="w-full py-10 flex flex-col gap-5 items-center justify-center px-6 bg-white mt-10">
      <BannerTitle
        title="Shop by Category"
        desc="Shop by room or by product type to find exactly what you need."
      />
      <div className="w-full flex items-center justify-start mt-6 overflow-x-scroll">
        {categories?.map((cate) => {
          return (
            <CategoryCard img={cate.img} title={cate.title} desc={cate.desc} />
          );
        })}
      </div>
    </div>
  );
};

export default ShopbyCategory;
