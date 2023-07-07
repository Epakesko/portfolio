import { useEffect, useState } from "react";
import "./Navigation.styles.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type NavItemProps = {
  text: string;
  sectionRef?: React.MutableRefObject<HTMLDivElement | null>;
};

type NavigationProps = {
  navItems: NavItemProps[];
  activeSections: Element[] | undefined;
};

const Navigation = ({ navItems, activeSections }: NavigationProps) => {
  const [opacity, setOpacity] = useState(0);
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState<Element>();
  const ref = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (activeSections && (!activeSection || !activeSections.includes(activeSection))) {
      setActiveSection(activeSections[0]);
    }
  }, [activeSection, activeSections]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty("--opacity", opacity.toString());
    }
  }, [opacity]);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const scrollY = window.scrollY;
      if (scrollY > 600) setOpacity(0.3);
      else setOpacity((scrollY / 600) * 0.3);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (sectionRef: React.MutableRefObject<HTMLDivElement | null>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setActive(false);
    }
  };

  return (
    <nav ref={ref} className={`top-navigation ${active ? "active" : ""}`}>
      <FontAwesomeIcon
        className="open-menu"
        icon={active ? faXmark : faBars}
        size="xl"
        onClick={() => setActive(active => !active)}
      />
      <ul className="navigation-items">
        {navItems.map((item, i) => {
          return (
            <div
              key={i}
              className={`navigation-item ${item.sectionRef?.current === activeSection ? "active" : ""}`}
              onClick={() => item.sectionRef && handleClick(item.sectionRef)}
            >
              {item.text}
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
