import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import AppLayout from '../shared/app-layout';
import Notes from '../shared/notes';
import Tags from '../shared/tags';
import Relationships from '../shared/relationships';
import ContactInfo from './contact-info';

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
    name: 'Larry Bird',
    url: '/app/contact/789',
    active: true,
  },
];

class SingleContactPage extends PureComponent {
  static propType = {
    contact: shape({
      id: string.isRequired,
      name: string.isRequired,
      location: string,
      tags: arrayOf(string),
      relationships: arrayOf(
        shape({
          id: string.isRequired,
          funder: shape({
            id: string.isRequired,
            name: string.isRequired,
          }),
          title: string.isRequired,
        })
      ).isRequired,
      phone: string,
      email: string,
      notes: string,
    }),
  };

  static defaultProps = {
    contact: {
      id: '123',
      name: 'Larry Bird',
      location: '456 14th St, Minneapolis, MN 55407',
      tags: ['tag1', 'tag2'],
      relationships: [
        {
          id: '123',
          funder: {
            id: '456',
            name: 'Ford Foundation',
          },
          title: 'Board President',
        },
      ],
      phone: '123-456-7890',
      email: 'larry@bird.com',
      notes: 'Some contact notes',
    },
  };

  render() {
    const { contact } = this.props;

    return (
      <AppLayout
        title={contact.name}
        subtitle={
          <a
            href={`https://maps.google.com/?q=${contact.location}`}
            target="_blank"
          >
            {contact.location}
          </a>
        }
        breadcrumbs={breadcrumbs}
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