import React, { Suspense } from "react";

// my component
import './App.css';

import { Content } from './Content'

export const App = () =>  {
  return (
    <Suspense fallback={<div>loading......</div>}>
      <Content />
    </Suspense>
  );
}

export default App;
