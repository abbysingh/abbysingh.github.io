import React from "react";
import * as styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.intro}>
      <div className={styles.introPhoto}></div>
      <div className={styles.introText}>
        Hi!<span className={styles.emoji}>👋</span>
        <br />
        I'm Abheyraj, <br />a product designer who knows how to code.
      </div>
      <p>
        Currently I'm head of product at <br></br>
        <a
          href="https://bosqueplants.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bosque{" "}
        </a>
        🪴
      </p>
      <p>Scroll right to see some of my work 👉</p>
    </div>
  );
}
