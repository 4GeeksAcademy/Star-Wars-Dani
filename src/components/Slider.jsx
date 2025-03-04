import React, { useEffect, useState, useContext } from "react";
import { Context } from "../appContextProvider";
import Card from "./Card";
import '../styles/slider.css';

const Slider = () => {
    const { getData, store, dataType } = useContext(Context);  
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (getData && dataType) {
            getData(dataType); 
        }
    }, [dataType, getData]); 

    useEffect(() => {
        console.log('Datos de store:', store);
        console.log('Datos de tipo actual:', store[dataType]);
    }, [store, dataType]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % store[dataType].length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? store[dataType].length - 1 : prevIndex - 1);
    };

    if (!store || !store[dataType] || store[dataType].length === 0) {
        return <div>Cargando...</div>;  
    }

    return (
        <div className="slider-container">
            <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
            <div className="slider">
                <Card item={store[dataType][currentIndex]} type={dataType} />
            </div>

            <div className="slider">
                {store[dataType].map((item, index) => (
                    <Card key={item.url || index} item={item} type={dataType} />
                ))}
            </div>

            <button className="next-btn" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Slider;
