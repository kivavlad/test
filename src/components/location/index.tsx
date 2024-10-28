import { locationImg } from "../../assets/icons";
import cls from "./style.module.scss";

interface IProps {
  location: string;
}

export const Location: React.FC<IProps> = ({ location }) => {
  return (
    <div className={cls.location}>
      <img src={locationImg} alt="" />
      <h4>{location}</h4>
    </div>
  )
}