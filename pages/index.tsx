import Head from "next/head";
import style from "../styles/Slots.module.scss";
import { Save } from "../components/Save";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Unicorn's Software"}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={style.slots}>
        <Save
          progress={69}
          timer={5642}
          skillPoints={21}
          explorationPoints={45}
        />
        <Save
          progress={100}
          timer={128666}
          skillPoints={244}
          explorationPoints={45}
        />
        <Save
          progress={37}
          timer={3052}
          skillPoints={61}
          explorationPoints={45}
        />
      </main>
    </>
  );
}
