import React from "react";
import BannerTitle from "../common/bannerTitle";
import ProductCard from "../common/productCard";

const DiffrentCategory = () => {
  const product: any[] = [
    {
      img: "category/c1.webp",
      title: "Living Room",
      seller_name: "John Doe",
      desc: "Sofas, Coffee Tables, TV Units & more",
    },
    {
      img: "category/c1.webp",
      title: "Bedroom",
      seller_name: "Jane Smith",
      desc: "Beds, Wardrobes, Dressers & more",
    },
    {
      img: "category/c1.webp",
      title: "Dining Room",
      seller_name: "Alice Johnson",
      desc: "Dining Tables, Chairs, Sideboards & more",
    },
    {
      img: "category/c1.webp",
      title: "Home Office",
      seller_name: "Bob Brown",
      desc: "Desks, Office Chairs, Bookcases & more",
    },
    {
      img: "category/c1.webp",
      title: "Outdoor",
      seller_name: "Eve Davis",
      desc: "Patio Furniture, Garden Sets & more",
    },
    {
      img: "category/c1.webp",
      title: "Storage",
      seller_name: "Charlie Wilson",
      desc: "Shelving Units, Cabinets, Baskets & more",
    },
  ];
  return (
    <div className="w-full py-10 flex flex-col gap-5 items-center justify-center px-6 bg-white mt-10">
      <BannerTitle
        title="Shop new Arrived Products"
        desc="Explore our latest collection of furniture and decor items."
      />
      <div className="w-full flex items-center justify-start mt-6 overflow-x-scroll">
        {product?.map((prod) => {
          return <ProductCard product={prod} />;
        })}
      </div>
    </div>
  );
};

export default DiffrentCategory;
