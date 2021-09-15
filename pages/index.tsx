import React from "react";
import Link from "next/link";
import optionStyle from "@styles/Save.module.scss";
import containerStyle from "@styles/Home.module.scss";

export default function Home() {
  return (
    <main className={containerStyle.slots}>
      <label className={optionStyle.slot}>
        <Link href="/save-editor" passHref>
          <div className={`${optionStyle.container} ${optionStyle.centered}`}>
            <h1 style={{ fontSize: "36px", lineHeight: "48px" }}>
              Save Editor
            </h1>
          </div>
        </Link>
      </label>

      <label className={optionStyle.slot}>
        <Link href="/theme-creator" passHref>
          <div className={`${optionStyle.container} ${optionStyle.centered}`}>
            <h1 style={{ fontSize: "36px", lineHeight: "48px" }}>
              Theme Creator
            </h1>
          </div>
        </Link>
      </label>
    </main>
  );
}
