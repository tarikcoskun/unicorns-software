import { Save } from "../components/Save";
import style from "../styles/Slots.module.scss";

interface Slot {
  gameTimer: number;
  skillPoints: number;
  explorationPoints: number;
  progressPercentage: number;
}
let slots: Array<Partial<Slot>> = [{}, {}, {}];

if (typeof window !== "undefined") {
  try {
    slots = JSON.parse(localStorage.slots);
    console.log("Fetched the slots successfully");
  } catch (err) {
    localStorage.slots = JSON.stringify([{}, {}, {}]);
    slots = JSON.parse(localStorage.slots);
    console.log("Slots value was set to the initial value");
  }
}

export default function Home() {
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
