import React from "react";

import { Clock } from "../../components/clock/Clock";
import { List } from "../../components/list/List";
import {CardFooter} from "../../components/cardFooter/CardFooter";

import "./MainPage.scss";
import { picArr } from "../../components/picturesArray";


export const MainPage: React.FC = () => {

  return (
  <main className="main">
      <div className="main-Wrapper">
          {picArr.map(picture => {
              return (
                  <div className="main-Card">
                      <figure className="main-CardContainer">
                          <img className="main-CardInner" key={picture.id} src={picture.pic} alt="mainPic" />
                          <figcaption id={picture.id} className="main-CardDescription">{picture.description}</figcaption>
                      </figure>
                      <div>
                          <Clock />
                          <div className="main-Action">
                              <span className="main-ActionWord">АКЦИЯ - </span><span className="main-ActionText">Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off </span><span className="main-ActionYear">2019</span>
                          </div>
                          <List />
                          <CardFooter />
                      </div>
                  </div>
              )
          })}
      </div>
  </main>
  )
}