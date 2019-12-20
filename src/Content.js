import React, {useState} from "react";
import axios from "axios";
import ReactFullpage from '@fullpage/react-fullpage';

// my component
import './App.css';
import { Top } from './components/pages/top/Top'
import { NavBar } from './components/common/navbar'
import { Work } from "./components/pages/work/Work";
import Contact from "./components/pages/contact/Contact";

let cache;

export const Content = () => {
  const [anchors, setAnchors] = useState(['こんにちは,佐藤裕紀のポートフォリオサイトへようこそ!!', 'ここを使って自己紹介をするのは画期的でしょ??', '俺', 'お問い合わせは下記フォームから送ってね']);
  if(cache){
    return(
      <div className="container">
        <NavBar works={cache.topWorks}/>
        <ReactFullpage
          //fullpage options
          licenseKey = {'YOUR_KEY_HERE'}
          resize={true}
          scrollingSpeed = {1000} /* Options here */
          anchors= { cache.anchors }
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
                      <Work key={index} work={work} number={index}/>
                    );
                  })
                }
                <div className="section">
                  <p>Profile</p>
                  {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button> */}
                </div>
                <Contact />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }

  throw (async() => {
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
    console.log(cache);
  })();
}
export const ContentFallback = () => {
  return (
    <div>
      loading...
    </div>
  );
}

export default {Content,ContentFallback};