import React from "react";

import './Top.css';

export const Top = (props) =>  {
  return (
    <div className="section">
      <div className="top-container">
        <h1 className="top-title">Enginnering is</h1>
        <h2 className="top-user-name">{props.user.en_name}</h2>
        <p className="top-user-skills">
          {props.skills? props.skills.map((skill, index) => {
            return(
              <span key={index}>{(index == 0)?`${skill.name}`:` / ${skill.name}`}</span>
              );
          }): ""}
        </p>
      </div>
    </div>
  );
}

export default Top;