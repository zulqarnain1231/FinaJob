import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import JobCategorySnippet from "./Snippets/JobCategorySnippet";

const JobCategories = () => {
  const jobCategories = [
    {
      id: 1,
      name: "Animal Care",
      picture: "/jobCategories/animal-care.png",
      route: "/",
    },
    {
      id: 2,
      name: "Bar",
      picture: "/jobCategories/bar.png",
      route: "/",
    },
    {
      id: 3,
      name: "Child Care",
      picture: "/jobCategories/child care.png",
      route: "/",
    },
    {
      id: 4,
      name: "Art Design",
      picture: "/jobCategories/artDesign.png",
      route: "/",
    },
    {
      id: 5,
      name: "Cleaning",
      picture: "/jobCategories/cleaning.png",
      route: "/",
    },
    {
      id: 6,
      name: "Construction",
      picture: "/jobCategories/construction.png",
      route: "/",
    },
    {
      id: 7,
      name: "Cooking",
      picture: "/jobCategories/cook.png",
      route: "/",
    },
    {
      id: 8,
      name: "Delivery",
      picture: "/jobCategories/delivery.png",
      route: "/",
    },
    {
      id: 9,
      name: "Engineering",
      picture: "/jobCategories/engineering.png",
      route: "/",
    },
    {
      id: 10,
      name: "Education",
      picture: "/jobCategories/education.png",
      route: "/",
    },
    {
        id: 11,
        name: "Barista",
        picture: "/jobCategories/barista.png",
        route: "/",
      },
      {
        id: 12,
        name: "Customer Service",
        picture: "/jobCategories/customer.png",
        route: "/",
      },
      {
        id: 13,
        name: "Accounting & Finance",
        picture: "/jobCategories/finance.png",
        route: "/",
      },
  ];
  return (
    <ComponentWrapper style="py-9">
      <div className="w-full flex flex-col gap-12">
        <p className="font-inter font-bold md:text-3xl text-xl text-black-main">
          Jobs by categories in Uk
        </p>
        <div className="w-full flex flex-wrap items-center gap-3">
          {jobCategories.map((item: any, index: number) => (
            <JobCategorySnippet
              key={index}
              name={item.name}
              picture={item.picture}
              route={item.route}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default JobCategories;
