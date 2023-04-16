import React, { useState } from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import JobCategorySnippet from "./Snippets/JobCategorySnippet";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Data } from "../../constants/Data/Json";

const JobCategories = () => {
  const [showLess, setShowLess] = useState<boolean>(true);
  const { jobCategories } = Data;

  return (
    <ComponentWrapper style="py-9">
      <div className="w-full flex flex-col gap-12">
        <p className="font-inter font-bold md:text-3xl text-xl text-black-main">
          Jobs by categories in Uk
        </p>
        {showLess && (
          <div className="w-full flex flex-wrap items-center gap-3">
            {jobCategories.map(
              (item: any, index: number) =>
                index < 13 && (
                  <JobCategorySnippet
                    key={index}
                    name={item.name}
                    picture={item.picture}
                    route={`/job/${item.name}`}
                  />
                )
            )}
            <button
              onClick={() => setShowLess(false)}
              className=" flex items-center justify-center gap-3 font-inter font-bold text-[14px] md:text-[16px] text-black-main border hover:border-indigo-500  rounded-[6px] bg-[#F4F5F6] hover:bg-[#F1F5FF] p-3"
            >
              More <MdKeyboardArrowDown size={20} />
            </button>
          </div>
        )}
        {!showLess && (
          <div className="w-full flex flex-wrap items-center gap-3">
            {jobCategories.map((item: any, index: number) => (
              <JobCategorySnippet
                key={index}
                name={item.name}
                picture={item.picture}
                route={`/job/${item.name}`}
              />
            ))}
            <button
              onClick={() => setShowLess(true)}
              className=" flex items-center justify-center gap-3 font-inter font-bold text-[14px] md:text-[16px] text-black-main border hover:border-indigo-500  rounded-[6px] bg-[#F4F5F6] hover:bg-[#F1F5FF] p-3"
            >
              Less <MdKeyboardArrowUp size={20} />
            </button>
          </div>
        )}
      </div>
    </ComponentWrapper>
  );
};

export default JobCategories;
