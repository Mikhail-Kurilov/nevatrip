import React, { useState } from "react";
import "./List.scss";
import yellowArrow from '../assets/vector/yelowArr.svg'
import {Button} from "../button/Button";

export const List: React.FC = () => {
    const [showButtons, setShowButtons] = useState(false);
    const openButtons = () => {
       setShowButtons(!showButtons)
    }

    return (
      <div>
        <ul>
          <li>
            <img src={yellowArrow} alt="arrow" /><span>Билет на целый день</span>
          </li>
          <li>
            <img src={yellowArrow} alt="arrow" /><span>Неограниченное число катаний</span>
          </li>
          <li>
            <img src={yellowArrow} alt="arrow" /><span>6 остановок у главных достопримечательностей</span>
          </li>
          <li>
            <img src={yellowArrow} alt="arrow" /><span>Ближайший рейс сегодня</span>
              <div>
                  <Button>12:00</Button>
                  <Button onClick={openButtons}>ещё...</Button>
                  <div>
                      {showButtons ? <div><button>12:00</button><button>12:00</button><button>12:00</button></div> : "" }
                  </div>
              </div>
          </li>
        </ul>
      </div>
    ) 
}