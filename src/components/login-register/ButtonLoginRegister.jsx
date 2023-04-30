import React from "react";
import { useSelector } from "react-redux";
import { AvatarLogin } from "./AvatarLogin";
import { ButtonLR } from "./ButtonLR";

export const ButtonHandleSL = () => {
 
  const {
    
    isLogin,
  } = useSelector((state) => state.authUser);

  console.log(isLogin);
  return (
    <div className="container-button  font-bold w-[236px] py-3 flex justify-end items-center">
      {isLogin ? (
        <>
          <AvatarLogin />
        </>
      ) : (
        <div className="hidden md:block">
           <ButtonLR/>
        </div>
         
      )}
    </div>
  );
};
