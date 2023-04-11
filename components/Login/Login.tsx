import React, { useState } from "react";
import AuthButton from "./AuthButton";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import TextInput from "../Shared/Inputs/TextInput";
import PasswordInput from "../Shared/Inputs/PasswordInput";
import Button from "../Shared/Buttons/Button";
import Divider from "../Shared/Divider";
import Link from "next/link";

const Login = () => {
  const [Inputs, SetInputs] = useState({
    Email: "",
    Password: "",
  });
  const handleInputs = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  const SubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen grid md:grid-cols-4">
      <form
        onSubmit={SubmitLogin}
        className="w-full h-full flex flex-col md:col-span-2 lg:col-span-1 gap-8 justify-center bg-white p-4"
      >
        <p className="font-inter font-semibold text-2xl text-black">
          Log in to your account
        </p>
        <div className="w-full flex flex-col justify-center gap-4">
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
          <Divider Content="or" />
          <div className="w-full flex flex-col gap-3 items-center justify-center">
            <TextInput
              Name="Email"
              IsCompulsory={true}
              Type="email"
              state={Inputs.Email}
              SetState={handleInputs}
              placeholder="Enter Your Email"
              label="Email"
            />
            <PasswordInput
              Name="Password"
              IsCompulsory={true}
              state={Inputs.Password}
              SetState={handleInputs}
            />
          </div>
        </div>
        <Button
          variant="contained"
          style="bg-brand-main text-white h-[40px]"
          Type="submit"
          Text="Login"
        />
        <div className="w-full flex flex-col gap-2">
          <button className="font-inter text-black-main text-left text-[13px] font-medium">
            Forget Password?
          </button>
          <div className="w-full flex justify-between">
            <p className="font-inter text-black-main text-left text-[13px] font-medium">{`Don't have an account?`}</p>
          <Link
            href={"/signup"}
            className="font-inter text-black-abbey text-[13px] font-medium"
          >
            Signup
          </Link>
          </div>
          
        </div>
      </form>
      <div className='w-full h-full hidden md:flex md:col-span-2 lg:col-span-3 bg-[url("/Login/Login.jpg")] bg-cover bg-no-repeat' />
    </div>
  );
};

export default Login;
