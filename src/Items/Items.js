import React from "react";
import ScrollPort from "../ScrollPort";

export default function(props) {
  const items = [...Array(100)].map((val, idx) => (
    <div key={idx} className="item">
      {idx}
    </div>
  ));

  return <ScrollPort className="items">{items}</ScrollPort>;
}
