import type { FC } from "react";
import style from "../styles/Chapter.module.scss";

export interface ChapterProps {
  id: string;
  levels: object;
}

export const Chapter: FC<ChapterProps> = ({ id, levels }) => {
  return (
    <section className={style.chapter} id={id}>
      {Object.entries(levels).map((level, index) => (
        <figure className="level" key={index}>
          {level[1].exploration && (
            <img
              className={`${style.exp_point_icon} ${level[1].color}`}
              src="/image/exploration_point.png"
              alt="exploration_point"
            />
          )}
          <img
            className={style.level_icon}
            src={`/image/level_icons/${level[1].icon}.png`}
            alt={level[1].icon}
          />
          <img
            className={`${style.level_icon} ${style.level_icon_ghost}`}
            src={`/image/level_icons/${level[1].icon}.png`}
            alt={level[1].icon}
          />
          <h1>{level[0]}</h1>
          <style jsx>
            {`
              h1 {
                filter: drop-shadow(0 0 8px var(--${level[1].color}-darker));
                color: var(--${level[1].color});
              }
              .level {
                animation-delay: ${index * 0.25}s;
              }
              .Chapter_level_icon__elxy_ {
                filter: var(--${level[1].color}-filter);
              }
              .Chapter_level_icon_ghost__2CJbI {
                filter: var(--${level[1].color}-ghost-filter);
              }
              .Chapter_exp_point_icon__1u4b1 {
                filter: var(--${level[1].color}-filter);
              }
            `}
          </style>
        </figure>
      ))}
    </section>
  );
};
