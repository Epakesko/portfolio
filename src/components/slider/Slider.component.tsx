import "./Slider.styles.scss";

type SliderItem = {
  image: string;
  text: string;
};

type SliderProps = {
  title: string;
  description: string;
  items: SliderItem[];
};

const Slider = ({ title, description, items }: SliderProps) => {
  return (
    <div className="slider-container">
      <h3>{title}</h3>
      <span>{description}</span>
      <div className="slider-items">
        {items.map((item, i) => (
          <img
            key={i}
            className={`slider-item ${i === 0 ? "prev-item" : i === 2 ? "next-item" : ""}`}
            src={item.image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
