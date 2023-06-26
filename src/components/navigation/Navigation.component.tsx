import { useEffect, useState } from 'react';
import './Navigation.styles.scss';

type NavigationProps = {
    navItems: string[]
}

const Navigation = ({navItems} : NavigationProps) => {
  const [opacity, setOpacity] = useState(0);
  
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
        <nav className="top-navigation" style={{backgroundColor: `rgba(11, 11, 41, ${opacity})`, borderColor: `rgba(11, 11, 41, ${opacity * 2})`, boxShadow: `0 4px 30px rgba(0, 0, 0, ${opacity})`}}>
            <ul className="navigation-items">
                {navItems.map((item, i) => (
                    <div key={i} className="navigation-item">{item}</div>
                ))}
            </ul>
        </nav>
    );
}
 
export default Navigation;