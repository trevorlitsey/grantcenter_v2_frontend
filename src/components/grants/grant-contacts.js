import React, { Fragment, PureComponent } from 'react';
import { arrayOf, shape } from 'prop-types';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

import { Contact } from '../../config/prop-types';
import { contacts } from '../../data/contacts';

const ContactsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 20px;
`;

const ContactCard = ({ id, name, notes, email, phone }) => (
  <Card>
    <Card.Content>
      <Media>
        <Media.Item>
          <Heading size={4}>
            <Link to={`/contact/${id}`}>{name}</Link>
          </Heading>
        </Media.Item>
      </Media>
      <Content>
        Email: <a href={`mailto:${email}`}>{email}</a>
        <br />
        Phone: {phone}
        <br />
        <br />
        {notes}
        <br />
      </Content>
    </Card.Content>
    <Card.Footer>
      <Card.Footer.Item renderAs={Link} to={`/contact/${id}`}>
        View
      </Card.Footer.Item>
    </Card.Footer>
  </Card>
);

class GrantContacts extends PureComponent {
  static propTypes = {
    contacts: arrayOf(shape(Contact)),
  };

  static defaultProps = {
    contacts,
  };

  render() {
    const { contacts } = this.props;

    return (
      <Fragment>
        <Heading renderAs="h2" size={4}>
          Contacts
        </Heading>
        <ContactsGridWrapper>
          {contacts.map(contact => (
            <ContactCard key={contact.id} {...contact} />
          ))}
        </ContactsGridWrapper>
      </Fragment>
    );
  }
}

export default GrantContacts;
