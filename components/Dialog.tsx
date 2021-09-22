import { Dialog } from "@types";
import { useState } from "react";

export const GameDialog: React.FC<{ dialogs: Array<Partial<Dialog>> }> = ({
  dialogs,
}) => {
  const [index, setIndex] = useState(0);
  const [destroyed, setDestroyed] = useState(false);

  return (
    <div
      className="dialog-overlay"
      style={{ display: destroyed === true ? "none" : "flex" }}
    >
      <figure className="dialog">
        {dialogs[index].image && (
          <img
            className="dialog-image"
            src={dialogs[index].image}
            alt="unicorn"
            draggable="false"
            onDragStart={() => false}
          />
        )}
        {dialogs[index].id ? (
          <div className="introduction">
            <p>{dialogs[index].id}</p>
            <h1>{dialogs[index].title}</h1>
          </div>
        ) : (
          <div className="container">
            <h1>{dialogs[index].title}</h1>
            <p>{dialogs[index].text}</p>
          </div>
        )}
      </figure>
      <div className="controls">
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
          style={{ display: index === dialogs.length - 1 ? "none" : "block" }}
        />
        <img
          onClick={() => setDestroyed(true)}
          src="/image/checkmark.png"
          alt="next_dialog"
          style={{ display: index === dialogs.length - 1 ? "block" : "none" }}
        />
      </div>
    </div>
  );
};
