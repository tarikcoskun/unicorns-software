import { FC as Component } from "react";
import style from "@style/Dialog.module.scss";

interface DialogProps {
  image: string;
  title: string;
  dialog: string;
}

export const Dialog: Component<DialogProps> = ({ image, title, dialog }) => {
  return (
    <div className={style.overlay}>
      <div className={style.dialog}>
        <img
          src={image}
          alt="unicorn"
          draggable="false"
          onDragStart={() => false}
        />
        <div className={style.container}>
          <h1>{title}</h1>
          <p>{dialog}</p>
        </div>
      </div>
    </div>
  );
};
