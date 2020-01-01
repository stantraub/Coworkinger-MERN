import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from "./nav/navbar_container";

import Modal from './modals/session_modal';
import MainPage from './main/main_page';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <NavBarContainer/>
    <Modal />
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;