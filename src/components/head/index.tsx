import { Location } from "../location";
import { Bell } from "../bell";
import { logoImg, hambergerImg, closeImg } from "../../assets/icons";
import cls from "./style.module.scss";

interface IProps {
  location: string;
  activeMenu: boolean;
}

export const Head: React.FC<IProps> = ({location, activeMenu}) => {
  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.content}>
          <div className={cls.logo}>
            <img src={logoImg} alt="logo" />
          </div>

          {window.innerWidth > 769 
            ? <div className={cls.info}>
                <div className={cls.location}>
                  <Location location={location} />
                </div>
                <div className={cls.notification}>
                  <Bell />
                </div>
              </div>
            :
              <>
                {!activeMenu
                  ? 
                    <div className={cls.info}>
                      <div className={cls.location}>
                        <Location location={location} />
                      </div>
                      <div className={cls.notification}>
                        <Bell />
                      </div>
                      <button className={cls.hamburger}>
                        <img src={hambergerImg} alt=""/>
                      </button>
                    </div>
                  : 
                    <button>
                      <img src={closeImg} alt="x"/>
                    </button>
                }
              </>
          }

        </div>
      </div>
    </header>
  )
}