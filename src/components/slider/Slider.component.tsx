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
  className: string;
  items: SliderItem[];
  transitioning: boolean;
  startIndex: number;
};

const ImageSlider = ({ handleSlide, items, transitioning, startIndex }: ImageSliderProps) => {
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartPos = e.touches[0].clientX;
    setTouchPosition(touchStartPos);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchStartPos = touchPosition;

    if (touchStartPos === null) {
      return;
    }

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartPos - touchEnd;

    if (diff > 30) {
      handleSlide(true);
    }

    if (diff < -30) {
      handleSlide(false);
    }

    setTouchPosition(null);
  };

  return (
    <div className="slider-items" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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

const TextSlider = ({ className, items, transitioning, startIndex }: TextSliderProps) => {
  return (
    <div className={`item-texts ${className}`}>
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
    setStartIndex(startIndex => (startIndex + items.length + (forward ? -1 : 1)) % items.length);
    setTimeout(() => {
      isTransitioning(false);
      setTextStartIndex(textStartIndex => (textStartIndex + items.length + (forward ? -1 : 1)) % items.length);
    }, 500);
  };

  return (
    <div className="slider">
      <div className={`slider-texts ${imageSliderOnRight ? "right-aligned-texts" : ""}`}>
        <div className="slider-title">{title}</div>
        <div className="slider-subtitle">{description}</div>
      </div>
      <div className="slider-container">
        <TextSlider
          className={`${imageSliderOnRight ? "right-aligned" : ""}`}
          items={items}
          transitioning={transitioning}
          startIndex={textStartIndex}
        />
        <ImageSlider handleSlide={slide} items={items} transitioning={transitioning} startIndex={startIndex} />
      </div>
    </div>
  );
};

export default Slider;
