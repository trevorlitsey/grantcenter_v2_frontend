import React from 'react';
import { Router } from '@reach/router';

import SiteLayout from '../components/shared/site-layout';
import { Contact, Contacts } from '../components/contacts';
import {
  CreateFunder,
  EditFunder,
  Funder,
  Funders,
} from '../components/funders';
import { CreateGrant, EditGrant, Grant, Grants } from '../components/grants';
import {
  CreateProject,
  EditProject,
  Project,
  Projects,
} from '../components/projects';
import {
  CreateReport,
  EditReport,
  Report,
  Reports,
} from '../components/reports';

const App = () => <h1>This is the App</h1>;

export default () => (
  <SiteLayout>
    <Router>
      <App path="/app" />

      <Contact path="/app/contact/:id" />
      <Contacts path="/app/contacts" />

      <CreateFunder path="app/funder/create" />
      <EditFunder path="/app/funder/:id/edit" />
      <Funder path="/app/funder/:id" />
      <Funders path="/app/funders" />

      <CreateGrant path="/app/grant/create" />
      <EditGrant path="/app/grant/:id/edit" />
      <Grant path="/app/grant/:id" />
      <Grants path="/app/grants" />

      <CreateReport path="/app/report/create" />
      <EditReport path="/app/report/:id/edit" />
      <Report path="/app/report/:id" />
      <Reports path="/app/reports" />

      <CreateProject path="/app/project/create" />
      <EditProject path="/app/project/:id/edit" />
      <Project path="/app/project/:id" />
      <Projects path="/app/projects" />
    </Router>
  </SiteLayout>
);
