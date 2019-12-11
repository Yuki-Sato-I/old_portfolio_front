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
  const fetchData = useCallback( async() => {

    let user = await axios.get('/api/v1/users/1')
      .then(response => response.data)
      .catch(error => console.log(error));

    let skills = await axios.get('/api/v1/skills')
      .then(response => response.data)
      .catch(error => console.log(error));

      setSkillsData(skills);
      setUserData(user);
  },[]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container">
      <NavBar />
      <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} /* Options here */

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
