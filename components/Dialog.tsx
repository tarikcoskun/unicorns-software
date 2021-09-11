import { useState } from "react";
import style from "@style/Dialog.module.scss";
import { Dialog } from "@types";

export const DialogComponent: React.FC<{ dialog: Array<Dialog> }> = ({
  dialog,
}) => {
  const [index, setIndex] = useState(0);
  const [destroyed, setDestroyed] = useState(false);

  return (
    <div
      className={style.overlay}
      style={{ display: destroyed === true ? "none" : "flex" }}
    >
      <div className={style.dialog}>
        <img
          src={dialog[index].image}
          alt="unicorn"
          draggable="false"
          onDragStart={() => false}
        />
        <div className={style.container}>
          <h1>{dialog[index].title}</h1>
          <p>{dialog[index].text}</p>
        </div>
      </div>
      <div className={style.controls}>
        <img
          onClick={() => setIndex(index - 1)}
          src="/image/dialog_arrow.png"
          alt="previous_dialog"
          style={{ display: index === 0 ? "none" : "block" }}
        />
        <img
          onClick={() => setIndex(index + 1)}
          src="/image/dialog_arrow.png"
          alt="next_dialog"
          style={{ display: index === dialog.length - 1 ? "none" : "block" }}
        />
        <img
          onClick={() => setDestroyed(true)}
          src="/image/checkmark.png"
          alt="next_dialog"
          style={{ display: index === dialog.length - 1 ? "block" : "none" }}
        />
      </div>
    </div>
  );
};
