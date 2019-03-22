import React, { PureComponent } from 'react';
import { arrayOf, shape } from 'prop-types';

import CardList from './card-list';
import MediaCard from './media-card';

import { Contact } from '../../config/prop-types';
import { contacts } from '../../data/contacts';

const ContactCard = ({ id, name, email, phone }) => (
  <MediaCard title={name} viewLink={`/app/contact/${id}`}>
    <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
    <br />
    <strong>Phone:</strong> {phone}
  </MediaCard>
);

class Contacts extends PureComponent {
  static propTypes = {
    contacts: arrayOf(shape(Contact)),
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
