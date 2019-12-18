import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import ReactFullpage from '@fullpage/react-fullpage';

// my component
import './App.css';
import { Top } from './components/pages/top/top'
import { NavBar } from './components/common/navbar'

export const App = () =>  {

  const [userData, setUserData] = useState([]);
  const [skillsData, setSkillsData] = useState();
  const [topWorksData, setTopWorksData] = useState([]);

  const [anchors, setAnchors] = useState(['top', 'works', 'allWorks', 'profile', 'contact']);

  const fetchData = useCallback( async() => {

    let user = await axios.get('/api/v1/users/1')
      .then(response => response.data)
      .catch(error => console.log(error));

    let skills = await axios.get('/api/v1/skills')
      .then(response => response.data)
      .catch(error => console.log(error));

    let topWorks = await axios.get('/api/v1/works/top')
      .then(response => response.data)
      .catch(error => console.log(error));

      setTopWorksData(topWorks);
      setSkillsData(skills);
      setUserData(user);

    topWorks.map((work, index) => {
      setAnchors(anchors.splice(2+index, 0, `work${index+1}`));
    })
    console.log(anchors);
  },[]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <div className="container">
      <NavBar works={topWorksData}/>
      <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        resize={true}
        scrollingSpeed = {1000} /* Options here */
        anchors= { anchors }
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Top user={userData}
                   skills={skillsData}/>
              <div className="section">
                <p>Section 2</p>
              </div>
              <div className="section">
                <p>Section 3</p>
              </div>
              <div className="section">
                <p>Section 4</p>
                {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button> */}
              </div>

            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
