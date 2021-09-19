import React, { useEffect } from "react";
import Link from "next/link";
import style from "@styles/Home.module.scss";

export default function Home() {
  /*useEffect(() => {
    for (var index = 0; index < 24; index++) {
      const random = String(Math.round(Math.random() * (24 - 16) + 16)) + "px";
      const element = document.createElement("div");
      element.className = style.cool;
      element.style.height = random;
      element.style.top = random;
      element.style.left = random;
      document.querySelector("#cool-container")?.append(element);
    }
  });*/

  return (
    <main className={style.container}>
      <img src="/image/logo.png" alt="logo" />

      <Link href="/save-editor" passHref>
        <figure className={style.option}>
          <h1>Save Editor</h1>
          <img src="/image/save_editor.png" alt="Save editor" />
        </figure>
      </Link>
      <Link href="/theme-creator" passHref>
        <figure className={style.option}>
          <h1>Theme Creator</h1>
        </figure>
      </Link>
      {/* <div id="cool-container"></div> */}
    </main>
  );
}
