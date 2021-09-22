import Link from "next/link";
import { Slot } from "@types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Save } from "@components/Save";
import { Chapter } from "@components/Chapter";
import { ChapterA, ChapterB, ChapterC, ChapterD, ChapterE } from "@lib/levels";

export default function Levels() {
  const router = useRouter();
  const [slots, setSlots] = useState<Array<Partial<Slot>>>([{}, {}, {}]);
  const [activeSlot, setActiveSlot] = useState<Partial<Slot> | null>(null);

  useEffect(() => {
    setSlots(JSON.parse(localStorage.slots));
  }, []);

  useEffect(() => {
    setActiveSlot(
      JSON.parse(localStorage.slots)[Number(router.query.slot) - 1]
    );
  }, [router.query.slot]);

  if (router.query.slot) {
    return (
      <>
        <header id="points">
          <div className="point-container">
            <h1>
              <input
                id="skill-points"
                type="number"
                min="0"
                max="244"
                maxLength={3}
                defaultValue={activeSlot?.skillPoints}
              />
              <label htmlFor="skill-points">/244</label>
            </h1>
            <img
              src="/image/difficultyPoint.png"
              alt="Skill point"
              draggable="false"
              onDragStart={() => false}
            />
          </div>
          <div className="point-container">
            <h1>
              <input
                id="exploration-points"
                style={{ width: "2.625rem" }}
                type="number"
                min="0"
                max="45"
                maxLength={2}
                defaultValue={activeSlot?.explorationPoints}
              />
              <label htmlFor="exploration-points">/45</label>
            </h1>
            <img
              src="/image/explorationPoint.png"
              alt="Exploration point"
              draggable="false"
              onDragStart={() => false}
            />
          </div>
        </header>

        <main id="levels">
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
      <main id="slots">
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
