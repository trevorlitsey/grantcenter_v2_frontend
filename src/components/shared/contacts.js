import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import CardList from './card-list';
import MediaCard from './media-card';

import { contacts } from '../../../seed/contacts';

const ContactCard = ({ id, name, email, phone }) => (
  <MediaCard title={name} to={`/app/contact/${id}`}>
    <strong>Email:</strong>{' '}
    {email ? <a href={`mailto:${email}`}>{email}</a> : <i>unknown</i>}
    <br />
    <strong>Phone:</strong> {phone || <i>unknown</i>}
  </MediaCard>
);

class Contacts extends PureComponent {
  static propTypes = {
    contacts: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        phone: string,
        email: string,
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
