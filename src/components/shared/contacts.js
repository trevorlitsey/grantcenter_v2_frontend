import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import CardList from './card-list';
import MediaCard from './media-card';

import { contacts } from '../../data/contacts';

const ContactCard = ({ id, name, email, phone }) => (
  <MediaCard title={name} to={`/app/contact/${id}`}>
    <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
    <br />
    <strong>Phone:</strong> {phone}
  </MediaCard>
);

class Contacts extends PureComponent {
  static propTypes = {
    contacts: arrayOf(
      shape({
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
      })
    ),
  };

  static defaultProps = {
    contacts,
  };

  render() {
    const { contacts } = this.props;

    return (
      <CardList title="Contacts">
        {contacts.map(contact => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </CardList>
    );
  }
}

export default Contacts;
