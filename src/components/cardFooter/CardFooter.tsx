import React from "react"
import { useNavigate } from "react-router-dom";

import "./CardFooter.scss";
import rubble from "../assets/vector/ruble.svg";

export const CardFooter: React.FC = () => {
    const navigate = useNavigate()

    const handleDetailed = () => {
        navigate("/detailed")
    }

    return (
        <div className="cardFooter">
            <div className="cardFooter-Price">
                <div className="cardFooter-PriceContainer">
                    <span className="cardFooter-PriceNumber">900</span><img className="cardFooter-PriceImg" src={rubble} alt={rubble} />
                </div>
            </div>
            <button className="cardFooter-ButtonDetailed" onClick={handleDetailed}>Подробнее</button>
        </div>
    )
}