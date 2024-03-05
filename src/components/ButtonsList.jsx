import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const buttonNames = [
  "All",
  "Live",
  "Computer Science",
  "Songs",
  "Meditation Music",
  "Cricket",
  "Cooking",
  "Holi 2024",
  "Valentines",
];

const ButtonsList = () => {
  const showSidebar = useSelector((store) => store.app.showSidebar);

  return (
    <div className={`flex mt-16 ${showSidebar ? "ml-48" : "ml-10"}`}>
      {buttonNames.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonsList;
