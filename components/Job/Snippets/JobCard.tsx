import React from "react";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";

interface Props {
  route: string;
}

const JobCard: React.FC<Props> = ({ route }: Props) => {
  return (
    <Link href={route} className="w-full shadow-md rounded-[8px]">
      <div className="h-[200px] w-full relative rounded-[8x]">
        <Image
          src={"/JobCategories/cardDefault.webp"}
          className="rounded-tr-[8px] rounded-tl-[8px]"
          alt=""
          fill
        />
      </div>
      <div className="w-full flex flex-col gap-2 p-4">
        <div className="w-full flex gap-3">
          <p className="font-inter font-bold text-brand-main text-[15px]">
            $1000 monthly
          </p>
          <p className="font-inter font-medium text-black-main text-[15px]">
            Full-Time
          </p>
        </div>

        <p className="font-inter font-bold text-black-main text-[15px]">
          Web Developer
        </p>
        <p className="font-inter font-medium text-black-main text-[15px]">
          Brightcore.com
        </p>
        <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
          Driver and Cook At Private Company Lahore. As per latest Private
          Company jobs August
        </p>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <MdOutlineLocationOn size={15} className="text-black-abbey/70" />
            <p className="font-inter font-medium text-black-abbey/70 text-[13px]">
              UK,Uk
            </p>
          </div>
          <p className="font-inter font-medium text-black-abbey/70 text-[13px]">
            23/6/2022
          </p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
