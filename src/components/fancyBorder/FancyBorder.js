import React from "react";

export default function FancyBorder(props) {
  console.log("props: " + props + ",  props.children" + props.children);

  return (
    <div className={"border border-danger " + props.color}>
      <span>{props.children}</span>
    </div>
  );
}
