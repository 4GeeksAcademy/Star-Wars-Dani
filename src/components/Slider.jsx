import React , { useEffect, useState, useContext } from "react";
import { Context } from "../appContextProvider";
import Card from "./Card";
import '../styles/slider.css';

const Slider = ({ dataType }) => {
    const { store, actions } = useContext(Context);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        actions.getData(dataType);
    }, [dataType]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % store[dataType].length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? store[dataType].lengh - 1 : prevIndex - 1);
    };


    return (
        <div class name="slider-container">
            <button className="prev-btn" onClick={prevSlide}>&#10094</button>
            <div className="slider">
                {store[dataType].lenght > 0 && (
                    <Card item={store[dataType][currentIndex]} type={dataType} />
                )}
            </div>

            <div className="slider">
                {store[dataType].map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>



            <button className="next-btn" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};
export default Slider;