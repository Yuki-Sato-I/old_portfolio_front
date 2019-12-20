import React from "react";
import { Link } from 'react-router-dom';

// my component
import './Work.css'

export const Work = (props) =>  {
  const work = props.work;
  const num = props.number;
  return (
      <div className="section">
        <div className="work-section">
          <div className="work-header">
            <span className="work-number">0{num+1}</span>
            <h1 className="work-title">{work.title}</h1>
          </div>
          <div className="work-content">
            <span><img height="400" width="600" /></span>
            <p>{work.content}</p>
            <a href={work.url}>関連URL</a>
            <Link to={`/works/${work.id}`}>詳細ページ</Link>
          </div>
        </div>
      </div>
  )
}

export default Work;