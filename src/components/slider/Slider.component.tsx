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
  imageSliderOnRight?: boolean;
};

type ImageSliderProps = {
  handleSlide: (forward: boolean) => void;
  items: SliderItem[];
  transitioning: boolean;
  startIndex: number;
};

type TextSliderProps = {
  items: SliderItem[];
  transitioning: boolean;
  startIndex: number;
};

const ImageSlider = ({ handleSlide, items, transitioning, startIndex }: ImageSliderProps) => {
  return (
    <div className="slider-items">
      <button className="slide-back" onClick={() => handleSlide(false)} disabled={transitioning} />
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
      <button className="slide-forward" onClick={() => handleSlide(true)} disabled={transitioning} />
    </div>
  );
};

const TextSlider = ({ items, transitioning, startIndex }: TextSliderProps) => {
  return (
    <div className="item-texts">
      {items.map((item, i) => (
        <div
          key={i}
          className={`item-text-container ${
            (i + startIndex) % items.length === 0
              ? `prev-item ${transitioning ? "fade-in" : ""}`
              : (i + startIndex) % items.length === 1
              ? `current-item ${transitioning ? "fade-out" : ""}`
              : (i + startIndex) % items.length === 2
              ? `next-item ${transitioning ? "fade-in" : ""}`
              : ""
          }`}
        >
          <div className="item-title">{item.title}</div>
          <div className="item-description">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

const Slider = ({ title, description, items, imageSliderOnRight = false }: SliderProps) => {
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

  const imageSlider = (
    <ImageSlider handleSlide={slide} items={items} transitioning={transitioning} startIndex={startIndex} />
  );

  const textSlider = <TextSlider items={items} transitioning={transitioning} startIndex={textStartIndex} />;

  return (
    <div className="slider">
      <div className={`slider-texts ${imageSliderOnRight ? "right-aligned-texts" : ""}`}>
        <div className="slider-title">{title}</div>
        <div className="slider-subtitle">{description}</div>
      </div>
      <div className="slider-container">
        {!imageSliderOnRight && imageSlider}
        {textSlider}
        {imageSliderOnRight && imageSlider}
      </div>
    </div>
  );
};

export default Slider;
