import { useState, useRef, useEffect } from "react";
import { useClickOutside } from "../../hooks/use-click-outside";
import { Head } from "../../components/head";
import { NavMenu } from "../../components/nav-menu";

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [location] = useState<string>('Москва и область');
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toogleMenu = () => {
    setActiveMenu(prev => !prev);
  }

  useEffect(() => {
    const handleActive = () => {
      if (window.innerWidth > 769) {
        setActiveMenu(true);
      } else {
        setActiveMenu(false);
      }
    }

    window.addEventListener('resize', handleActive);
    handleActive();

    return () => {
      window.removeEventListener('resize', handleActive);
    }
  }, [])

  useClickOutside({ref: menuRef, callback: toogleMenu});

  return (
    <>
      <Head 
        location={location}
        activeMenu={activeMenu}
      />
      <NavMenu 
        ref={menuRef} 
        active={activeMenu} 
        location={location}
        setActive={setActiveMenu}
      />
    </>
  )
}