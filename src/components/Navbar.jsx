import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { SiSharp } from "react-icons/si";

export const Navbar = () => {
  const [click, setClick] = useState({
    Around_You: false,
    "Top Artists": false,
    "Top Charts": false,
  });

  const activeClassName = (e) => {
    switch (e.target.innerText) {
      case "Discover":
        setClick({
          Around_You: false,
          "Top Artists": false,
          "Top Charts": false,
        });
        break;
      case "Around You":
        setClick({
          ...click,
          Around_You: true,
          "Top Artists": false,
          "Top Charts": false,
        });

        break;
      case "Top Artists":
        setClick({
          ...click,
          "Top Artists": true,
          Around_You: false,
          "Top Charts": false,
        });

        break;
      case "Top Charts":
        setClick({
          ...click,
          "Top Charts": true,
          Around_You: false,
          "Top Artists": false,
        });

        break;
    }
  };

  return (
    <div className="md:ml-4">
      <div
        className="text-white/80 md:text-slate-400 font-semibold md:w-56"
        onClick={(e) => activeClassName(e)}
      >
        <div className="flex items-center py-4 gap-x-2 text-blue-400  hover:bg-[#4c426e]/30 rounded-lg ">
          <AiOutlineHome className="w-6 h-6" />
          <Link to={"#"}>Discover</Link>
        </div>
        <div
          className={` flex items-center py-4 gap-x-2  hover:bg-[#4c426e]/30  rounded-lg  ${
            click.Around_You ? "text-blue-400" : null
          } `}
        >
          <FiMapPin className="w-6 h-6" />
          <Link to={"#"}> Around You</Link>
        </div>
        <div
          className={` flex items-center py-4 gap-x-2  hover:bg-[#4c426e]/30  rounded-lg  ${
            click["Top Artists"] ? "text-blue-400" : null
          }`}
        >
          <IoIosPeople className="w-6 h-6" />
          <Link to={"#"}> Top Artists</Link>
        </div>
        <div
          className={` flex items-center py-4 gap-x-2   hover:bg-[#4c426e]/30  rounded-lg ${
            click["Top Charts"] ? "text-blue-400" : null
          }`}
        >
          <SiSharp className="w-6 h-6" />
          <Link to={"#"}> Top Charts</Link>
        </div>
      </div>
    </div>
  );
};
