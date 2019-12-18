import React from "react";

import './navbar.css';

export const NavBar = (props) => {
  return (
    
    <ul className="left-navigation-bar">
      <li>Top</li>
      <li>Works</li>
      { 
        props.works?props.works.map((work, index) =>  {
          return(
            <li className="works-child" key={index}>Work{index+1}</li>
          );
        }):""
      }
      <li>All Works</li>
      <li>Profile</li>
      <li>Contact</li>
    </ul>
  );
}
