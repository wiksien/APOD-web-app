import React from "react";
import { useShowcase } from './showcaseProvider';

export default function ApiDataShowcase() {

  const showcase = useShowcase();

  if (showcase.visible) {
    return (
      <section className="showcase__wrapper" >
        <section className="showcase__titleContainer">
          <h2 className="showcase__title">{showcase.dataAPI.title}</h2>
        </section>
        <section className="showcase__dateContainer" style={{
            "fontSize": "1.1em",
            "fontStyle": "italic"
          }}>
          <span className="showcase__dateTitle">Date of APOD picture: </span>
          <span className="showcase__date" >{showcase.dataAPI.date}</span>
        </section>
        <section className="showcase__imageContainer">
          <img src={showcase.dataAPI.url} alt="Something from space." />
        </section>
        <section className="showcase__explanationContainer">
          <p className="showcase__explanation" style={{
            "fontSize": "1.2em"
          }}>
            {showcase.dataAPI.explanation}
          </p>
        </section>
      </section>
    );
  } else {
    return null;
  }
}
