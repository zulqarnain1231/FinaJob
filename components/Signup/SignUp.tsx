import React, { Fragment, useState } from "react";
import TextInput from "../Shared/Inputs/TextInput";
import PasswordInput from "../Shared/Inputs/PasswordInput";
import Button from "../Shared/Buttons/Button";
import Link from "next/link";
import RadioButtonGroup from "../Shared/Buttons/RadioButtonGroup";
import AuthButton from "../Login/AuthButton";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Divider from "../Shared/Divider";
import api from "../../utils/axiosInstance";
import LogError from "../../utils/LogError";
import {
  ToastSuccess,
  ToastError,
  Toast,
  ToastInfo,
} from "../Shared/Toasts/Notification";
import md5 from "md5";
import { ISignUpInputs } from "../../types/types";
import OtpVerifyPop from "./OtpVerify";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const [Inputs, SetInputs] = useState<ISignUpInputs>({
    role: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputs = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };
  const [otpVerify, onChangeOtpVerify] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  const SubmitSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body: ISignUpInputs = {
      ...Inputs,
      password: md5(Inputs.password),
    };
    if (
      Inputs?.password?.toLocaleLowerCase() !==
      Inputs?.confirmPassword?.toLocaleLowerCase()
    ) {
      ToastInfo("Password not matched");
      return;
    }
    if (Inputs.role === "") {
      ToastInfo("Please select role");
      return;
    }
    if (Inputs.password.length < 8) {
      ToastInfo("Password should be greater then 8 character");
      return;
    }
    delete body.confirmPassword;
    setLoading(true);
    try {
      const response = await api.post("/register", body);
      if (response) {
        setLoading(false);
        if (
          response?.status === 201 &&
          response?.data.message === "Please verify your email"
        ) {
          onChangeOtpVerify(true);
          ToastSuccess(response?.data?.message);
          setUser(response?.data?.user);
        }
        if (
          response?.status === 201 &&
          response?.data.message === "User registered successfully"
        ) {
          ToastSuccess(response?.data.message);
        }
        if (response?.status === 409) {
          ToastSuccess(response?.data.message);
        }
      }
      // console.log(response);
    } catch (error) {
      setLoading(false);
      LogError("SignUp", error);
      ToastError("Server error, Unable to register!");
    }
  };

  return (
    <Fragment>
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
                Name="firstName"
                IsCompulsory={true}
                Type="text"
                state={Inputs.firstName}
                SetState={handleInputs}
                placeholder="Enter Your FirstName"
                label="FirstName"
              />
              <TextInput
                Name="lastName"
                IsCompulsory={true}
                Type="text"
                state={Inputs.lastName}
                SetState={handleInputs}
                placeholder="Enter Your LastName"
                label="LastName"
              />
            </div>
            <div className="w-full flex items-center justify-between gap-4">
              <TextInput
                Name="email"
                IsCompulsory={true}
                Type="email"
                state={Inputs.email}
                SetState={handleInputs}
                placeholder="Enter Your Email"
                label="Email"
              />
            </div>
            <div className="w-full flex items-center justify-between gap-4">
              <PasswordInput
                Name="password"
                IsCompulsory={true}
                state={Inputs.password}
                SetState={handleInputs}
              />
              <PasswordInput
                Name="confirmPassword"
                IsCompulsory={true}
                state={Inputs.confirmPassword}
                SetState={handleInputs}
                label="ConfirmPassword"
              />
            </div>
            <div>
              <RadioButtonGroup
                firstOption={{ label: "Employee", value: "employee" }}
                secondOption={{ label: "Employer", value: "employer" }}
                value={Inputs.role}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  SetInputs({
                    ...Inputs,
                    role: (e.target as HTMLInputElement).value,
                  });
                }}
              />
            </div>
          </div>
          <Button
            OnCLick={() => {}}
            variant="contained"
            style="bg-brand-main text-white h-[45px]"
            Type="submit"
            Text="SignUp"
          />
          <div className="w-full flex justify-start gap-2">
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
        </form>
        <div className='w-full h-full hidden md:flex  bg-[url("/Signup/SignUp.jpg")] bg-cover bg-no-repeat' />
      </div>
      <OtpVerifyPop
        user={user}
        Open={otpVerify}
        close={() => onChangeOtpVerify(false)}
      />
      {loading && <Loading />}
    </Fragment>
  );
};

export default SignUp;
