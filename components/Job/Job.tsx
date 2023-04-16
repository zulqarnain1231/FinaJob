import React, { useState } from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Button from "./Snippets/Button";
import FilterButton from "./Snippets/FilterButton";
import CategoryButton from "./Snippets/CategoryButton";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import FilterDialogue from "./Snippets/FilterDialogue";
import { filterTypes } from "../../types/types";
import JobCard from "./Snippets/JobCard";
import { Data } from "../../constants/Data/Json";

interface Props {
  selectedCategory: any;
}

const Job: React.FC<Props> = ({ selectedCategory }: Props) => {
  const { jobCategories } = Data;
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [showLess, setShowLess] = useState<boolean>(true);

  // dummy state for showig data that will comme from api
  const [data, setData] = useState<boolean>(false);
  const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const [filters, setFilters] = useState<filterTypes>({
    filterDialog: false,
    noExperience: false,
    partTime: false,
    fullTime: false,
  });
  // function to select or unselect a selected a filter
  const toggleFilters = (filter: keyof filterTypes) => {
    setFilters((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };
  return (
    <ComponentWrapper>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex gap-4 items-center py-4">
          <FilterButton setState={() => setOpenDialog(true)} />
          <Button
            text="No Experience"
            state={filters.noExperience}
            setState={() => toggleFilters("noExperience")}
            style="w-[130px]"
          />
          <Button
            text="Part-Time"
            state={filters.partTime}
            setState={() => toggleFilters("partTime")}
          />
          <Button
            text="Full-Time"
            state={filters.fullTime}
            setState={() => toggleFilters("fullTime")}
          />
        </div>
        {showLess && (
          <div className="w-full flex flex-wrap items-center gap-3">
            {jobCategories.map(
              (item: any, index: number) =>
                index < 13 && (
                  <CategoryButton
                    key={index}
                    text={item.name}
                    picture={item.picture}
                    OnClick={() => setData(true)}
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
              <CategoryButton
                key={index}
                text={item.name}
                picture={item.picture}
                OnClick={() => setData(true)}
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
        {!data && (
          <div className="w-full flex flex-col gap-4">
            <p className="font-inter font-bold md:text-3xl text-xl text-black-main">
              No Results
            </p>
            <p className="font-inter font-medium text-black-main text-[18px]">
              No <span className="font-bold">{`"${selectedCategory}"`}</span>{" "}
              jobs found
            </p>
          </div>
        )}
        {data && (
          <div className="w-full flex flex-col gap-6 mb-6">
            <p className="font-inter font-bold text-2xl text-black-main">
              Construction & Trades jobs in UK
            </p>
            <div className=" w-full grid lg:grid-cols-3 md:grid-cols-2 gap-[20px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any, index: number) => (
                <JobCard route={'/jobdetail/id'} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
      <FilterDialogue
        Open={openDialog}
        CloseEvent={() => setOpenDialog(false)}
        SubmitEvent={handleFilterSubmit}
      />
    </ComponentWrapper>
  );
};

export default Job;
