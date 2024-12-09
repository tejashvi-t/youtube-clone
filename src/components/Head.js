import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between shadow-lg p-2">
      <div className="flex w-10">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp"
          onClick={() => toogleMenuHandler()}
        />

        <a href="/">
          <img
            className="h-8 mx-3 "
            alt="youtube-logo"
            src="https://cdn.worldvectorlogo.com/logos/youtube-6.svg"
          />
        </a>
      </div>

      <div className="flex h-9  ">
        <input
          className="w-96 border border-gray-300 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-3  rounded-r-full ">
          Search
        </button>
      </div>

      <div className="w-10">
        <img
          className="h-8 "
          alt="user"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
