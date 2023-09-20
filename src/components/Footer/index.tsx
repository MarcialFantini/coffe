import style from "./style.module.css";
import social from "../../assets/social/social icons.png";
import TitleWithLines from "../TitleWithLines";

function Footer() {
  return (
    <div className={style.containerFooter}>
      <div className={style.maxContainer}>
        <TitleWithLines
          color="white"
          title="Get in Touch with Us"
        ></TitleWithLines>
        <div className={style.containerList}>
          <ul className={style.list}>
            <li>Merchandise</li>
            <li>T-shirts</li>
            <li>Caps</li>
            <li>Masks</li>
          </ul>
          <ul className={style.list}>
            <li>Franchise</li>
            <li>Coffee Outlet</li>
            <li>Coffee Vending Machine</li>
            <li>Contact Us</li>
          </ul>
          <ul className={style.list}>
            <li>About Us</li>
            <li>Promotions</li>
            <li>Customer Care</li>
            <li>Legal Information</li>
            <li>Achievements </li>
            <li>Careers</li>
          </ul>

          <ul className={style.list}>
            <li>Follow Us</li>
            <li>
              <picture>
                <img src={social} alt="" />
              </picture>
            </li>
          </ul>
        </div>
        <div className={style.line}></div>
      </div>
    </div>
  );
}

export default Footer;
