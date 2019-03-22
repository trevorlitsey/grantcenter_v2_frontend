import React from 'react';
import { Router } from '@reach/router';

import SiteLayout from '../components/shared/site-layout';
import { Grant, Grants } from '../components/grants';
import { Funder, Funders } from '../components/funders';

const App = () => <h1>This is the App</h1>;

const Reports = () => <h1>This is Reports</h1>;

const Contacts = () => <h1>This is Contacts</h1>;

const Projects = () => <h1>This is Projects</h1>;

export default () => (
  <SiteLayout>
    <Router>
      <App path="/app" />
      <Grant path="/app/grant/:id" />
      <Grants path="/app/grants" />
      <Reports path="/app/reports" />
      <Funder path="/app/funder/:id" />
      <Funders path="/app/funders" />
      <Contacts path="/app/contacts" />
      <Projects path="/app/projects" />
    </Router>
  </SiteLayout>
);
