import React, { useState } from "react";
import AuthButton from "./AuthButton";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import TextInput from "../Shared/Inputs/TextInput";
import PasswordInput from "../Shared/Inputs/PasswordInput";
import Button from "../Shared/Buttons/Button";
import Divider from "../Shared/Divider";
import Link from "next/link";
import api from "../../utils/axiosInstance";
import LogError from "../../utils/LogError";
import {
  ToastSuccess,
  ToastError,
  Toast,
  ToastInfo,
} from "../Shared/Toasts/Notification";
import md5 from "md5";
import Loading from "../Shared/Loading";
import { ILoginInputs } from "../../types/types";

const Login = () => {
  const[user,setUser]=useState<string>('')
  const[loading,setLoading]=useState<boolean>(false)
  const [Inputs, SetInputs] = useState<ILoginInputs>({
    Email: "",
    Password: "",
  });
  const handleInputs = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  const SubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body: ILoginInputs = {
      ...Inputs,
      Password: md5(Inputs.Password),
    };
    try {
      const response = await api.post("/login", body);
      if (response) {
        setLoading(false);
        if (
          response?.status === 201
        ) {
          ToastSuccess(response?.data?.message);
          setUser(response?.data?.user);
        }
        if (response?.status === 409) {
          ToastSuccess(response?.data.message);
        }
      }
     
    } catch (error) {
      setLoading(false);
      LogError("Login", error);
      ToastError("Server error, Unable to Login!");
    }
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
          OnCLick={() => {}}
          variant="contained"
          style="bg-brand-main text-white h-[40px]"
          Type="submit"
          Text="Login"
        />
        <div className="w-full flex justify-between ">
          <div className="flex justify-center items-center gap-2">
            <p className="font-inter text-black-main text-left text-[13px] font-medium">{`Don't have an account?`}</p>
            <Link
              href={"/signup"}
              className="font-inter text-black-abbey text-[13px] font-medium"
            >
              Signup
            </Link>
          </div>
          <Link
            href={"/forgetpassword"}
            className="font-inter text-black-main text-left text-[13px] whitespace-nowrap font-medium"
          >
            Forget Password?
          </Link>
        </div>
      </form>
      <div className='w-full h-full hidden md:flex md:col-span-2 lg:col-span-3 bg-[url("/Login/Login.jpg")] bg-cover bg-no-repeat' />
    </div>
  );
};

export default Login;
