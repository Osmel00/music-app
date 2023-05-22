import React, { useState } from "react";
import { Logo } from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import { ButtonGoogle } from "./ButtonGoogle";
import { ButtonGithub } from "./ButtonGithub";
import { BsEyeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ButtonSubmit } from "./ButtonSubmit";
import { useSnackbar } from "notistack";

export const Signup = () => {
  
  const [showPassw, setShowPassw] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (formData, e) => {
    e.target.reset();
    try {
      const url = "https://api-rest-node-express.up.railway.app/api/v1/auth/signup";

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          sendMessage(data);
        })
        .catch((error) => console.log(error));

      function sendMessage(data) {
        if (data.Error)
          return enqueueSnackbar(data.Error, {
            variant: "error", //variant="success",error,info,warning,
          });
        console.log(data);
        if (data.message) {
          enqueueSnackbar(data.message, {
            variant: "success",
          });
          navigate("/login");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen  w-full py-0 px-4 bg-gradient-to-r from-[#0F172A] to-[#0F172A]">
      <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full  md:w-[500px] px-10 pb-10"> 
          <div className="flex flex-col  ">
            <div className="flex justify-center">
              <Logo />
            </div>
            <div>
              <p
                tabIndex={0}
                role="heading"
                aria-label="Login to your account"
                className="text-2xl font-extrabold leading-6 text-gray-100"
              >
                Register with your email address
              </p>
              <p className="text-sm mt-4 font-bold leading-none text-gray-500">
                You already have an account?{" "}
                <Link
                  to={"/Login"}
                  tabIndex={0}
                  role="link"
                  aria-label="Sign up here"
                  className="text-sm font-medium leading-none underline text-indigo-700 cursor-pointer ml-2"
                >
                  {" "}
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
          <ButtonGoogle text={"Register with Google"} />
          <ButtonGithub text={"Register with Github"} />

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          {/*************************************  estoy aqui****************************** */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm font-bold leading-none text-gray-500">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                })}
                aria-label="enter email adress"
                role="input"
                type="text"
                placeholder="E-Mail."
                className={` border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } rounded-3xl focus:outline-none text-xs font-medium leading-none text-gray-100 py-4 w-full pl-6 my-3 bg-transparent`}
              />
              {errors?.email && (
                <small className="text-red-500 font-bold">
                  * This email address is invalid. It must be in this format:
                  example@e-mail.com
                </small>
              )}
            </div>

            <div>
              <label className="text-sm font-bold leading-none text-gray-500">
                What do you want us to call you?
              </label>
              <input
                {...register("name", { required: true })}
                aria-label="enter email adress"
                role="input"
                type="text"
                placeholder="Put a profile name."
                className={` border ${
                  errors.name ? "border-red-500" : "border-gray-700"
                } rounded-3xl focus:outline-none text-xs font-medium leading-none text-gray-100 py-4 w-full pl-6 mt-2 bg-transparent`}
              />
              {errors?.name && (
                <small className="text-red-500 font-bold">
                  * Enter a name for your profile
                </small>
              )}
            </div>
            <div className="mt-6  w-full">
              <label className="text-sm font-bold leading-none text-gray-500">
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                  })}
                  aria-label="enter Password"
                  role="input"
                  type={showPassw ? "text" : "password"}
                  placeholder="Password"
                  className={`border ${
                    errors.password ? "border-red-500" : "border-gray-700"
                  } rounded-3xl focus:outline-none text-xs font-medium leading-none text-gray-100 py-4 w-full pl-6 mt-2 bg-transparent`}
                />
                <div
                  className="absolute right-0 mt-2 mr-3 cursor-pointer"
                  onClick={(e) => setShowPassw(!showPassw)}
                >
                  {showPassw ? <AiOutlineEye color="#677180" /> : <BsEyeSlash color="#677180" />}
                </div>
              </div>
              {errors?.password && (
                <small className="text-red-500 font-bold">
                  * Password should be greater than 4 characters
                </small>
              )}
            </div>
            <div className="mt-6  w-full">
              <label className="text-sm font-bold leading-none text-gray-500">
                Repeat Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  {...register("repeatPassword", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                    validate: (value) => value === getValues("password"),
                  })}
                  aria-label="enter Password"
                  role="input"
                  type={showPassw ? "text" : "password"}
                  placeholder="Repeat Password."
                  className={`border ${
                    errors.repeatPassword ? "border-red-500" : "border-gray-700"
                  } rounded-3xl focus:outline-none text-xs font-medium leading-none text-gray-100 py-4 w-full pl-6 mt-2 bg-transparent`}
                />
                <div
                  className="absolute right-0 mt-2 mr-3 cursor-pointer"
                  onClick={(e) => setShowPassw(!showPassw)}
                >
                  {showPassw ? <AiOutlineEye color="#677180" /> : <BsEyeSlash color="#677180" />}
                </div>
              </div>
              {errors?.repeatPassword && (
                <small className="text-red-500 font-bold">
                  * Passwords do not match
                </small>
              )}
            </div>
            <div className="mt-8">
              <ButtonSubmit text={"To register"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
