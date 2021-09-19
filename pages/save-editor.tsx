import Link from "next/link";
import { Slot } from "@types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import slotsStyle from "@styles/Slots.module.scss";
import levelsStyle from "@styles/Levels.module.scss";

import { Save } from "@components/Save";
import { Chapter } from "@components/Chapter";
import ChapterA from "@lib/levels/chapter-a";
import ChapterB from "@lib/levels/chapter-b";
import ChapterC from "@lib/levels/chapter-c";
import ChapterD from "@lib/levels/chapter-d";
import ChapterE from "@lib/levels/chapter-e";

export default function Levels() {
  const router = useRouter();
  const [slots, setSlots] = useState<Array<Partial<Slot>>>([{}, {}, {}]);
  const [activeSlot, setActiveSlot] = useState<Partial<Slot> | null>(null);

  useEffect(() => {
    setSlots(JSON.parse(localStorage.slots));

    if (router.query.slot)
      setActiveSlot(
        JSON.parse(localStorage.slots)[Number(router.query.slot) - 1]
      );
  }, [router.query.slot]);

  if (router.query.slot) {
    return (
      <>
        <Link href="/save-editor" passHref>
          <h1 className={levelsStyle.switchSlot}>Switch Slot</h1>
        </Link>
        <header className={levelsStyle.points}>
          <div>
            <h1>
              <input
                id="skill_points"
                type="number"
                min="0"
                max="244"
                defaultValue={activeSlot?.skillPoints}
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
                defaultValue={activeSlot?.explorationPoints}
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

        <main className={levelsStyle.levels}>
          <Chapter id="A" levels={ChapterA} />
          <Chapter id="B" levels={ChapterB} />
          <Chapter id="C" levels={ChapterC} />
          <Chapter id="D" levels={ChapterD} />
          <Chapter id="E" levels={ChapterE} />
        </main>
      </>
    );
  } else {
    return (
      <main className={slotsStyle.slots}>
        {slots.map((slot, index) => (
          <Save
            key={index}
            index={index}
            gameTimer={slot.gameTimer}
            skillPoints={slot.skillPoints}
            explorationPoints={slot.explorationPoints}
            progressPercentage={slot.progressPercentage}
            type={Object.keys(slots[index]).length === 0 ? "slot" : "save"}
          />
        ))}
      </main>
    );
  }
}
