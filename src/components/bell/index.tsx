import cls from "./style.module.scss";

export const Bell: React.FC = () => {
  return (
    <div className={cls.notification_bell}>
      <span className={cls.bell_top}></span>
      <span className={cls.bell_middle}>
        <div className={cls.notificate}/>
      </span>
      <span className={cls.bell_bottom}></span>
      <span className={cls.bell_rad}></span>
    </div>
  )
}