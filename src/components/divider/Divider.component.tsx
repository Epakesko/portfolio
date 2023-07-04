import { forwardRef } from "react";
import "./Divider.styles.scss";

type DividerProps = {
  text: string;
};

const Divider = forwardRef<HTMLDivElement, DividerProps>(({ text }, ref) => {
  return (
    <div ref={ref} className="divider">
      {text}
    </div>
  );
});

export default Divider;
