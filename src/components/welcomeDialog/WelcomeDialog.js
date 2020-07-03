import React from "react";
import FancyBorder from "../fancyBorder/fancyBorder";

export default function WelcomeDialog(props) {
  return (
    <FancyBorder color="blue">
      <h3 className="Dialog-title">Welcome</h3>
      <h3 className="Dialog-message">This is a simple React.js playground.</h3>
    </FancyBorder>
  );
}
