import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Coding",
  "Bhajans",
  "Cricket",
  "Sports",
  "News",
];
const ButtonList = () => {
  return (
    <div className="flex m-1">
      {list.map((item, index) => [<Button name={item} key={index} />])}
    </div>
  );
};

export default ButtonList;
