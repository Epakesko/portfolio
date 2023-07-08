import { forwardRef } from "react";
import "./Divider.styles.scss";

type DividerProps = {
  text: string;
  children?: React.ReactNode;
};

const Divider = forwardRef<HTMLDivElement, DividerProps>(({ text, children }, ref) => {
  return (
    <div ref={ref} className="section-container">
      <div className="divider">{text}</div>
      {children}
    </div>
  );
});

export default Divider;
