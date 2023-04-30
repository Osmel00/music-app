import React, { useState, useEffect } from "react";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { ButtonGoogle } from "./ButtonGoogle";
import { ButtonGithub } from "./ButtonGithub";
import { BsEyeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ButtonSubmit } from "./ButtonSubmit";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
//borrar a prtir de aqui
import ClickAwayListener from "@mui/base/ClickAwayListener";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import Box from '@mui/material/Box';
import { AvatarLogin } from "./AvatarLogin";
export const Login = () => {
  const navigate = useNavigate();
  const [showPassw, setShowPassw] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData, e) => {
    e.target.reset();
    try {
      const url = "http://localhost:8000/api/v1/auth/login";
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
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
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //********** test *////////

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const styles = {
    position: 'absolute',
    top: 50,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <div className="min-h-screen  w-full py-0 px-4 ">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white lg:w-1/3  md:w-1/2 w-full px-10 pb-10 pt-5 mt-8">
          <div className=" flex flex-col">
            <div className="flex justify-center">
              <Logo />
            </div>
            <div>
              <p
                tabIndex={0}
                role="heading"
                aria-label="Login to your account"
                className="text-2xl font-extrabold leading-6 text-gray-800"
              >
                Login to your account
              </p>
              <p className="text-sm mt-4 leading-none font-bold  text-gray-800">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  tabIndex={0}
                  role="link"
                  aria-label="Sign up here"
                  className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer ml-2"
                >
                  {" "}
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
          <ButtonGoogle text={"Continue with Google"} />
          <ButtonGithub text={"Continue with Github"} />

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          {/**********  EStoy aqui ***************************************************/}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm font-bold leading-none text-gray-800">
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
                className={`border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2`}
              />

              {errors?.email && (
                <small className="text-red-500 font-bold">
                  * This email address is invalid. It must be in this format:
                  example@e-mail.com
                </small>
              )}
            </div>

            <div className="mt-6  w-full">
              <label className="text-sm font-bold leading-none text-gray-800">
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
                    errors.email ? "border-red-500" : "border-gray-700"
                  } rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2
                `}
                />

                <div
                  className="absolute right-0 mt-2 mr-3 cursor-pointer"
                  onClick={(e) => setShowPassw(!showPassw)}
                >
                  {showPassw ? <AiOutlineEye /> : <BsEyeSlash />}
                </div>
              </div>
              {errors?.password && (
                <small className="text-red-500 font-bold">
                  * Password should be greater than 4 characters
                </small>
              )}
            </div>

            <div className="mt-8">
              <ButtonSubmit onclick={onSubmit} text={"Create my account"} />
            </div>
          </form>
        </div>

        {/* // <button onClick={handleLogout}>logout</button> */}
      
      </div>
     
   
    </div>
  );
};
