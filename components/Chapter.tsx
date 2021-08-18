import { FC, useEffect, useState } from "react";
import style from "@styles/Chapter.module.scss";

function playSound(type: string) {
  let audio = "default";
  if (type == "blue") audio = "blue";
  new Audio(`/sound/hover_level_${audio}.mp3`).play();
}

interface ChapterProps {
  id: string;
  levels: object;
}

export const Chapter: FC<ChapterProps> = ({ id, levels }) => {
  const [activeSlot, setActiveSlot] = useState({
    room: 143,
  });
  useEffect(() => {
    setActiveSlot(
      JSON.parse(localStorage.slots)[
        Number(window.location.search.substr(-1)) - 1
      ]
    );
  }, []);

  function selectLevel(id: number) {
    if (typeof window !== "undefined") {
      let slots = JSON.parse(localStorage.slots);
      activeSlot.room = id;
      slots[Number(window.location.search.substr(-1)) - 1].room = id;
      localStorage.slots = JSON.stringify(slots);
      console.log(activeSlot);
    }
  }

  return (
    <section className={style.chapter} id={id}>
      {Object.entries(levels).map((level, index) => (
        <figure
          className="level"
          key={index}
          onMouseEnter={() => playSound(level[1].color)}
          onClick={() => selectLevel(level[1].id)}
        >
          {activeSlot.room == level[1].id && (
            <img
              className={style.selected_room}
              src="/image/shelly.png"
              alt="selected_room"
              draggable="false"
            />
          )}
          {level[1].exploration && (
            <img
              className={`${style.exp_point_icon} ${level[1].color}`}
              src="/image/exploration_point.png"
              alt="exploration_point"
              draggable="false"
            />
          )}
          <img
            className={style.level_icon}
            src={`/image/level_icons/${level[1].icon}.png`}
            alt={level[1].icon}
            draggable="false"
          />
          <img
            className={`${style.level_icon} ${style.level_icon_ghost}`}
            src={`/image/level_icons/${level[1].icon}.png`}
            alt={level[1].icon}
            draggable="false"
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
