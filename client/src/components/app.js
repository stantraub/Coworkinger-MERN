import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from "./nav/navbar_container";
import "../sass/main.scss"

import MainPage from '../pages/main.jsx';
import SpaceIndexContainer from '../pages/spaces';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from "./session/login_form_container";
import SpaceShowContainer from '../pages/space-show/space-show-container'
import ListSpaceContainer from './spaces/list_space_container'
import ReviewFormContainer from './reviews/review_form_container'
import ProfilePageContainer from '../pages/profile-container'
import EditPhotoContainer from './user/edit-photo_container'
import UserReviewsContainer from './user/user_reviews_container'

const App = () => (
  <div>
    <NavBarContainer/>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/spaces" component={SpaceIndexContainer} />
      <Route exact path="/spaces/:id" component={SpaceShowContainer}/>
      <Route exact path="/users/signup" component={SignupFormContainer} />
      <Route exact path="/users/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/spaces/write-review/:id" component={ReviewFormContainer} />
      <ProtectedRoute exact path="/create_space" component={ListSpaceContainer} />
      <ProtectedRoute exact path="/profile/:id" component={ProfilePageContainer} />
      <ProtectedRoute exact path="/profile/edit-photo/:id" component={EditPhotoContainer} />
      <ProtectedRoute exact path="/users/review" component={UserReviewsContainer} />
    </Switch>
  </div>
);

export default App;