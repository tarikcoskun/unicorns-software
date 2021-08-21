import { FC as Component, useEffect, useState } from "react";
import style from "@style/Chapter.module.scss";

function playSound(type: string) {
  let audio = "default";
  if (type == "blue") audio = "blue";
  new Audio(`/sound/hover_level_${audio}.mp3`).play();
}

interface ChapterProps {
  id: string;
  levels: object;
}

export const Chapter: Component<ChapterProps> = ({ id, levels }) => {
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
      console.log("Old room: " + activeSlot.room);
      let slots = JSON.parse(localStorage.slots);
      activeSlot.room = id;
      slots[Number(window.location.search.substr(-1)) - 1].room = id;
      localStorage.slots = JSON.stringify(slots);
      console.log("New room: " + activeSlot.room);
    }
  }

  return (
    <section className={style.chapter} id={id}>
      {Object.entries(levels).map((level, index) => (
        <figure
          className="level"
          style={{ animationDelay: index * 0.25 + "s" }}
          key={index}
          onMouseEnter={() => playSound(level[1].color)}
          onClick={() => selectLevel(level[1].id)}
        >
          <header className={style.upper}>
            {level[1].exploration && (
              <img
                className={`${style.exploration_point} ${level[1].color}`}
                style={{ filter: `var(--${level[1].color}-filter)` }}
                src="/image/exploration_point.png"
                alt="exploration_point"
                draggable="false"
                onDragStart={() => false}
              />
            )}
            {/* {level[1].combat &&
              [0, 0, 0, 0].map((difficulty, index) => (
                <img
                  key={index}
                  className={style.beaten_on_difficulty}
                  style={{
                    filter: `var(--${level[1].color}-filter)`,
                  }}
                  src="/image/difficulty_point.png"
                  alt="difficulty"
                />
              ))} */}
          </header>
          {activeSlot.room == level[1].id && (
            <img
              className={style.selected_level}
              src="/image/shelly.png"
              alt="selected_level"
              draggable="false"
              onDragStart={() => false}
            />
          )}
          <img
            className={style.level_icon}
            style={{ filter: `var(--${level[1].color}-filter)` }}
            src={`/image/level_icons/${level[1].icon}.png`}
            alt={level[1].icon}
            draggable="false"
            onDragStart={() => false}
          />
          <img
            className={`${style.level_icon} ${style.level_icon_ghost}`}
            style={{ filter: `var(--${level[1].color}-ghost-filter)` }}
            src={`/image/level_icons/${level[1].icon}.png`}
            alt={level[1].icon}
            draggable="false"
            onDragStart={() => false}
          />
          <h1
            style={{
              filter: `drop-shadow(0 0 8px var(--${level[1].color}-darker))`,
              color: `var(--${level[1].color})`,
            }}
          >
            {level[0]}
          </h1>
        </figure>
      ))}
    </section>
  );
};
