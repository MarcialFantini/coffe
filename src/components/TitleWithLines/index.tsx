import style from "./style.module.css";

function TitleWithLines({ title, color }: { title: string; color?: string }) {
  return (
    <div className={style.containerTitle}>
      <div className={style.containerLine}>
        <div style={{ background: color }} className={style.line}></div>
      </div>
      <div className={style.containerTitleH2}>
        <h2 style={{ color: color ? color : "" }} className={style.title}>
          {title}
        </h2>
      </div>
      <div className={style.containerLine}>
        <div style={{ background: color }} className={style.line}></div>
      </div>
    </div>
  );
}

export default TitleWithLines;
