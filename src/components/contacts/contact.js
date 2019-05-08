import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import AppLayout from '../shared/app-layout';
import Notes from '../shared/notes';
import Tags from '../shared/tags';
import Relationships from '../shared/relationships';
import ContactInfo from './contact-info';

import { contact } from '../../../seed';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Contacts',
    url: '/app/contacts',
  },
  {
    active: true,
    name: 'Larry Bird',
    url: '/app/contact/789',
  },
];

class SingleContactPage extends PureComponent {
  static propType = {
    contact: shape({
      email: string,
      id: string.isRequired,
      location: string,
      name: string.isRequired,
      notes: string,
      phone: string,
      relationships: arrayOf(
        shape({
          funder: shape({
            id: string.isRequired,
            name: string.isRequired,
          }),
          id: string.isRequired,
          title: string.isRequired,
        })
      ).isRequired,
      tags: arrayOf(string),
    }),
  };

  static defaultProps = {
    contact,
  };

  render() {
    const { contact } = this.props;

    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        subtitle={
          <a
            href={`https://maps.google.com/?q=${contact.location}`}
            target="_blank"
          >
            {contact.location}
          </a>
        }
        title={contact.name}
      >
        <ContactInfo email={contact.email} phone={contact.phone} />
        <Notes notes={contact.notes} />
        <Tags tags={contact.tags} />
        <Relationships relationships={contact.relationships} />
      </AppLayout>
    );
  }
}

export default SingleContactPage;
