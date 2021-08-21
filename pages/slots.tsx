import { useEffect, useState } from "react";
import Link from "next/link";
import { Chapter } from "@components/Chapter";
import style from "@style/Levels.module.scss";

import ChapterA from "@lib/levels/chapter-a";
import ChapterB from "@lib/levels/chapter-b";
import ChapterC from "@lib/levels/chapter-c";
import ChapterD from "@lib/levels/chapter-d";
import ChapterE from "@lib/levels/chapter-e";

export default function Levels() {
  const [activeSlot, setActiveSlot] = useState({
    skillPoints: 0,
    explorationPoints: 0,
  });
  useEffect(() => {
    setActiveSlot(
      JSON.parse(localStorage.slots)[
        Number(window.location.search.substr(-1)) - 1
      ]
    );
  }, []);

  const skillPoints = activeSlot.skillPoints;
  const explorationPoints = activeSlot.explorationPoints;

  return (
    <>
      <Link href="/" passHref>
        <h1 className={style.switch_slot}>Switch Slot</h1>
      </Link>
      <header className={style.points}>
        <div>
          <h1>
            <input
              id="skill_points"
              type="number"
              min="0"
              max="244"
              defaultValue={skillPoints}
            />
            <label htmlFor="skill_points">/244</label>
          </h1>
          <img
            src="/image/difficulty_point.png"
            alt="difficulty_point"
            title="Skill points"
            draggable="false"
            onDragStart={() => false}
          />
        </div>
        <div>
          <h1>
            <input
              id="exploration_points"
              style={{ width: "2.625rem" }}
              type="number"
              min="0"
              max="45"
              defaultValue={explorationPoints}
            />
            <label htmlFor="exploration_points">/45</label>
          </h1>
          <img
            src="/image/exploration_point.png"
            alt="exploration_point"
            title="Exploration points"
            draggable="false"
            onDragStart={() => false}
          />
        </div>
      </header>

      <main className={style.levels}>
        <Chapter id="A" levels={ChapterA} />
        <Chapter id="B" levels={ChapterB} />
        <Chapter id="C" levels={ChapterC} />
        <Chapter id="D" levels={ChapterD} />
        <Chapter id="E" levels={ChapterE} />
      </main>
    </>
  );
}
