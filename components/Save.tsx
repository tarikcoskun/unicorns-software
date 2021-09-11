import style from "@style/Save.module.scss";
import { readableTime } from "@lib/readableTime";
import { Slot } from "@types";
import router from "next/router";

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
  return (
    <div
      className={style.slot}
      onClick={() => {
        router.push({
          pathname: "/slots",
          query: { slot: index + 1 },
        });
      }}
    >
      {type === "save" ? (
        <a>
          <div className={style.container}>
            <h1>{progressPercentage}%</h1>
            <div className={style.shelly_progress}>
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
        </a>
      ) : (
        <div className={`${style.container} ${style.centered}`}>
          <img
            className={style.new_game}
            src="/image/new_game.png"
            alt="new_game"
            draggable="false"
            onDragStart={() => false}
          />
        </div>
      )}
      <div className={style.bottom_container}>
        {type == "save" ? <h3>Load Save</h3> : <h3>Create Save</h3>}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/slots");
  const data = await res.json();

  return {
    props: {
      slotsData: data,
    },
  };
}
