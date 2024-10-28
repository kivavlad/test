import { useState, useRef, useEffect, forwardRef } from "react";
import { Location } from "../location";
import cls from "./style.module.scss";

interface IProps {
  active: boolean;
  location: string;
  setActive: (param: boolean) => void;
}

export const NavMenu = forwardRef<HTMLDivElement, IProps>(({ active, location, setActive }, ref) => {
  const menu = ["Преимущества Tele2", "Тарифы", "Акции и спецпредложения", "Промотариф Tele2", "Технология eSIM", "Подключение нового абонента"];
  const [selectedItem, setSelectedItem] = useState<string>(menu[0]);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    if (window.innerWidth < 769) {
      setActive(false);
    }
  }

  useEffect(() => {
    if (lineRef.current) {
      const activeItem = document.querySelector(`.${cls.active}`);

      if (activeItem) {
        const { offsetLeft, offsetWidth } = activeItem as HTMLElement;
        lineRef.current.style.width = `${offsetWidth}px`;
        lineRef.current.style.transform = `translateX(${offsetLeft}px)`;
      }
    }
  }, [selectedItem])

  return (
    <div 
      ref={ref} 
      className={active ? cls.nav : cls.hidden}
    >
      <div className="container">
        <div className={cls.menu}>
          {menu.map((item, index) => (
            <button 
              key={index}
              className={`${cls.menu_item} 
                ${selectedItem === item ? cls.active : ''}
              `}
              onClick={() => handleSelect(item)}
            >
              {item}
            </button>
          ))}
          <div ref={lineRef} className={cls.underline} />
        </div>
        <div className={cls.location}>
          <Location location={location}/>
        </div>
      </div>
    </div>
  )
})