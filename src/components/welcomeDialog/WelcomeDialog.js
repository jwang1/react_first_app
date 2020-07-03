import React from "react";
import FancyBorder from "../fancyBorder/fancyBorder";

export default function WelcomeDialog(props) {
  const fontStyle = { color: "blue" };

  return (
    <FancyBorder color="blue">
      <h3 className="Dialog-title" style={fontStyle}>
        Welcome
      </h3>
      <h3 className="Dialog-message" style={fontStyle}>
        This is a simple React.js playground.
      </h3>
    </FancyBorder>
  );
}
