import React from "react";

export default function SplitPane(props) {
  return (
    <div className="container-fluid">
      <span className="col-sm-3 col-md-6 col-lg-4">{props.left}</span>
      <span className="col-sm-9 col-md-6 col-lg-8">{props.right}</span>
    </div>
  );
}
