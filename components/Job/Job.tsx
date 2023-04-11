import React, { useState } from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Button from "./Snippets/Button";
import FilterButton from "./Snippets/FilterButton";
import CategoryButton from "./Snippets/CategoryButton";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import DialogueWrapper from "../Shared/Wrappers/DialogueWrapper";
interface Props {
  selectedCategory: any;
}
const Job: React.FC<Props> = ({ selectedCategory }: Props) => {
  const [inputs, setInputs] = useState();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [showLess, setShowLess] = useState<boolean>(true);
  const jobCategories = [
    {
      id: 1,
      name: "Animal Care",
      picture: "/jobCategories/animal-care.png",
    },
    {
      id: 2,
      name: "Bar",
      picture: "/jobCategories/bar.png",
    },
    {
      id: 3,
      name: "Child Care",
      picture: "/jobCategories/child care.png",
    },
    {
      id: 4,
      name: "Art Design",
      picture: "/jobCategories/artDesign.png",
    },
    {
      id: 5,
      name: "Cleaning",
      picture: "/jobCategories/cleaning.png",
    },
    {
      id: 6,
      name: "Construction",
      picture: "/jobCategories/construction.png",
    },
    {
      id: 7,
      name: "Cooking",
      picture: "/jobCategories/cook.png",
    },
    {
      id: 8,
      name: "Delivery",
      picture: "/jobCategories/delivery.png",
    },
    {
      id: 9,
      name: "Engineering",
      picture: "/jobCategories/engineering.png",
    },
    {
      id: 10,
      name: "Education",
      picture: "/jobCategories/education.png",
    },
    {
      id: 11,
      name: "Barista",
      picture: "/jobCategories/barista.png",
    },
    {
      id: 12,
      name: "Customer Service",
      picture: "/jobCategories/customer.png",
    },
    {
      id: 13,
      name: "Accounting & Finance",
      picture: "/jobCategories/finance.png",
    },
    {
      id: 14,
      name: "Entertainment",
      picture: "/jobCategories/entertainment.png",
    },
    {
      id: 15,
      name: "Events & Promotion",
      picture: "/jobCategories/events.png",
    },
    {
      id: 16,
      name: "Health Care",
      picture: "/jobCategories/healthcare.png",
    },
    {
      id: 17,
      name: "Information Technology ",
      picture: "/jobCategories/information.png",
    },
    {
      id: 18,
      name: "Host & Hostess",
      picture: "/jobCategories/host.png",
    },
    {
      id: 19,
      name: "Kitchen Porter",
      picture: "/jobCategories/kitchen.png",
    },
    {
      id: 20,
      name: "Legal",
      picture: "/jobCategories/legal.png",
    },
    {
      id: 21,
      name: "Managment",
      picture: "/jobCategories/management.png",
    },
    {
      id: 22,
      name: "Manufacturing",
      picture: "/jobCategories/manufacturing.png",
    },
    {
      id: 23,
      name: "  Office & Admin",
      picture: "/jobCategories/office.png",
    },
    {
      id: 24,
      name: "Online Jobs",
      picture: "/jobCategories/online jobs.png",
    },
    {
      id: 25,
      name: "Sales & Marketing",
      picture: "/jobCategories/sales.png",
    },
    {
      id: 26,
      name: "Salon",
      picture: "/jobCategories/salon.png",
    },
    {
      id: 27,
      name: "Science",
      picture: "/jobCategories/science.png",
    },
    {
      id: 28,
      name: "Retail",
      picture: "/jobCategories/retail.png",
    },
    {
      id: 29,
      name: "Security",
      picture: "/jobCategories/security.png",
    },
    {
      id: 30,
      name: "Sports",
      picture: "/jobCategories/sports.png",
    },
    {
      id: 31,
      name: "Waiters",
      picture: "/jobCategories/waiters.png",
    },
    {
      id: 32,
      name: "Writing & Editing",
      picture: "/jobCategories/writting.png",
    },
    {
      id: 33,
      name: "Warehouse",
      picture: "/jobCategories/warehouse.png",
    },
    {
      id: 34,
      name: "Other",
      picture: "/jobCategories/other.png",
    },
  ];
  const [filters, setFilters] = useState({
    filterDialog: false,
    noExperience: false,
    partTime: false,
    fullTime: false,
  });
  return (
    <ComponentWrapper>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex gap-4 items-center py-4">
          <FilterButton setState={() => setOpenDialog(true)} />
          <Button
            text="No Experience"
            state={filters.noExperience}
            setState={() => setFilters({ ...filters, noExperience: true })}
            style="w-[140px]"
          />
          <Button
            text="Part-Time"
            state={filters.partTime}
            setState={() => setFilters({ ...filters, partTime: true })}
          />
          <Button
            text="Full-Time"
            state={filters.fullTime}
            setState={() => setFilters({ ...filters, fullTime: true })}
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
        <div className="w-full flex flex-col gap-4">
          <p className="font-inter font-bold md:text-3xl text-xl text-black-main">
            No Results
          </p>
          <p className="font-inter font-medium text-black-main text-[18px]">
            No <span className="font-bold">{`"${selectedCategory}"`}</span> jobs
            found
          </p>
        </div>
      </div>
      <DialogueWrapper
        Title="Filters"
        Open={openDialog}
        CloseEvent={() => setOpenDialog(false)}
      >
        asdsd
      </DialogueWrapper>
    </ComponentWrapper>
  );
};

export default Job;
