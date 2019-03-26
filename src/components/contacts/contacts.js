import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';
import ContactsList from './contacts-list';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Contacts',
    url: '/app/contacts',
    active: true,
  },
];

class ContactsPage extends PureComponent {
  render() {
    return (
      <AppLayout breadcrumbs={breadcrumbs} title="Contacts">
        <ContactsList />
      </AppLayout>
    );
  }
}

export default ContactsPage;
