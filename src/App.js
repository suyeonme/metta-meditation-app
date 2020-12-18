import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';

import Themes from 'pages/Themes';
import Register from 'pages/Register';
import Congraturation from 'pages/Congraturation';
import { OceanWave, MountainView, RainyBeach } from 'pages/Themes';
import Layout from 'components/Layout/Layout';

function App() {
  const location = useLocation();
  const userName = localStorage.getItem('name');
  let route;

  if (!userName) {
    route = <Route exact path="/" component={Register} />;
  } else {
    route = (
      <>
        <Route exact path="/" component={Themes} />
        <Route path="/ocean" component={OceanWave} />
        <Route path="/mountain" component={MountainView} />
        <Route path="/rainy" component={RainyBeach} />
        <Route path="/congraturation" component={Congraturation} />
      </>
    );
  }

  return (
    <div className="App">
      <Layout>
        <Switch location={location}>{route}</Switch>
      </Layout>
    </div>
  );
}

export default App;
