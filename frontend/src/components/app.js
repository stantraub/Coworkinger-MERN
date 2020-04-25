import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from "./nav/navbar_container";

import Modal from './modals/session_modal';
import MainPage from './main/main_page';
import SpaceIndexContainer from './spaces/space_index_container';
import SpaceShowContainer from './spaces/space_show_container'
import ListSpaceContainer from './spaces/list_space_container'
import ReviewFormContainer from './reviews/review_form_container'
import UserShowContainer from './user/user_show_container'
import EditPhotoContainer from './user/edit-photo_container'
import UserReviewsContainer from './user/user_reviews_container'

const App = () => (
  <div>
    <NavBarContainer/>
    <Modal />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/spaces" component={SpaceIndexContainer} />
      <Route exact path="/spaces/:id" component={SpaceShowContainer}/>
      <ProtectedRoute exact path="/spaces/write-review/:id" component={ReviewFormContainer} />
      <ProtectedRoute exact path="/create_space" component={ListSpaceContainer} />
      <ProtectedRoute exact path="/profile/:id" component={UserShowContainer} />
      <ProtectedRoute exact path="/profile/edit-photo/:id" component={EditPhotoContainer} />
      <ProtectedRoute exact path="/users/review" component={UserReviewsContainer} />
    </Switch>
  </div>
);

export default App;