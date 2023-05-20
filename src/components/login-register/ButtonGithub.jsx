import React from "react";
import { BsGithub } from "react-icons/bs";

export const ButtonGithub = ({ text }) => {
    const githubCallServer = () => {
        window.open("https://api-rest-node-express.up.railway.app/api/v1/auth/github", "_self");
   }
  return (
    <button onClick={githubCallServer}
     
      aria-label="Continue with github"
      role="button"
      className=" transition ease-in-out duration-0 hover:duration-300 hover:scale-[1.1]  focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3 px-4 rounded-3xl border-gray-700 flex items-center justify-center w-full mt-4 bg-[#1E293B]"
    >
       <BsGithub
           color='white'
           size={20}
        />
      <p className="text-base font-bold ml-4 text-gray-500">
        {/* Continue with Github */}
        {text}
      </p>
    </button>
  );
};
