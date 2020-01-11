import React from "react";
import "./Simpsons.css";

function Simpsons(props) {
  return (
      <figure className="SimpsonsCard">
        <img src={props.image} alt={props.character} />
        <figcaption>
          <cite>{props.character}</cite>
          <br /><br />
          <blockquote>{props.working ? 'Is working!' : 'Not Working, in break!'}</blockquote>
        </figcaption>
      </figure>
  );
}

export default Simpsons;
