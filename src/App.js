import React from 'react';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';

// my component
import { Top } from './components/pages/top/top'
import { NavBar } from './components/common/navbar'

export const App = () =>  {
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
              <Top/>
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
