import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import List from '../shared/list';
import Item from '../shared/item';

import { contacts } from '../../../seed';

class ContactsList extends PureComponent {
  static propTypes = {
    contacts: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        email: string,
        phone: string,
      })
    ).isRequired,
  };

  static defaultProps = {
    contacts,
  };

  render() {
    const { contacts } = this.props;

    return (
      <List items={contacts}>
        <Item source="name" title="Name" to="/app/contact/{id}" />
        <Item href="mailto:{email}" source="email" title="Email" />
        <Item href="tel:{phone}" source="phone" title="Phone" />
      </List>
    );
  }
}

export default ContactsList;
