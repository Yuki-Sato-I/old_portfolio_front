import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactAnime from 'react-animejs'

// my component
import './Work.css'
const {Anime} = ReactAnime

export const Work = (props) => {
  const work = props.work;
  const num = props.number;
  console.log(`${num}-${props.control}`)
  // const workLeave = ()=>{
  //   if(window.fullpage_api && window.fullpage_api.getActiveSection().index === num+2){
  //     console.log(work.title)
  //     return [
  //         {
  //           targets: ".work-title, .work-number",
  //           opacity: [1, 0],
  //           translateX: [0, -700],
  //           easing: "easeOutSine",
  //           duration: 1000,
  //           delay: 1000
  //         }
  //       ]
  //   }
  // }
  return (
      <div className="section">
        <div className="work-section">
          <Anime
            control={props.control}
            animeConfig={{
              autoplay: false,
            }}
            initial={[
              {
                targets: ".work-title, .work-number",
                opacity: [0, 1],
                translateX: [-700, 0],
                easing: "easeOutSine",
                duration: 800,
                delay: 0,
              },
              {
                targets: ".work-content span img",
                opacity: [0, 1],
                translateX: [700, 0],
                easing: "easeOutSine",
                duration: 800,
                // delay: -1000,
              },
              {
                targets: ".work-p",
                opacity: [0, 1],
                duration: 1000,
                delay: 0
              }
            ]}
            // _onMouseOut={
            //   workLeave()
            // }
          >
            <div className="work-header">
              <span className="work-number">0{num+1}</span>
              <h1 className="work-title">{work.title}</h1>
            </div>
            <div className="work-content">
              <span><img src={work.image_url} /></span>
              <p className="work-p work-p-content">{work.content}</p>
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
          </Anime>
        </div>
      </div>
  )
}

export default Work;