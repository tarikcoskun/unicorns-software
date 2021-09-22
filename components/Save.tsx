import Link from "next/link";
import { Slot } from "@types";
import { ChangeEvent } from "react";
import { useRouter } from "next/router";

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
      className="slot"
      htmlFor={"upload-save" + index}
      onMouseEnter={() => new Audio("/sound/slot_enter.mp3").play()}
      onMouseLeave={() => new Audio("/sound/slot_leave.mp3").play()}
    >
      {type === "save" ? (
        <Link href={`/save-editor?slot=${index + 1}`} passHref>
          <div className="container">
            <h1 className="progress-percentage">{progressPercentage}%</h1>
            <div className="shelly-progress">
              <img
                src="/image/shelly_outline.svg"
                alt="shelly_progress"
                draggable="false"
                onDragStart={() => false}
              />
              <img
                className="shelly_filler"
                style={{ height: progressPercentage + "%" }}
                src="/image/shelly_filler.svg"
                alt="shelly_progress"
                draggable="false"
                onDragStart={() => false}
              />
            </div>
            <h2 className="timer">{readableTime(gameTimer)}</h2>

            <footer className="points">
              <div>
                <img
                  src="/image/difficultyPoint.png"
                  alt="Skill point"
                  draggable="false"
                  onDragStart={() => false}
                />
                <p>{skillPoints}/244</p>
              </div>
              <div>
                <img
                  src="/image/explorationPoint.png"
                  alt="Exploration point"
                  draggable="false"
                  onDragStart={() => false}
                />
                <p>{explorationPoints}/45</p>
              </div>
            </footer>
          </div>
        </Link>
      ) : (
        <div className="container centered">
          <input
            id={"upload-save" + index}
            style={{ display: "none" }}
            type="file"
            accept=".sav"
            onChange={uploadSave}
          ></input>
          <img
            className="new-game"
            src="/image/new_game.svg"
            alt="new_game"
            draggable="false"
            onDragStart={() => false}
          />
        </div>
      )}
      <footer className="bottom">
        {type === "save" ? (
          <img
            className="delete-save"
            src="/image/deleteSave.png"
            alt="Delete save"
            draggable="false"
            onClick={deleteSave}
            onDragStart={() => false}
          />
        ) : (
          <h3 className="upload-save">Upload Save</h3>
        )}
      </footer>
    </label>
  );
};
