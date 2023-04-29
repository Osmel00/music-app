import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCredentials, setIsLogin } from "../../app/features/authUserSlice";
import { AvatarLogin } from "./AvatarLogin";

export const ButtonHandleSL = () => {
  const dispatch = useDispatch();
  const {
    profile: { user },
    isLogin,
  } = useSelector((state) => state.authUser);

  const handleLogout = () => {
    try {
      fetch("http://localhost:8000/api/v1/auth/logout", {
        credentials: "include",
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      dispatch(setCredentials({ profile: null }));
      dispatch(setIsLogin({ isLogin: false }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-button  font-bold w-[236px] py-3 flex justify-end items-center">
      {isLogin ? (
        <>
          <AvatarLogin />
        </>
      ) : (
        <div className="login-singUp">
          <button
            onClick={() => window.location.replace("/signup")}
            className=" py-3 px-6 rounded-3xl text-white"
          >
            Sing up
          </button>
          <button
            onClick={() => window.location.replace("/login")}
            className=" border py-3 px-6 rounded-3xl bg-white "
          >
            Login in
          </button>
        </div>
      )}
    </div>
  );
};
