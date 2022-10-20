import React from "react";
import { useNavigate } from "react-router-dom";

import { Clock } from "../../components/clock/Clock";
import { List } from "../../components/list/List";

import "./MainPage.scss";
import { picArr } from "../../components/picturesArray";
import rubble from "../../components/assets/vector/ruble.svg";
import { Button } from "../../components/button/Button";

export const MainPage: React.FC = () => {
    const navigate = useNavigate()
  const handleDetailed = () => {
      navigate("/detailed")
  }
  return (
  <div>
      <div>
          {picArr.map(picture => {
              return (
                  <div>
                      <figure>
                          <img key={picture.id} src={picture.pic} alt="mainPic" />
                          <figcaption>{picture.description}</figcaption>
                      </figure>
                      <div>
                          <Clock />
                          <div><span>АКЦИЯ - </span><span>Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off </span><span>2019</span></div>
                          <List />
                          <div><div><span>900</span><img src={rubble} alt={rubble} /></div><Button onClick={handleDetailed}>Подробнее</Button></div>
                      </div>
                  </div>
              )
          })}
      </div>
  </div>
  )
}