import React, {useState} from "react";
import axios from "axios";
import ReactFullpage from '@fullpage/react-fullpage';

// my component
import './App.css';
import { Top } from './components/pages/top/Top'
import { NavBar } from './components/common/navbar'
import { Work } from "./components/pages/work/Work";

let cache;

export const Content = () => {
  const [anchors, setAnchors] = useState(['top', 'works', 'allWorks', 'profile', 'contact']);
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
                  <p>All Works</p>
                </div>
                <div className="section">
                  <p>Profile</p>
                  {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button> */}
                </div>
                <div className="section">
                  <p>Contact</p>
                </div>
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
          setAnchors(anchors.splice(2+index, 0, `work${index+1}`));
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