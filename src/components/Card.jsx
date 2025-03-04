import React from "react";
import "../styles/card.css";

const Card = ({ item, type }) => {
    return (
        <div className="card">
            <h3>{item.name}</h3>
            {type === "characters" && <p>Género: {item.gender}</p>}
            {type === "planets" && <p>Clima: {item.climate}</p>}
            {type === "vehicles" && <p>Modelo: {item.model}</p>}
        </div>
    );
};

export default Card;