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
              className={"exp_point_icon " + level[1].color}
              src="/image/exploration_point.png"
              alt="exploration_point"
            />
          )}
          <img
            className={"level_icon " + level[1].color}
            src={`/image/level_icons/${level[1].icon}.png`}
            alt={level[1].icon}
          />
          <img
            className={"level_icon level_icon_ghost " + level[1].color}
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
              .level_icon.blue:not(.level_icon_ghost) {
                filter: invert(1) invert(65%) sepia(40%) saturate(5396%)
                  hue-rotate(159deg) brightness(101%) contrast(102%)
                  drop-shadow(0 0 8px var(--blue-darker));
              }
              .level_icon.pink:not(.level_icon_ghost) {
                filter: invert(1) invert(61%) sepia(59%) saturate(4618%)
                  hue-rotate(260deg) brightness(106%) contrast(103%)
                  drop-shadow(0 0 8px var(--pink-darker));
              }
              .level_icon.orange:not(.level_icon_ghost) {
                filter: invert(1) invert(90%) sepia(14%) saturate(6503%)
                  hue-rotate(332deg) brightness(101%) contrast(103%)
                  drop-shadow(0 0 8px var(--orange-darker));
              }
            `}
          </style>
        </figure>
      ))}
    </section>
  );
};
