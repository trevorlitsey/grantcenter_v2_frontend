import React from 'react';
import { Router } from '@reach/router';

import SiteLayout from '../components/shared/site-layout';
import { Contact, Contacts } from '../components/contacts';
import { Funder, Funders } from '../components/funders';
import { Grant, Grants } from '../components/grants';
import { Project, Projects } from '../components/projects';

const App = () => <h1>This is the App</h1>;

const Reports = () => <h1>This is Reports</h1>;

export default () => (
  <SiteLayout>
    <Router>
      <App path="/app" />
      <Contact path="/app/contact/:id" />
      <Contacts path="/app/contacts" />
      <Funder path="/app/funder/:id" />
      <Funders path="/app/funders" />
      <Grant path="/app/grant/:id" />
      <Grants path="/app/grants" />
      <Reports path="/app/reports" />
      <Project path="/app/project/:id" />
      <Projects path="/app/projects" />
    </Router>
  </SiteLayout>
);
