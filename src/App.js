import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './config/Colors';
import store from './store/index';
import Skills from './containers/Skills';
import Resume from './containers/Resume';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import SkillDetails from './components/Dashboard/SkillDetails';
import SingIn from './containers/SingIn';
import CreateSkill from './components/Dashboard/CreateSkill';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/skill/:id" component={SkillDetails} exact />
            <Route path="/singin" component={SingIn} exact />
            <Route path="/create-skill" component={CreateSkill} exact />
          </Switch>
          {/* <section className="Container">
            <Resume />
          </section> */}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
