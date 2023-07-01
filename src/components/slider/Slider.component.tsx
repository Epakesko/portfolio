import { useState } from "react";
import "./Slider.styles.scss";

type SliderItem = {
  image: string;
  title: string;
  description: string;
};

type SliderProps = {
  title: string;
  description: string;
  items: SliderItem[];
};

const Slider = ({ title, description, items }: SliderProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [textStartIndex, setTextStartIndex] = useState(0);
  const [transitioning, isTransitioning] = useState(false);

  const slide = (forward: boolean) => {
    isTransitioning(true);
    setStartIndex((startIndex + items.length + (forward ? 1 : -1)) % items.length);
    setTimeout(() => {
      isTransitioning(false);
      setTextStartIndex((textStartIndex + items.length + (forward ? 1 : -1)) % items.length);
    }, 500);
  };

  return (
    <div className="slider">
      <h3>{title}</h3>
      <span>{description}</span>
      <div className="slider-container">
        <div className="slider-items">
          <button className="slide-back" onClick={() => slide(false)} disabled={transitioning} />
          {items.map((item, i) => (
            <img
              key={i}
              className={`slider-item ${
                (i + startIndex) % items.length === 0
                  ? "prev-item"
                  : (i + startIndex) % items.length === 1
                  ? "current-item"
                  : (i + startIndex) % items.length === 2
                  ? "next-item"
                  : ""
              }`}
              src={item.image}
              alt=""
            />
          ))}
          <button className="slide-forward" onClick={() => slide(true)} disabled={transitioning} />
        </div>
        <div className="item-texts">
          {items.map((item, i) => (
            <div
              key={i}
              className={`item-text-container ${
                (i + textStartIndex) % items.length === 0
                  ? "prev-item"
                  : (i + textStartIndex) % items.length === 1
                  ? `current-item ${transitioning ? "fade-out" : ""}`
                  : (i + textStartIndex) % items.length === 2
                  ? "next-item"
                  : ""
              }`}
            >
              <div className="item-title">{item.title}</div>
              <div className="item-description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
