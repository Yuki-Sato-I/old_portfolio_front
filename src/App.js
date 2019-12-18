import React, { Suspense } from "react";

// my component
import './App.css';

import { Content, ContentFallback } from './Content'

export const App = () =>  {
  return (
    <Suspense fallback={<ContentFallback />}>
      <Content />
    </Suspense>
  );
}

export default App;
