import { useEffect, useState } from 'react';
import './Navigation.styles.scss';
import React from 'react';

type NavigationProps = {
    navItems: string[]
}

const Navigation = ({navItems} : NavigationProps) => {
  const [opacity, setOpacity] = useState(0);
  const ref = React.useRef<HTMLElement>(null);
  
  useEffect(() => {
    if(ref.current) {
      ref.current.style.setProperty('--opacity', opacity.toString());
    }
  }, [opacity])

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const scrollY = window.scrollY;
      if(scrollY > 600) setOpacity(0.2);
      else setOpacity(scrollY / 600 * 0.2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return ( 
        <nav ref={ref} className="top-navigation">
            <ul className="navigation-items">
                {navItems.map((item, i) => (
                    <div key={i} className="navigation-item">{item}</div>
                ))}
            </ul>
        </nav>
    );
}
 
export default Navigation;