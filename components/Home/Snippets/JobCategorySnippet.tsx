import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
    picture:string;
    name:string;
    route:string;
}

const JobCategorySnippet:React.FC<Props> = ({picture,route,name}) => {
  return (
    <Link
      href={route}
      className=" flex items-center justify-center gap-3 font-inter font-medium text-[14px] md:text-[16px] text-black-main border hover:border-indigo-500  rounded-[6px] bg-[#F4F5F6] hover:bg-[#F1F5FF] p-3"
    >
      <div className="h-[26px] w-[26px] relative">
        <Image src={picture} alt="" fill />
      </div>
      {name}
    </Link>
  );
};

export default JobCategorySnippet;
