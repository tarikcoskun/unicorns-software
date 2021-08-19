import { FC, ChangeEvent, useState } from "react";
import Link from "next/link";
import style from "@styles/Save.module.scss";
import { readableTime } from "@lib/readableTime";
import { readSaveContent } from "@lib/readSaveContent";

interface SaveProps {
  index: number;
  type?: string;
  gameTimer?: number;
  skillPoints?: number;
  explorationPoints?: number;
  progressPercentage?: number;
}

export const Save: FC<SaveProps> = ({
  index,
  type = "slot",
  gameTimer = 0,
  skillPoints = 0,
  explorationPoints = 0,
  progressPercentage = 0,
}) => {
  const [slots, setSlots] = useState([{}, {}, {}]);

  function uploadSave(event: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    const files = event.target.files;

    reader.onload = HandleFileLoad;
    if (files) reader.readAsText(files[0]);
  }

  function HandleFileLoad(event: any) {
    if (typeof window !== "undefined") {
      let slotsArr = JSON.parse(localStorage.slots);
      slotsArr[index] = readSaveContent(event.target.result);
      setSlots(slotsArr);
      localStorage.slots = JSON.stringify(slotsArr);
      console.log(localStorage.slots);
    }
  }

  const element = (
    <label
      htmlFor={"upload-save" + index}
      className={style.slot}
      onMouseEnter={() => new Audio("/sound/slot_enter.mp3").play()}
      onMouseLeave={() => new Audio("/sound/slot_leave.mp3").play()}
    >
      <input
        id={"upload-save" + index}
        style={{ display: "none" }}
        type="file"
        accept=".sav"
        onChange={uploadSave}
      ></input>
      {type == "save" ? (
        <div className={style.container}>
          <h1>{progressPercentage}%</h1>
          <div className={style.shelly_progress}>
            <img
              src="/image/shelly_outline.png"
              alt="shelly_progress"
              draggable="false"
            />
            <img
              className="shelly_filler"
              style={{ height: progressPercentage + "%" }}
              src="/image/shelly_filler.png"
              alt="shelly_progress"
              draggable="false"
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
              />
              <p>{skillPoints}/244</p>
            </div>
            <div>
              <img
                src="/image/exploration_point.png"
                alt="exploration_point"
                title="Exploration points"
                draggable="false"
              />
              <p>{explorationPoints}/45</p>
            </div>
          </footer>
        </div>
      ) : (
        <div className={`${style.container} ${style.centered}`}>
          <img
            className="new_game"
            src="/image/new_game.png"
            alt="new_game"
            draggable="false"
          />
        </div>
      )}
      <div className={style.bottom_container}>
        {type == "save" ? (
          <img
            className={style.delete_save}
            src="/image/delete_save.png"
            alt="Delete save"
            draggable="false"
          />
        ) : (
          <h3>Upload Save</h3>
        )}
      </div>
      <style jsx>
        {`
          .new_game {
            transition: 0.4s cubic-bezier(0.125, 0.25, 0.1, 1.035);
            animation: growShrink 3s ease-out infinite;
          }
          @keyframes growShrink {
            0% {
              width: 9rem;
            }
            50% {
              width: 11rem;
            }
            100% {
              width: 9rem;
            }
          }
        `}
      </style>
    </label>
  );
  if (type == "save")
    return (
      <Link href={`/slots?slot=${index + 1}`} passHref>
        {element}
      </Link>
    );
  else return element;
};
