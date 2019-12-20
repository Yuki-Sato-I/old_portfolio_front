import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <p className="work-p">{work.content}</p>
            <p className="work-p">
              <a href={work.url}>
                <FontAwesomeIcon icon={['fas', 'link']} style={{ color: "white", margin: '0 10px 0 0' }}/>関連URL
              </a>
            </p>
            <p className="work-more-detail work-p">
              <Link to={`/works/${work.id}`}>
                More Detail<FontAwesomeIcon icon={['fas', 'caret-square-right']} style={{ color: "red", margin: '0 0 0 10px' }}/>
              </Link>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Work;