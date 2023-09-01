import "./Link.styles.scss";

type LinkProperties = {
  href: string;
  text: string;
  className?: string;
};

const Link = ({ href, text, className = "" }: LinkProperties) => {
  return (
    <div className={`link ${className}`}>
      <a href={href}>{text}</a>
    </div>
  );
};

export default Link;
