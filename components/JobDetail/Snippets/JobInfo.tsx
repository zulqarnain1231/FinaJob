import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { Dialog } from "@mui/material";
import RadioButtonGroup from "../../Shared/Buttons/RadioButtonGroup";
import TextInput from "../../Shared/Inputs/TextInput";
import MuiDropdown from "../../Shared/Dropdowns/MuiDropdown";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IApplyForjobInputs } from "../../../types/types";


const JobInfo = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [Phone, setPhone] = React.useState<any>();
  const [isFormFilled, setFormFilled] = useState<boolean>(false);
  const [inputs, setInputs] = useState<IApplyForjobInputs>({
    workExperience: "",
    about: "",
    education: "",
    phone: "",
    language: "",
    languageLevel: "",
  });
  const handleInputs = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  // state to set the slected phone number to inputs phone
  useEffect(() => {
    setInputs({ ...inputs, phone: Phone });
  }, [Phone]);

  const { workExperience, about, education, phone, language, languageLevel } =
    inputs;
  useEffect(() => {
    if (
      workExperience &&
      about &&
      education &&
      phone &&
      language &&
      languageLevel
    ) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [workExperience, about, education, phone, language, languageLevel]);
  return (
    <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
      {/* left heading div here */}
      <div className="w-full flex flex-col justify-between gap-8">
        <div className="w-full flex flex-col gap-2">
          <p className="font-inter text-black-main font-[800] text-3xl">
            Delivery Driver
          </p>
          <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
            Driver & Delivery
          </p>
          <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
            21 June 2022 • 5 views
          </p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="w-full h-[50px]  bg-red-500 font-inter font-semibold text-white text-[16px] rounded-[6px]"
        >
          Apply Now
        </button>
      </div>
      {/* job image here */}
      <div className="w-full h-[250px] md:h-full rounded-[8px] relative">
        <Image
          src={"/JobCategories/cardDefault.webp"}
          alt=""
          className="rounded-[8px]"
          fill
        />
      </div>
      <Dialog
        open={isOpen}
        sx={{
          "& .MuiPaper-root": {
            background: "#FFFFFF",
            borderRadius: "8px",
            maxWidth: "unset",
          },
          "& ::-webkit-scrollbar": {
            width: "0px",
            height: "0px",
          },
        }}
      >
        <div className={`sm:w-[800px]`}>
          <div className="w-full bg-brand-main h-[70px] flex sm:gap-0 gap-4 justify-between items-center p-4 sm:p-6">
            <h2 className="font-inter font-semibold text-2xl text-white text-center capitalize">
              Create Your CV
            </h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="font-semibold p-1.5 bg-red-500 text-white rounded-full"
            >
              <RxCross1 size={16} />
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsOpen(false);
            }}
            className="w-full max-h-[500px] flex flex-col gap-6 p-4 sm:p-6 overflow-auto"
          >
            <p className="font-inter font-medium text-[16px] text-black-main">
              Your CV will help employers get to know you better before they
              start chat with you
            </p>
            <div className="w-full flex flex-col gap-4 p-4 bg-black-abbey/5 rounded-[6px]">
              <p className="font-inter font-bold text-xl text-black-main">
                Do you have any work experience?
              </p>

              <RadioButtonGroup
                firstOption={{ label: "Yes,i do", value: "yes" }}
                secondOption={{ label: "Not Yet", value: "No" }}
                value={inputs.workExperience}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputs({
                    ...inputs,
                    workExperience: (e.target as HTMLInputElement).value,
                  });
                }}
              />
            </div>
            <div className="w-full flex flex-col gap-4 p-4 bg-black-abbey/5 rounded-[6px]">
              <p className="font-inter font-bold text-xl text-black-main">
                About me
              </p>
              <p className="font-inter font-medium text-black-abbey/70 text-[16px]">
                What should your future employer know about you?
              </p>

              <div className="w-full flex flex-col gap-2">
                <p className="font-inter font-semibold text-[16px] text-black-main">
                  Tell us more about yourslef
                </p>
                <TextInput
                  Name="about"
                  IsCompulsory={true}
                  Type="text"
                  state={inputs.about}
                  SetState={handleInputs}
                  Multiline={true}
                  Rows={5}
                  placeholder="introduce yourself to employers with short introduction"
                  label="About"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 p-4 bg-black-abbey/5 rounded-[6px]">
              <p className="font-inter font-bold text-xl text-black-main">
                Languages You Know
              </p>
              <p className="font-inter font-medium text-black-abbey/70 text-[16px]">
                This could increase your chances for jobs that require specific
                languages
              </p>
              <div className="w-full flex items-center justify-between gap-4">
                <MuiDropdown
                  Size="medium"
                  DropdownItem={[{ name: "English", value: "English" }]}
                  placeholder="Language"
                  value={inputs.language}
                  InputChange={(e) =>
                    setInputs({ ...inputs, language: e.target.value })
                  }
                />
                <MuiDropdown
                  Size="medium"
                  DropdownItem={[
                    { name: "Native", value: "Native" },
                    { name: "Intermediate", value: "Intermediate" },
                    { name: "Expert", value: "Expert" },
                  ]}
                  placeholder="Level"
                  value={inputs.languageLevel}
                  InputChange={(e) =>
                    setInputs({ ...inputs, languageLevel: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 p-4 bg-black-abbey/5 rounded-[6px]">
              <p className="font-inter font-bold text-xl text-black-main">
                Education or training
              </p>
              <p className="font-inter font-medium text-black-abbey/70 text-[16px]">
                List your academic accomplishments, including any courses,
                certificates or degrees you have.
              </p>

              <div className="w-full flex flex-col gap-2">
                <p className="font-inter font-semibold text-[16px] text-black-main">
                  Education or training
                </p>
                <TextInput
                  Name="education"
                  IsCompulsory={true}
                  Type="text"
                  state={inputs.education}
                  SetState={handleInputs}
                  Multiline={true}
                  Rows={5}
                  placeholder="Tell us About your education or any formal training that you have completed"
                  label="Education"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 p-4 bg-black-abbey/5 rounded-[6px]">
              <p className="font-inter font-bold text-xl text-black-main">
                Your phone number
              </p>
              <p className="font-inter font-medium text-black-abbey/70 text-[16px]">
                This phone number will be seen by employers if you apply to
                their job or share your JOB TODAY CV with them
              </p>

              <PhoneInput country={"us"} value={Phone} onChange={setPhone} />
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                disabled={!isFormFilled}
                type="submit"
                className="w-full h-[46px] font-inter font-semibold bg-brand-main disabled:bg-brand-main/70 disabled:cursor-not-allowed text-white text-[16px] rounded-[5px]"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default JobInfo;
