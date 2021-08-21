import { useEffect, useState } from "react";
import { Save } from "@components/Save";
import style from "@style/Slots.module.scss";

interface Slot {
  gameTimer: number;
  skillPoints: number;
  explorationPoints: number;
  progressPercentage: number;
}

export default function Slots() {
  const [slots, setSlots] = useState<Array<Partial<Slot>>>([{}, {}, {}]);
  useEffect(() => {
    try {
      // if (JSON.stringify(slots) !== localStorage.slots) {
      setSlots(JSON.parse(localStorage.slots));
      console.log("Fetched the slots successfully");
      console.log(localStorage.slots);
      // }
    } catch (error) {
      localStorage.slots = JSON.stringify(slots);
      console.log("Slots value was set to the initial value");
    }
  }, []);

  return (
    <main className={style.slots}>
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
