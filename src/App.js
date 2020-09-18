import React from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import './App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Layout from './components/Layout/Layout';
import Themes from './pages/Themes';
import Register from './pages/Register';
import OceanWave from './pages/OceanWave';
import Mountain from './pages/Mountain';
import Rain from './pages/Rain';
import Congraturation from './pages/Congraturation';

// Mobile route issue

function App() {
  const location = useLocation();
  const userName = localStorage.getItem('name');

  return (
    <div className="App">
      <Layout>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={1000}
            classNames="fade">
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={() =>
                  userName ? <Themes /> : <Redirect to="/register" />
                }
              />
              <Route path="/register" component={Register} />
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
