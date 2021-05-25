import React from "react";
import * as styles from "./bwcard.module.css";

export default function BWCard({ noBorder, children }) {
  var styleClasses = [styles.cardSizing, styles.bwCard];
  var styleClassesWithoutBorder = [
    styles.cardSizing,
    styles.bwCard,
    styles.noBorder,
  ];
  var computedStyle = styleClasses;
  if (noBorder) {
    computedStyle = styleClassesWithoutBorder;
  }
  return <div className={computedStyle.join(" ")}>{children}</div>;
}
