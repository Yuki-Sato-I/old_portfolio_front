import React from "react";

import './navbar.css';

export const NavBar = (props) => {
  return (
    
    <ul className="left-navigation-bar">
      <a style={{height:`calc(100% / ${4+props.works.length})`}} href="#こんにちは,佐藤裕紀のポートフォリオサイトへようこそ!!"><li>Top</li></a>
      <a style={{height:`calc(100% / ${4+props.works.length})`}} href="#ここを使って自己紹介をするのは画期的でしょ??"><li>Works</li></a>
      { 
        props.works?props.works.map((work, index) =>  {
          return(
            <a style={{height:`calc(100% / ${4+props.works.length})`}} key={index} href={`#作ってきたものを紹介するね${index+1}`}><li className="works-child" key={index}>0{index+1}</li></a>
          );
        }):""
      }
      <a style={{height:`calc(100% / ${4+props.works.length})`}} href="#俺"><li>Profile</li></a>
      <a style={{height:`calc(100% / ${4+props.works.length})`}} href="#お問い合わせは下記フォームから送ってね"><li>Contact</li></a>
    </ul>
  );
}
