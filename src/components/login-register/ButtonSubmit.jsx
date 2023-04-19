import React from "react";

export const ButtonSubmit = ({ text,}) => {
 
  return (
    <>
      <button 
        type="submit"
        role="button"
        aria-label="create my account"
        className=" transition ease-in-out duration-0 hover:duration-300 hover:scale-[1.1] focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded-3xl hover:bg-indigo-600 py-4 w-full"
      >
        {text}
      </button>
    </>
  );
};
