import React from 'react'

export const ButtonLR = () => {
  return (
    <div className="login-singUp">
          <button
            onClick={() => window.location.replace("/signup",true)}
            className=" py-3 px-6 rounded-3xl text-white hover:text-blue-400"
          >
            Sing up
          </button>
          <button
            onClick={() => window.location.replace("/login",true)}
            className=" border py-3 px-6 rounded-3xl bg-white "
          >
            Login in
          </button>
        </div>
  )
}
