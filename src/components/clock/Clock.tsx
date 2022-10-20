import React from "react";
import "./Clock.scss";
import clockArrow from "../assets/vector/clockArr.svg";
import clockBody from "../assets/vector/clockBody.svg";


export const Clock: React.FC = () => {
  return (
  <div className="clock">
    <img src={clockBody} alt="arrow">

    </img>
    <img src={clockArrow} alt="circle"></img>
  </div>
  )
}