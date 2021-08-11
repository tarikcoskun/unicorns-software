import type { FC } from "react";
import Link from "next/link";
import style from "../styles/Save.module.scss";

export const Slot: FC = () => {
  return (
    <>
      <label
        htmlFor="upload-save"
        className={style.slot}
        onMouseEnter={() => new Audio("/sound/slot_enter.mp3").play()}
        onMouseLeave={() => new Audio("/sound/slot_leave.mp3").play()}
      >
        <div className={style.container}>
          <img className="new_game" src="/image/new_game.png" alt="new_game" />
        </div>
        <input id="upload-save" type="file"></input>
        <h3>Upload Save</h3>
      </label>
      <style jsx>{`
        input[type="file"] {
          display: none;
        }
        .Save_container__24XRg {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
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
      `}</style>
    </>
  );
};
