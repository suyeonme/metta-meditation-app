import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Layout from './components/Layout/Layout';
import Themes from './pages/Themes';
import Register from './pages/Register';
import OceanWave from './pages/OceanWave';
import Mountain from './pages/Mountain';
import Rain from './pages/Rain';
import Congraturation from './pages/Congraturation';

// Media query
// Timer button transition
// Dynamic Text
// React.memo

// Clutter folders
// Duration: maximum 8 min.
// Redirect - Guard

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Layout>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames="fade">
            <Switch location={location}>
              <Route path="/" exact={true} component={Register} />
              <Route path="/themes" component={Themes} />
              <Route path="/ocean" component={OceanWave} />
              <Route path="/mountain" component={Mountain} />
              <Route path="/rain" component={Rain} />
              <Route path="/congraturation" component={Congraturation} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Layout>
    </div>
  );
}

export default App;
