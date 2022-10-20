import React, {useState} from "react";
import yellowArrow from '../assets/vector/yelowArr.svg'
import {Button} from "../button/Button";
import "./List.scss";

export const List: React.FC = () => {
    const [showButtons, setShowButtons] = useState(true);
    const openButtons = () => {
        setShowButtons(!showButtons)
    }

    return (
        <div className="list">
            <ul className="list-Wrapper">
                <li>
                    <img className="list-Img" src={yellowArrow} alt="arrow"/><span className="list-Text">Билет на целый день</span>
                </li>
                <li>
                    <img className="list-Img" src={yellowArrow} alt="arrow"/><span className="list-Text">Неограниченное число катаний</span>
                </li>
                <li>
                    <img className="list-Img" src={yellowArrow} alt="arrow"/><span className="list-Text">6 остановок у главных достопримечательностей</span>
                </li>
                <li>
                    <img className="list-Img" src={yellowArrow} alt="arrow"/><span className="list-Text">Ближайший рейс сегодня</span>

                </li>
            </ul>
            <div className="list-Buttons">
                <Button>12:00</Button>
                <div>
                    {showButtons ? <Button onClick={openButtons}>ещё...</Button> :
                        <div><Button>12:00</Button><Button>12:00</Button><Button>12:00</Button></div>}
                </div>
            </div>
        </div>
    )
}