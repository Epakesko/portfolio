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
        {items.map(item => (
          <div className="slider-item" style={{ backgroundImage: `url(${item.image})` }}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
