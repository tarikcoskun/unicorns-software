import type { FC } from "react";
import Link from "next/link";
import style from "../styles/Save.module.scss";
import { readableTime } from "../lib/readableTime";

export interface SaveProps {
  progress?: number;
  timer?: number;
  skillPoints?: number;
  explorationPoints?: number;
}

export const Save: FC<SaveProps> = ({
  progress = 0,
  timer = 0,
  skillPoints = 0,
  explorationPoints = 0,
}) => {
  return (
    <Link href="/levels" passHref>
      <div
        className={style.slot}
        onMouseEnter={() => new Audio("/sound/slot_enter.mp3").play()}
        onMouseLeave={() => new Audio("/sound/slot_leave.mp3").play()}
      >
        <div className={style.container}>
          <h1>{progress}%</h1>
          <div className={style.shelly_progress}>
            <img src="/image/shelly_outline.png" alt="shelly_progress" />
            <img
              className="shelly_filler"
              src="/image/shelly_filler.png"
              alt="shelly_progress"
            />
          </div>
          <h2>{readableTime(timer)}</h2>
          <footer>
            <div>
              <img
                src="/image/difficulty_point.png"
                alt="difficulty_point"
                title="Skill points"
              />
              <p>{skillPoints}/244</p>
            </div>
            <div>
              <img
                src="/image/exploration_point.png"
                alt="exploration_point"
                title="Exploration points"
              />
              <p>{explorationPoints}/45</p>
            </div>
          </footer>
        </div>
        <style jsx>
          {`
            .shelly_filler {
              height: ${progress}%;
            }
          `}
        </style>
        <h3>Select Save</h3>
      </div>
    </Link>
  );
};
