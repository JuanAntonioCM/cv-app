import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Admin from './components/Admin/Admin';
// import SkillDetails from './components/Admin/Skills/SkillDetails';
import SignIn from './components/Auth/SignIn';
import CreateSkill from './components/Admin/Skills/CreateSkill';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signin" exact component={SignIn} />
          <PrivateRoute path="/admin" exact>
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/admin/create-skill" exact>
            <CreateSkill />
          </PrivateRoute>
          {/* <Route path="/skill/:id" component={SkillDetails} exact /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
