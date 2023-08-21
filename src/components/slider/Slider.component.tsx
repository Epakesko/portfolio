import { ReactNode, useState } from "react";
import "./Slider.styles.scss";
import useReveal from "../../hooks/useReveal";

type SliderItem = {
  image: string;
  title: string;
  description: string;
};

type SliderProps = {
  title: string;
  children: ReactNode;
  items: SliderItem[];
  imageSliderOnRight?: boolean;
};

type ImageSliderProps = {
  className: string;
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

const ImageSlider = ({ className, handleSlide, items, transitioning, startIndex }: ImageSliderProps) => {
  const [revealed, imageSliderRef] = useReveal<HTMLDivElement>();

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
    <div
      ref={imageSliderRef}
      className={`slider-items ${className} ${revealed ? "" : "hidden"}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
  const [revealed, textSliderRef] = useReveal<HTMLDivElement>();

  return (
    <div ref={textSliderRef} className={`item-texts ${className} ${revealed ? "" : "hidden"}`}>
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
          <h4 className="item-title">{item.title}</h4>
          <div className="item-description">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

const Slider = ({ title, children, items, imageSliderOnRight = false }: SliderProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [textStartIndex, setTextStartIndex] = useState(0);
  const [transitioning, isTransitioning] = useState(false);
  const [revealed, sliderTextsRef] = useReveal<HTMLDivElement>();

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
      <div
        ref={sliderTextsRef}
        className={`slider-texts ${imageSliderOnRight ? "" : "right-aligned-texts"} ${revealed ? "" : "hidden"}`}
      >
        <h2 className="slider-title">{title}</h2>
        <div className="slider-subtitle">{children}</div>
      </div>
      <div className="slider-container">
        <TextSlider
          className={`${imageSliderOnRight ? "" : "right-aligned"}`}
          items={items}
          transitioning={transitioning}
          startIndex={textStartIndex}
        />
        <ImageSlider
          className={`${imageSliderOnRight ? "right-aligned" : ""}`}
          handleSlide={slide}
          items={items}
          transitioning={transitioning}
          startIndex={startIndex}
        />
      </div>
    </div>
  );
};

export default Slider;
