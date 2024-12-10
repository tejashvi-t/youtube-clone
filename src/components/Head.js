import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_SUGGESTION_API } from "../utils/constant";
import { svg } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  /***
   *
   *  */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setResult(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const jsonData = await data.json();
    console.log(jsonData [1]);
    setResult(jsonData[1]);

    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
  };

  /**
   *
   * key -i
   * render the component and make api call
   * key -ip
   * call useeffect()
   * start timer and call after 200ms
   * now what happen
   * destroy the component and call useeffect return method
   * re-render the component
   * - call useeffect()
   * now what hppn here just it call old timer or new timer is
   * created,
   *
   *
   */

  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex flex-col shadow-lg p-2 relative">
      <div className="flex justify-between">
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

        <div>
          <div className="flex h-9  ">
            <input
              className="w-96 border border-gray-300 p-2 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setshowSuggestions(true)}
              onBlur={() => setshowSuggestions(false)}
            />
            <button className="border border-gray-400 px-3  rounded-r-full ">
              {svg}
            </button>
          </div>

          {showSuggestions && (
            <div className="fixed bg-white w-[420px] rounded-xl ">
              <ul>
                {result.map((s) => (
                  <li
                    key={s}
                    className="flex items-center border-b-[1px] hover:bg-gray-200 rounded-xl mx-3 my-1"
                  >
                    {svg} {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-10">
          <img
            className="h-8 "
            alt="user"
            src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
