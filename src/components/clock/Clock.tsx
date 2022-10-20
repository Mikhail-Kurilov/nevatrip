import React from "react";
import "./Clock.scss";
import clockArrow from "../assets/vector/clockArr.svg";
import clockBody from "../assets/vector/clockBody.svg";



export const Clock: React.FC = () => {
  return (
  <div className="clock">
    <img className="clockBody" src={clockBody} alt="arrow" />
    <img className="clockArrow" src={clockArrow} alt="circle"/>
    <span className="clockTwo">2 часа</span>
  </div>
  )
}