import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import EmployerInfo from "./Snippets/EmployerInfo";
import JobInfo from "./Snippets/JobInfo";
const JobDetail = () => {
  return (
    <ComponentWrapper style="py-6">
      <div className="w-full grid lg:grid-cols-3 gap-8">
        {/* left div here */}
        <div className=" w-full lg:col-span-2 flex flex-col gap-6">
          <JobInfo />
          {/* job details here */}
          <div className="w-full md:w-[50%] flex flex-col gap-4">
            <div className="w-full flex items-center justify-between">
              <p className="font-inter font-[400] text-lg text-black-main">
                Experience
              </p>
              <p className="font-inter font-bold text-lg text-black-main">
                Required
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="font-inter font-[400] text-lg text-black-main">
                Languages
              </p>
              <p className="font-inter font-bold text-lg text-black-main">
                English – Intermediate
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="font-inter font-[400] text-lg text-black-main">
                Employment
              </p>
              <p className="font-inter font-bold text-lg text-black-main">
                Full-time
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="font-inter font-[400] text-lg text-black-main">
                Schedule
              </p>
              <p className="font-inter font-bold text-lg text-black-main">
                08am to 10pm
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="font-inter font-[400] text-lg text-black-main">
                Salary
              </p>
              <p className="font-inter font-bold text-lg text-black-main">
                $500 – $550 monthly
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="font-inter font-[400] text-lg text-black-main">
                Starting time
              </p>
              <p className="font-inter font-bold text-lg text-black-main">
                Immediate start!
              </p>
            </div>
          </div>
          <div className="w-full flex gap-4 items-center border-b border-t py-4">
            <MdOutlineLocationOn size={25} className="text-black-abbey/70" />
            <p className="font-inter font-bold text-black-main text-lg">
              ManChester, UK
            </p>
          </div>
          <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
            21 June 2022 • 5 views
          </p>
        </div> 
        <EmployerInfo />
      </div>
    </ComponentWrapper>
  );
};

export default JobDetail;
