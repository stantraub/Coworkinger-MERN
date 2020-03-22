import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from "./nav/navbar_container";

import Modal from './modals/session_modal';
import MainPage from './main/main_page';
import SpaceIndexContainer from './spaces/space_index_container';
import SpaceShowContainer from './spaces/space_show_container'


const App = () => (
  <div>
    <NavBarContainer/>
    <Modal />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/spaces" component={SpaceIndexContainer} />
      <Route exact path="/spaces/:id" component={SpaceShowContainer}/>
    </Switch>
  </div>
);

export default App;