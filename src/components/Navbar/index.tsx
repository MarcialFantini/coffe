import { useEffect, useState } from "react";
import style from "./style.module.css";

function Navbar() {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const [isWidth, setIsWidth] = useState(window.innerWidth > 800);

  const handlerToggle = () => setIsActiveNav((prev) => !prev);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsWidth(window.innerWidth > 800);
    });
  }, []);

  return (
    <div className={style.navbar}>
      <h2 className={style.title}>Filtro</h2>
      {isWidth ? (
        <nav className={style.nav}>
          <ul className={style.listLink}>
            <li>Home</li>
            <li>Explore Us</li>
            <li>Brands</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      ) : (
        ""
      )}

      {isWidth ? (
        <div className={style.buttons}>
          <button className={style.button}>Sign up/Login</button>
          <button className={style.button}>Get the app</button>
        </div>
      ) : (
        ""
      )}
      {!isWidth ? (
        <div className={style.mobile + " " + (isActiveNav ? style.active : "")}>
          <nav className={style.nav}>
            <ul className={style.listLink}>
              <li>Home</li>
              <li>Explore Us</li>
              <li>Brands</li>
              <li>Contact Us</li>
            </ul>
          </nav>

          <div className={style.buttons}>
            <button className={style.button}>Sign up/Login</button>
            <button className={style.button}>Get the app</button>
          </div>
        </div>
      ) : (
        ""
      )}

      <button onClick={handlerToggle} className={style.btnExit}>
        X
      </button>
    </div>
  );
}

export default Navbar;
