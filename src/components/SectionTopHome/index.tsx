import imgTop from "../../assets/hero/heroCoffee.jpg";
import Hero from "../Hero";
import style from "./style.module.css";

function SectionTopHome() {
  return (
    <div className={style.containerTop}>
      <picture className={style.picture}>
        <img className={style.img} src={imgTop} alt="" />
      </picture>
      <div className={style.filter}></div>
      <Hero></Hero>
    </div>
  );
}

export default SectionTopHome;
