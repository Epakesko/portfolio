import "./Button.styles.scss";
import Link from "./Link.component";

type ButtonProps = {
  text: string;
  href?: string;
  className?: string;
};

const Button = ({ text, href = "#", className = "" }: ButtonProps) => {
  return <Link href={href} className={`button ${className}`} text={text} />;
};

export default Button;
