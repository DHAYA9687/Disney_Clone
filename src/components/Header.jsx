import React from "react";
import { HiDotsVertical, HiPlus } from "react-icons/hi";

import { useState } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiStar,
  HiTv,
} from "react-icons/hi2";
import avatar from "../assets/images/avatar.jpg";
import logo from "../assets/images/Disney1.png";
import HeaderItem from "./HeaderItem";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[100px]  md:w-[150px] object-cover"
          alt="Disney Logo"
        />
        <div className="hidden md:flex gap-8 items-center ">
          {menu.map((item) => {
            return (
              <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
            );
          })}
        </div>
        <div className="flex md:hidden gap-5 items-center ">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={""} Icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={handleClick}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={item.name}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <img
        src={avatar}
        alt="Avatar.png"
        className="w-[40px] rounded-full border-none"
      />
    </div>
  );
};

export default Header;
