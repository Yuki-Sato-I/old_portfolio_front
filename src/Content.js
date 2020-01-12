import React, {useState} from "react";
import axios from "axios";
import ReactFullpage from '@fullpage/react-fullpage';
import ReactAnime from 'react-animejs'

// my component
import './App.css';
import { Top } from './components/pages/top/Top'
import { NavBar } from './components/common/navbar'
import { Work } from "./components/pages/work/Work";
import { Profile } from "./components/pages/profile/Profile";
import { Contact } from "./components/pages/contact/Contact";
const {Anime} = ReactAnime
let cache;

export const Content = () => {
  const [anchors, setAnchors] = useState(['こんにちは,佐藤裕紀のポートフォリオサイトへようこそ!!', 'ここを使って自己紹介をするのは画期的でしょ??', '俺', 'お問い合わせは下記フォームから送ってね']);
  const [control, setControl] = useState();
  const changeControl = (order) => {
    setControl(order)
  };
  // var delay = 1500; //milliseconds
  // var timeoutId;
  // var animationIsFinished = false;
  // const onLeave = (origin, destination, direction) => {
  //     clearTimeout(timeoutId);
  //     console.log(animationIsFinished);
  //     changeControl("reverse");
  //     timeoutId = setTimeout(() => {
  //         animationIsFinished = true;
  //         console.log("Leaving section " + origin.index);
  //         window.fullpage_api.moveTo(destination.index+1);
  //         console.log("移動しました" + origin.index + (destination.index));
  //       }, delay);

  //     return animationIsFinished;
  // }
  const onLeave = (origin, destination, direction) => {
    changeControl("reset");
    changeControl("play");
    console.log("onLeave");
  }

  const afterRender = () => {
    console.log('afterRender');
  }

  const afterResize = () => {
    console.log('afterResize');
  }
  
  const afterReBuild = () => {
    console.log('afterReBuild');
  }

  const afterResponsive = () => {
    console.log('afterResponsive');
  }

  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);
  }

  function sleepByPromise(sec) {
    return new Promise(resolve => setTimeout(resolve, sec));
  }

  if(cache){
    return(
      <div className="container">
        <NavBar works={cache.topWorks}/>
        <ReactFullpage
          //fullpage options
          licenseKey={'YOUR_KEY_HERE'}
          scrollingSpeed={800} /* Options here */
          anchors={cache.anchors}
          onLeave={onLeave.bind(this)}
          afterLoad={afterLoad.bind(this)}
          afterRender={afterRender.bind(this)}
          afterResize={afterResize.bind(this)}
          afterReBuild={afterReBuild.bind(this)}
          afterResponsive={afterResponsive.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Top user={cache.user}
                    skills={cache.skills}/>
                <div className="section">
                  <p>Works</p>
                </div>
                {
                  cache.topWorks.map((work, index) => {
                    return (
                      <Work key={index} work={work} number={index} control={control}/>
                    );
                  })
                }
                <Profile user={cache.user} skills={cache.skills}/>
                <Contact />
              </ReactFullpage.Wrapper>
              
            );
          }}
        />
      </div>
    );
  }

  throw (async() => {
    const startTime = performance.now();
    let user = await axios.get('/api/v1/users/1')
      .then(response => response.data)
      .catch(error => console.log(error));

    let skills = await axios.get('/api/v1/skills')
      .then(response => response.data)
      .catch(error => console.log(error));

    let topWorks = await axios.get('/api/v1/works/top')
      .then(response => {
        response.data.map((work, index) => {
          setAnchors(anchors.splice(2+index, 0, `作ってきたものを紹介するね${index+1}`));
        })
        return response.data
      })
      .catch(error => console.log(error));
    cache = {
      user: user,
      skills: skills,
      topWorks: topWorks,
      anchors: anchors
    };
    const endTime = performance.now();
    if(endTime - startTime < 2800.0){
      await sleepByPromise(2800 - endTime + startTime);
    }
  })();
}
export const ContentFallback = () => {
  return (
    <Anime
      initial={[
        {
          targets: '.ml5 .line',
          opacity: [0.5, 1],
          scaleX: [0, 1],
          easing: "easeInOutExpo",
          duration: 300
        },
        {
          targets: '.ml5 .line',
          duration: 300,
          easing: "easeOutExpo",
          translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
        },
        {
          targets: '.ml5 .ampersand',
          opacity: [0, 1],
          scaleY: [0.5, 1],
          easing: "easeOutExpo",
          duration: 300,
          offset: '-=600'
        },
        {
          targets: '.ml5 .letters-left',
          opacity: [0, 1],
          translateX: ["0.5em", 0],
          easing: "easeOutExpo",
          duration: 400,
          offset: '-=300'
        },
        {
          targets: '.ml5 .letters-right',
          opacity: [0, 1],
          translateX: ["-0.5em", 0],
          easing: "easeOutExpo",
          duration: 400,
          offset: '-=600'
        },
        {
          targets: '.ml5',
          opacity: 0,
          duration: 800,
          easing: "easeOutExpo",
          delay: 500
        },
        {
          loop: true
        }
      ]}
    >
      <h1 className="ml5">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters letters-left">Now</span>
          <span className="letters ampersand">&amp;</span>
          <span className="letters letters-right">Loading</span>
          <span className="line line2"></span>
        </span>
      </h1>
      <style>
        {`
          .ml5 {
            text-align: center;
            line-height: 90vh;
            position: relative;
            font-weight: 300;
            font-size: 4.5em;
            color: white;
          }
          
          .ml5 .text-wrapper {
            position: relative;
            display: inline-block;
            padding-top: 0.1em;
            padding-right: 0.05em;
            padding-bottom: 0.15em;
            line-height: 1em;
          }
          
          .ml5 .line {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            height: 3px;
            width: 100%;
            background-color: white;
            transform-origin: 0.5 0;
          }
          
          .ml5 .ampersand {
            font-family: Baskerville, "EB Garamond", serif;
            font-style: italic;
            font-weight: 400;
            width: 1em;
            margin-right: -0.1em;
            margin-left: -0.1em;
          }
          
          .ml5 .letters {
            display: inline-block;
            opacity: 0;
          }
        `}
      </style>
    </Anime>
  );
}

export default {Content,ContentFallback};