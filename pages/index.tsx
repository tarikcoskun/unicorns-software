import { GameDialog } from "@components/Dialog";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <GameDialog
        dialogs={[
          {
            id: 1,
            title: "Welcome!",
          },
          {
            image: "/image/unicorn_happy.png",
            title: "Unicorn",
            text: "Hello human! I'm Unicorn and this was my software for testing the game.",
          },
          {
            image: "/image/unicorn_happy.png",
            title: "Unicorn",
            text: "Change whatever you want if it helps to make you feel good, use at your own risk!",
          },
        ]}
      />
      <Link href="/slots">Slots</Link>
      <style jsx>
        {`
          main {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </main>
  );
}
