import React from "react";
import Link from "next/link";

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
    <main id="home">
      <Link href="/save-editor" passHref>
        <a className="option">
          <h1>Save Editor</h1>
          <img src="/image/level_icons/blank.svg" alt="Save Editor" />
        </a>
      </Link>
      <Link href="/theme-creator" passHref>
        <a className="option">
          <h1>Theme Creator</h1>
          <img src="/image/level_icons/blank.svg" alt="Theme Creator" />
        </a>
      </Link>
      <Link href="/" passHref>
        <a className="option">
          <h1>More to come...</h1>
          <img src="/image/level_icons/blank.svg" alt="More to come..." />
        </a>
      </Link>
      {/* <div id="cool-container"></div> */}
    </main>
  );
}
