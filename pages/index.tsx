import React from "react";
import Head from "next/head";
import style from "../styles/Slots.module.scss";
import { Save } from "../components/Save";
import { Slot } from "../components/Slot";

const slots: Array<Object> = [
  {
    progress: 100,
    timer: 200,
    skillPoints: 244,
    explorationPoints: 45,
  },
];

const emptySlots: any = [];
for (var i = 0; i < 3 - slots.length; i++) {
  emptySlots.push(<Slot key={i} />);
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Unicorn's Software"}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={style.slots}>
        {slots.map((slot, index) => (
          <Save
            key={index}
            progress={slot.progress}
            timer={slot.timer}
            skillPoints={slot.skillPoints}
            explorationPoints={slot.explorationPoints}
          />
        ))}
        {emptySlots}
      </main>
    </>
  );
}
