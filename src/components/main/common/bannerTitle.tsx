import React from "react";

const BannerTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <h2 className="text-[#103A3A] font-serif font-normal text-3xl">
        {title || ""}
      </h2>
      <span className="text-[#103A3A] font-serif font-normal text-lg ml-4">
        {desc || ""}
      </span>
    </div>
  );
};

export default BannerTitle;
