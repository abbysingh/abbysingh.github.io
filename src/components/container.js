import React from "react";
import * as containerStyles from "./container.module.css";

export default function Container({ children }) {
  return (
    <div
      id="container"
      className={containerStyles.container}
      onWheel={handleOnWheel}
    >
      {children}
    </div>
  );
}

function handleOnWheel(e) {
  e.preventDefault();
  var containerScrollPosition = window.pageXOffset; //apparently the window is the container
  console.log("container scroll Left " + containerScrollPosition);
  var scrollDestination = containerScrollPosition + e.deltaY;
  window.scrollTo({
    top: 0,
    left: scrollDestination,
    behaviour: "smooth",
  });
}
