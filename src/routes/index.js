import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import DashboardClient from '../pages/DashboardClient';
import ProfileClient from '../pages/ProfileClient';
import SelectService from '../pages/Schedule/SelectService';
import SelectDate from '../pages/Schedule/SelectDate';
import Confirm from '../pages/Schedule/Confirm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/recoverpassword" component={RecoverPassword} />
      <Route path="/resetpassword" component={ResetPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route
        path="/dashboardclient"
        component={DashboardClient}
        isPrivateClient
      />

      <Route path="/profileclient" component={ProfileClient} isPrivateClient />
      <Route path="/selectservice" component={SelectService} isPrivateClient />
      <Route path="/selectdate" component={SelectDate} isPrivateClient />
      <Route path="/confirm" component={Confirm} isPrivateClient />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
