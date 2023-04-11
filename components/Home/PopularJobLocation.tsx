import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Link from "next/link";

const PopularJobLocation = () => {
  const cities = [
    {
      id: 1,
      name: "Manchaster",
      route: "/",
    },
    {
      id: 2,
      name: "London",
      route: "/",
    },
    {
      id: 3,
      name: "Bristol",
      route: "/",
    },
    {
      id: 4,
      name: "Liver Pool",
      route: "/",
    },
    {
      id: 5,
      name: "Glasgow",
      route: "/",
    },
  ];
  return (
    <ComponentWrapper style="py-9">
      <div className="w-full flex flex-col gap-12 justify-center">
        <div className="w-full flex justify-between items-center">
          <p className="font-inter font-bold md:text-3xl text-xl text-black-main">
            Popular job locations for UK
          </p>
          <Link
            href={"/"}
            className="h-[40px] w-[120px] flex items-center justify-center font-inter font-bold text-[14px] md:text-[16px] text-indigo-500  rounded-[6px] bg-[#F4F5F6]"
          >
            More Cities
          </Link>
        </div>
        <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-6 ">
          {cities.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                className=" w-full  font-inter font-medium text-[17px] text-black-main "
                href={`${item.route}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default PopularJobLocation;
