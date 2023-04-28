import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Button from "../Shared/Buttons/Button";
import { MdOutlineLocationOn } from "react-icons/md";
import JobCard from "../Job/Snippets/JobCard";
const EmployerDetail = () => {
  return (
    <ComponentWrapper style="py-6">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full grid lg:grid-cols-3 gap-8">
          {/* left div here */}
          <div className=" w-full lg:col-span-2 flex flex-col gap-6">
            <p className="font-inter font-[800] text-3xl text-black-main">
              Car Developer
            </p>
            <div className="w-full flex flex-col gap-2">
              <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
                Job • 1-10 Employees
              </p>
              <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
                Hiring with us since June, 2022
              </p>
              <p className="font-inter font-medium text-black-main text-[17px]">
                Car Developer
              </p>
            </div>
            <div className="w-full flex gap-4 items-center">
              <MdOutlineLocationOn size={25} className="text-black-abbey/70" />
              <p className="font-inter font-bold text-black-abbey/70 text-lg">
                ManChester, UK
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 py-6 border-b border-t">
              <p className="font-inter font-[800] text-black-main text-xl">
                Chat With Us
              </p>
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar
                    sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}
                    variant="rounded"
                  >
                    J
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <p className="font-inter font-bold text-black-main text-lg">
                      Jhon Patrik
                    </p>
                    <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
                      Owner•Active 2 months ago
                    </p>
                  </div>
                </div>

                <Button
                  OnCLick={() => {}}
                  Text="Chat"
                  variant="outlined"
                  style="border-indigo-400 text-indigo-500 border h-[46px] w-[80px]"
                />
              </div>
            </div>
          </div>
          {/* right div here */}
          <div className="w-full lg:col-span-1 flex flex-col gap-4">
            <p className="font-inter font-medium text-black-main text-lg">
              Follow us to get job updates!
            </p>
            <div className="w-full flex gap-4 items-center">
              <Avatar
                sx={{ bgcolor: deepOrange[500], width: 40, height: 40 }}
                variant="rounded"
              >
                J
              </Avatar>
              <p className="font-inter font-medium text-black-main text-lg">
                1 Follower
              </p>
            </div>
            <Button
              OnCLick={() => {}}
              Text="Follow"
              variant="contained"
              style="bg-brand-main text-white text-[16px] h-[50px] w-full md:w-[250px]"
            />
          </div>
        </div>
        {/* Active Jobs */}
        <div className="w-full flex flex-col gap-4">
          <p className="font-inter font-[800] text-black-main text-xl">
            2 Active Jobs
          </p>
          <div className=" w-full grid lg:grid-cols-3  md:grid-cols-2 gap-[20px]">
            {[1, 2].map((item: any, index: number) => (
              <JobCard route={"/jobdetail/id"} key={index} />
            ))}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default EmployerDetail;
