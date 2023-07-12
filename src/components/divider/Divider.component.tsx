import { forwardRef } from "react";
import "./Divider.styles.scss";
import useReveal from "../../hooks/useReveal";

type DividerProps = {
  text?: string;
  children?: React.ReactNode;
};

const Divider = forwardRef<HTMLDivElement, DividerProps>(({ text, children }, ref) => {
  const [revealed, dividerRef] = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="section-container">
      {text && (
        <div ref={dividerRef} className={`divider ${revealed ? "" : "hidden"}`}>
          {text}
        </div>
      )}
      {children}
    </div>
  );
});

export default Divider;
