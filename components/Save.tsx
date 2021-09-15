import Link from "next/link";
import { Slot } from "@types";
import { ChangeEvent } from "react";
import { useRouter } from "next/router";
import style from "@styles/Save.module.scss";

import { readableTime } from "@lib/readableTime";
import { readSaveContent } from "@lib/readSaveContent";

type Props = {
  index: number;
  type?: string;
} & Slot;

export const Save: React.FC<Props> = ({
  index,
  type = "slot",
  gameTimer = 0,
  skillPoints = 0,
  explorationPoints = 0,
  progressPercentage = 0,
}) => {
  const router = useRouter();
  function uploadSave(event: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    const files = event.target.files;

    reader.onload = handleFileLoad;
    if (files) reader.readAsText(files[0]);
  }

  function handleFileLoad(event: any) {
    if (typeof window !== "undefined") {
      let slotsArr = JSON.parse(localStorage.slots);
      slotsArr[index] = readSaveContent(event.target.result);
      localStorage.slots = JSON.stringify(slotsArr);
    }
    router.reload();
  }

  function deleteSave(event: any) {
    if (typeof window !== "undefined") {
      let slotsArr = JSON.parse(localStorage.slots);
      slotsArr[index] = {};
      localStorage.slots = JSON.stringify(slotsArr);
      console.log(`Deleted save slot ${index + 1} successfully`);
    }
    router.reload();
  }

  return (
    <label
      htmlFor={"upload-save" + index}
      className={style.slot}
      onMouseEnter={() => new Audio("/sound/slot_enter.mp3").play()}
      onMouseLeave={() => new Audio("/sound/slot_leave.mp3").play()}
    >
      {type === "save" ? (
        <Link href={`/save-editor?slot=${index + 1}`} passHref>
          <div className={style.container}>
            <h1>{progressPercentage}%</h1>
            <div className={style.shellyProgress}>
              <img
                src="/image/shelly_outline.png"
                alt="shelly_progress"
                draggable="false"
                onDragStart={() => false}
              />
              <img
                className="shelly_filler"
                style={{ height: progressPercentage + "%" }}
                src="/image/shelly_filler.png"
                alt="shelly_progress"
                draggable="false"
                onDragStart={() => false}
              />
            </div>
            <h2>{readableTime(gameTimer)}</h2>
            <footer>
              <div>
                <img
                  src="/image/difficulty_point.png"
                  alt="difficulty_point"
                  title="Skill points"
                  draggable="false"
                  onDragStart={() => false}
                />
                <p>{skillPoints}/244</p>
              </div>
              <div>
                <img
                  src="/image/exploration_point.png"
                  alt="exploration_point"
                  title="Exploration points"
                  draggable="false"
                  onDragStart={() => false}
                />
                <p>{explorationPoints}/45</p>
              </div>
            </footer>
          </div>
        </Link>
      ) : (
        <div className={`${style.container} ${style.centered}`}>
          <input
            id={"upload-save" + index}
            style={{ display: "none" }}
            type="file"
            accept=".sav"
            onChange={uploadSave}
          ></input>
          <img
            className={style.newGame}
            src="/image/new_game.png"
            alt="new_game"
            draggable="false"
            onDragStart={() => false}
          />
        </div>
      )}
      <div className={style.bottomContainer}>
        {type == "save" ? (
          <img
            className={style.deleteSave}
            src="/image/delete_save.png"
            alt="Delete save"
            draggable="false"
            onClick={deleteSave}
            onDragStart={() => false}
          />
        ) : (
          <h3>Upload Save</h3>
        )}
      </div>
    </label>
  );
};
