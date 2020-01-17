import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Resume from './containers/Resume';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import SkillDetails from './components/Dashboard/SkillDetails';
import SignIn from './containers/SignIn';
import CreateSkill from './components/Dashboard/CreateSkill';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Resume} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/skill/:id" component={SkillDetails} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/create-skill" component={CreateSkill} exact />
        </Switch>
        {/* <section className="Container">
            <Resume />
          </section> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
