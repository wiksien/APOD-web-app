import React from 'react';
import { useShowcase, useShowcaseUpdateContext } from './showcaseProvider';

export default function ApiRevealButton() {

  const showcase = useShowcase();
  const changeDataAPI = useShowcaseUpdateContext();

  if (!showcase.visible) {
    return (
      <section className="button__wrapper" style={{
        "display": "flex",
        "flexDirection": "column",
        "gap": "1em",
        "fontSize": "1.2em"
      }}>
        <span className="photoButton__description">
          Click the button to reveal todays Astronomy Picture of The Day!
        </span>
        <button
          className="photoButton__revealButton"
          type="button"
          onClick={changeDataAPI}
          style = {{
            "maxWidth": "5em"
          }}
        >
          Reveal APOD
        </button>
      </section>
    );
  } else {
    return null;
  }
}
