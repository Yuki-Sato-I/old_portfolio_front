import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// my component
import './App.css';
import { WorkDetail } from './components/pages/work/WorkDetail';

import { Content, ContentFallback } from './Content'

export const App = () =>  {
  return (
    <Router>
      <Route exact path='/' render={ () =>{
        return (
          <Suspense fallback={<ContentFallback />}>
            <Content />
          </Suspense>
        );
        }}
      />
      <Route path='/works/:id' component={WorkDetail}/>
    </Router>
  );
}

export default App;
