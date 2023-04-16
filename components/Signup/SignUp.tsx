import React, { useState } from "react";
import TextInput from "../Shared/Inputs/TextInput";
import PasswordInput from "../Shared/Inputs/PasswordInput";
import Button from "../Shared/Buttons/Button";
import Link from "next/link";
import AuthButton from "../Login/AuthButton";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Divider from "../Shared/Divider";

const SignUp = () => {
  const [Inputs, SetInputs] = useState({
    Email: "",
    FirstName: "",
    LastName: "",
    Password: "",
    ConfirmPassword: "",
    PhoneNumber: "",
  });
  const handleInputs = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  const SubmitSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen grid md:grid-cols-2">
      <form
        onSubmit={SubmitSignUp}
        className="w-full h-full flex flex-col  gap-8 justify-center bg-white p-4"
      >
        <p className="font-inter font-semibold text-2xl md:text-3xl text-black-main">
          Create Your Account
        </p>
        <div className="w-full flex flex-col justify-center gap-6">
            <div className="w-full flex items-center justify-between gap-4 ">
            <AuthButton
            Icon={<FcGoogle size={30} />}
            Text="Google"
            OnClick={() => {}}
          />
          <AuthButton
            Icon={<BsGithub size={30} />}
            Text="Github"
            OnClick={() => {}}
          />
            </div>
            <Divider Content="or" />
          
          <div className="w-full flex items-center justify-between gap-4">
            <TextInput
              Name="FirstName"
              IsCompulsory={true}
              Type="text"
              state={Inputs.FirstName}
              SetState={handleInputs}
              placeholder="Enter Your FirstName"
              label="FirstName"
            />
            <TextInput
              Name="LastName"
              IsCompulsory={true}
              Type="text"
              state={Inputs.LastName}
              SetState={handleInputs}
              placeholder="Enter Your LastName"
              label="LastName"
            />
          </div>
          <div className="w-full flex items-center justify-between gap-4">
            <TextInput
              Name="Email"
              IsCompulsory={true}
              Type="email"
              state={Inputs.Email}
              SetState={handleInputs}
              placeholder="Enter Your Email"
              label="Email"
            />
            <TextInput
              Name="PhoneNumber"
              IsCompulsory={true}
              Type="number"
              state={Inputs.PhoneNumber}
              SetState={handleInputs}
              placeholder="Enter Your Phone Number"
              label="PhoneNumber"
            />
          </div>
          <div className="w-full flex items-center justify-between gap-4">
            <PasswordInput
              Name="Password"
              IsCompulsory={true}
              state={Inputs.Password}
              SetState={handleInputs}
            />
            <PasswordInput
              Name="ConfirmPassword"
              IsCompulsory={true}
              state={Inputs.ConfirmPassword}
              SetState={handleInputs}
              label="ConfirmPassword"
            />
          </div>
        </div>
        <Button
        OnCLick={()=> {}}
          variant="contained"
          style="bg-brand-main text-white h-[45px]"
          Type="submit"
          Text="SignUp"
        />
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <p className="font-inter text-black-main text-left text-[13px] font-medium">
              Already have account?
            </p>
            <Link
              href={"/login"}
              className="font-inter text-black-abbey text-[13px] font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </form>
      <div className='w-full h-full hidden md:flex  bg-[url("/Signup/SignUp.jpg")] bg-cover bg-no-repeat' />
    </div>
  );
};

export default SignUp;
