import React from 'react';
import { AppContainer } from './common/containers';
import ErrorBoundery from './common/ErrorBoundery';
import Profiles from './components/Profiles';
import Searcher from './components/Searcher';

function App() {
  return (
    <ErrorBoundery>
      <AppContainer>
        <Searcher />
        <Profiles />
      </AppContainer>
    </ErrorBoundery>
  );
}

export default App;
