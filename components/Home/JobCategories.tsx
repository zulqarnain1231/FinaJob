import React, { useState } from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import JobCategorySnippet from "./Snippets/JobCategorySnippet";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const JobCategories = () => {
  const [showLess, setShowLess] = useState<boolean>(true);
  const jobCategories = [
    {
      id: 1,
      name: "Animal Care",
      picture: "/JobCategories/animal-care.png",
    },
    {
      id: 2,
      name: "Bar",
      picture: "/JobCategories/bar.png",
    },
    {
      id: 3,
      name: "Child Care",
      picture: "/JobCategories/child care.png",
    },
    {
      id: 4,
      name: "Art Design",
      picture: "/JobCategories/artDesign.png",
    },
    {
      id: 5,
      name: "Cleaning",
      picture: "/JobCategories/cleaning.png",
    },
    {
      id: 6,
      name: "Construction",
      picture: "/JobCategories/construction.png",
    },
    {
      id: 7,
      name: "Cooking",
      picture: "/JobCategories/cook.png",
    },
    {
      id: 8,
      name: "Delivery",
      picture: "/JobCategories/delivery.png",
    },
    {
      id: 9,
      name: "Engineering",
      picture: "/JobCategories/engineering.png",
    },
    {
      id: 10,
      name: "Education",
      picture: "/JobCategories/education.png",
    },
    {
      id: 11,
      name: "Barista",
      picture: "/JobCategories/barista.png",
    },
    {
      id: 12,
      name: "Customer Service",
      picture: "/JobCategories/customer.png",
    },
    {
      id: 13,
      name: "Accounting & Finance",
      picture: "/JobCategories/finance.png",
    },
    {
      id: 14,
      name: "Entertainment",
      picture: "/JobCategories/entertainment.png",
    },
    {
      id: 15,
      name: "Events & Promotion",
      picture: "/JobCategories/events.png",
    },
    {
      id: 16,
      name: "Health Care",
      picture: "/JobCategories/healthcare.png",
    },
    {
      id: 17,
      name: "Information Technology ",
      picture: "/JobCategories/information.png",
    },
    {
      id: 18,
      name: "Host & Hostess",
      picture: "/JobCategories/host.png",
    },
    {
      id: 19,
      name: "Kitchen Porter",
      picture: "/JobCategories/kitchen.png",
    },
    {
      id: 20,
      name: "Legal",
      picture: "/JobCategories/legal.png",
    },
    {
      id: 21,
      name: "Managment",
      picture: "/JobCategories/management.png",
    },
    {
      id: 22,
      name: "Manufacturing",
      picture: "/JobCategories/manufacturing.png",
    },
    {
      id: 23,
      name: "  Office & Admin",
      picture: "/JobCategories/office.png",
    },
    {
      id: 24,
      name: "Online Jobs",
      picture: "/JobCategories/online jobs.png",
    },
    {
      id: 25,
      name: "Sales & Marketing",
      picture: "/JobCategories/sales.png",
    },
    {
      id: 26,
      name: "Salon",
      picture: "/JobCategories/salon.png",
    },
    {
      id: 27,
      name: "Science",
      picture: "/JobCategories/science.png",
    },
    {
      id: 28,
      name: "Retail",
      picture: "/JobCategories/retail.png",
    },
    {
      id: 29,
      name: "Security",
      picture: "/JobCategories/security.png",
    },
    {
      id: 30,
      name: "Sports",
      picture: "/JobCategories/sports.png",
    },
    {
      id: 31,
      name: "Waiters",
      picture: "/JobCategories/waiters.png",
    },
    {
      id: 32,
      name: "Writing & Editing",
      picture: "/JobCategories/writting.png",
    },
    {
      id: 33,
      name: "Warehouse",
      picture: "/JobCategories/warehouse.png",
    },
    {
      id: 34,
      name: "Other",
      picture: "/JobCategories/other.png",
    },
  ];
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
