import React from "react";
import Image from "next/image";

interface Props {
    picture:string;
    text:string;
}

const CategoryButton:React.FC<Props> = ({picture,text}) => {
  return (
    <button
      className=" flex items-center justify-center gap-3 font-inter font-medium text-[14px] md:text-[16px] text-black-main border hover:border-indigo-500  rounded-[6px] bg-[#F4F5F6] hover:bg-[#F1F5FF] p-3"
    >
      <div className="h-[26px] w-[26px] relative">
        <Image src={picture} alt="" fill />
      </div>
      {text}
    </button>
  );
};

export default CategoryButton;
