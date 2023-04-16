import React from 'react'
import Image from 'next/image'
const JobInfo = () => {
  return (
    <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
            {/* left heading div here */}
            <div className="w-full flex flex-col justify-between gap-8">
              <div className="w-full flex flex-col gap-2">
                <p className="font-inter text-black-main font-[800] text-3xl">
                  Delivery Driver
                </p>
                <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
                  Driver & Delivery
                </p>
                <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
                  21 June 2022 • 5 views
                </p>
              </div>
              <button className="w-full h-[50px]  bg-red-500 font-inter font-semibold text-white text-[16px] rounded-[6px]">
                Apply Now
              </button>
            </div>
            {/* job image here */}
            <div className="w-full h-[250px] md:h-full rounded-[8px] relative">
              <Image
                src={"/JobCategories/cardDefault.webp"}
                alt=""
                className="rounded-[8px]"
                fill
              />
            </div>
          </div>
  )
}

export default JobInfo