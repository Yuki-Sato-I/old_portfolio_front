import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// my component
import './History.css'
const zeroPadding = num => `0${num}`.substr(-2);
export const History = (props) => {
  return (
    <li>
      <time className="cbp_tmtime">
        <span>{ new Date(props.history.start_at).getFullYear() }</span>
        <span>{ `${zeroPadding(new Date(props.history.start_at).getMonth()+1)}/${zeroPadding(new Date(props.history.start_at).getDate())}` }</span>
      </time>
      <div className="cbp_tmicon cbp_tmicon-phone"></div>
      <div className="cbp_tmlabel">
        <h2>{ props.history.title }</h2>
        {
          props.history.image_url ?
          <p><img src={props.history.image_url} className="history-image" height='50%' width='100%'></img></p>:
          ""
        }
        <p style={{whiteSpace: 'pre-line'}}>{ props.history.content }</p>
      </div>
    </li>
  )
}

export default History;