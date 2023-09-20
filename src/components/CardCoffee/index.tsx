import style from "./style.module.css";
interface props {
  card: { title: string; text: string; price: string; src: string };
}

function CardCoffee({ card }: props) {
  return (
    <div className={style.containerCard}>
      <picture className={style.pictureCard}>
        <img className={style.img} src={card.src} alt={card.title} />
      </picture>
      <div className={style.textContainer}>
        <h4 className={style.titleCard}>{card.title}</h4>
        <p className={style.text}>{card.text}</p>
      </div>
      <footer className={style.footer}>
        <p className={style.price}>{card.price}</p>
        <button className={style.button}>Order now</button>
      </footer>
    </div>
  );
}

export default CardCoffee;
