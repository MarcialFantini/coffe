import style from "./style.module.css";

function Hero() {
  return (
    <div className={style.hero}>
      <h1 className={style.title}>Power up with coffee</h1>
      <h2 className={style.subTitle}>
        Start your exciting day with a cup of Brew Coffee
      </h2>
      <button className={style.button}>Explore Us</button>
    </div>
  );
}

export default Hero;
