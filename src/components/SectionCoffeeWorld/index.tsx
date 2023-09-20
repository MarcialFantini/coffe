import caffee1 from "../../assets/coffees/coffee1.jpg";
import caffee2 from "../../assets/coffees/coffee2.jpg";
import caffee3 from "../../assets/coffees/coffee3.jpg";
import caffee4 from "../../assets/coffees/coffee4.jpg";
import CardCoffee from "../CardCoffee";
import TitleWithLines from "../TitleWithLines";

import style from "./style.module.css";

const cardsList = [
  {
    title: "Cappuccino",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "$8.60",
    src: caffee1,
  },
  {
    title: "Cappuccino",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "$8.60",
    src: caffee2,
  },
  {
    title: "Cappuccino",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "$8.60",
    src: caffee3,
  },
  {
    title: "Cappuccino",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "$8.60",
    src: caffee4,
  },
];

function SectionCoffeeWorld() {
  return (
    <section className={style.sectionCoffee}>
      <TitleWithLines title="Explore the Coffee World"></TitleWithLines>
      <div className={style.containerGrid}>
        {cardsList.map((item) => {
          return <CardCoffee card={item}></CardCoffee>;
        })}
      </div>
    </section>
  );
}

export default SectionCoffeeWorld;
