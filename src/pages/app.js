import React from 'react';
import { Router } from '@reach/router';

import Layout from '../components/layout';

const App = () => <h1>This is the App</h1>;

export default () => (
  <Layout>
    <Router>
      <App path="/app" />
    </Router>
  </Layout>
);
