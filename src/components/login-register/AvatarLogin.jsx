import { useState } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { FiLogOut } from "react-icons/fi";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCredentials, setIsLogin } from "../../app/features/authUserSlice";
export const AvatarLogin = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const styles = {
    position: "absolute",
    top: 50,
    right: 0,
    left: -200,
    zIndex: 1,
    bgcolor:"#272657",   //"#010315", //#1f2937 
    width: "250px",
    color: "white",
    borderRadius: "10px",
  };

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
    <ClickAwayListener onClickAway={handleClickAway}>
      {/* the child listening for a click outside of its container */}
      <Box sx={{ position: "relative", width: "48px" }}>
        <button type="button" onClick={handleClick}>
          <Stack className="cursor-pointer" direction="row" spacing={1}>
            <Avatar
              sx={{ bgcolor: deepOrange[500] }}
              alt={isLogin ? user?.name.toUpperCase() : null} //*here the user.name
              src="/broken-image.jpg"
            />
          </Stack>
        </button>

        {open ? (
          <Box sx={styles}>
            <div className="flex items-center gap-3 p-4">
              <Avatar
                sx={{ bgcolor: deepOrange[500] }}
                alt={isLogin ? user?.name.toUpperCase() : null} //*here the user.name
                src="/broken-image.jpg"
              />
              <div className="flex flex-col justify-center w-44">
                <p className="font-semibold">{user?.name}</p>
                <small className="font-thin truncate text-[12px]">faure00@googlemail.com</small>
              </div>
            </div>
            <hr className="text-white w-full" />
            <div className="p-4">
           
              <button onClick={handleLogout} className="hover:bg-slate-400  w-full p-2 rounded-lg flex  items-center gap-3 ">
              <FiLogOut size={30} /> Log Out
            </button>
            </div>
            
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};
