import { Chapter } from "@components/Chapter";
import style from "@styles/Levels.module.scss";

import ChapterA from "../lib/levels/chapter-a";
import ChapterB from "../lib/levels/chapter-b";
import ChapterC from "../lib/levels/chapter-c";
import ChapterD from "../lib/levels/chapter-d";
import ChapterE from "../lib/levels/chapter-e";

const skillPoints = 244;
const explorationPoints = 45;

export default function Home() {
  return (
    <>
      <header className={style.points}>
        <div>
          <h1>{skillPoints}/244</h1>
          <img
            src="/image/difficulty_point.png"
            alt="difficulty_point"
            title="Skill points"
          />
        </div>
        <div>
          <h1>{explorationPoints}/45</h1>
          <img
            src="/image/exploration_point.png"
            alt="exploration_point"
            title="Exploration points"
          />
        </div>
      </header>

      <main className={style.levels}>
        <Chapter id="A" levels={ChapterA} />
        <Chapter id="B" levels={ChapterB} />
        <Chapter id="C" levels={ChapterC} />
        <Chapter id="D" levels={ChapterD} />
        <Chapter id="E" levels={ChapterE} />
      </main>
    </>
  );
}
