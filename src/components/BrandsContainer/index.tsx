import TitleWithLines from "../TitleWithLines";
import style from "./style.module.css";

import starBucks from "../../assets/logo/Stackbuks logo.png";
import nescafe from "../../assets/logo/Nescafe-Logo.png";
import timHortons from "../../assets/logo/Tim hortins.png";
import dunkin from "../../assets/logo/Dunkin Donuts.png";

function BrandsContainer() {
  return (
    <div className={style.containerBrands}>
      <TitleWithLines title="Brands We Work With"></TitleWithLines>

      <div className={style.logos}>
        <picture className={style.picture}>
          <img className={style.img} src={starBucks} alt="" />
        </picture>
        <picture className={style.picture}>
          <img className={style.img} src={nescafe} alt="" />
        </picture>
        <picture className={style.picture}>
          <img className={style.img} src={timHortons} alt="" />
        </picture>
        <picture className={style.picture}>
          <img className={style.img} src={dunkin} alt="" />
        </picture>
      </div>
    </div>
  );
}

export default BrandsContainer;
