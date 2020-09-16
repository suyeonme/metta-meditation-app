import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './components/layout/layout';
import Themes from './pages/themes';
import Register from './pages/register';

import OceanWave from './pages/oceanWave';
import Mountain from './pages/mountain';
import Rain from './pages/rain';
import Congraturation from './pages/congraturation';

// Animation & page transition
// Stop sound when go back to theme page

// Media query, optimization, propType
// Clutter folders
// theme: container
// component name: capital

function App() {
  // Redirect - Guard
  // Repeated localStorage
  // Height & width

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Register} />
          <Route path="/themes" component={Themes} />
          <Route path="/ocean" component={OceanWave} />
          <Route path="/mountain" component={Mountain} />
          <Route path="/rain" component={Rain} />
          <Route path="/Congraturation" component={Congraturation} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
