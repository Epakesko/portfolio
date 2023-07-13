import "./Link.styles.scss";

type LinkProperties = {
  href: string;
  text: string;
};

const Link = ({ href, text }: LinkProperties) => {
  return (
    <div className="link">
      <a href={href}>{text}</a>
    </div>
  );
};

export default Link;
