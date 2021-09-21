import { Slot } from "@types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "@styles/Chapter.module.scss";

type ActiveSlot = {
  level: number;
} & Slot;

function playSound(type: string) {
  let audio = "default";
  if (type == "blue") audio = "blue";
  new Audio(`/sound/hover_level_${audio}.mp3`).play();
}

export const Chapter: React.FC<{
  id: string;
  levels: object;
}> = ({ id, levels }) => {
  const router = useRouter();
  const [activeSlot, setActiveSlot] = useState<Partial<ActiveSlot>>({
    level: 143,
  });

  useEffect(() => {
    setActiveSlot(
      JSON.parse(localStorage.slots)[Number(router.query.slot) - 1]
    );
  }, [router.query.slot]);

  function selectLevel(id: number) {
    if (typeof window !== "undefined") {
      console.log("Level change triggered");
      console.log("Old level: " + activeSlot.level);
      let slots = JSON.parse(localStorage.slots);
      activeSlot.level = id;
      setActiveSlot(activeSlot);
      slots[Number(location.search.substr(-1)) - 1].level = id;
      localStorage.slots = JSON.stringify(slots);
      console.log("New leel: " + activeSlot.level);
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
                className={`${style.explorationPoint} ${level[1].color}`}
                style={{ filter: `var(--${level[1].color}-filter)` }}
                src="/image/exploration_point.png"
                alt="exploration_point"
                draggable="false"
                onDragStart={() => false}
              />
            )}
          </header>
          {activeSlot.level == level[1].id && (
            <img
              className={style.selectedLevel}
              src="/image/shelly.svg"
              alt="selected_level"
              draggable="false"
              onDragStart={() => false}
            />
          )}
          <img
            className={style.levelIcon}
            style={{ filter: `var(--${level[1].color}-filter)` }}
            src={`/image/level_icons/${level[1].icon}.svg`}
            alt={level[1].icon}
            draggable="false"
            onDragStart={() => false}
          />
          <img
            className={`${style.levelIcon} ${style.levelIcon_Ghost}`}
            style={{ filter: `var(--${level[1].color}-ghost-filter)` }}
            src={`/image/level_icons/${level[1].icon}.svg`}
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
