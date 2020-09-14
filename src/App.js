import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './components/layout/layout';
import Themes from './pages/themes';
import Landing from './pages/landing';

import Theme from './components/theme/theme';

// Height & width
// !localSrorage && landingPage
// Animation & page transition
// Set timer modal

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Landing /> */}
        <Switch>
          <Route path="/" exact={true} component={Themes} />
          <Route path="/ocean" component={Theme} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
