import React, { PureComponent } from 'react';
import { number, shape, string } from 'prop-types';

import AppLayout from '../shared/app-layout';
import Contacts from '../shared/contacts';
import GoogleMapsLink from '../shared/google-maps-link';
import Grants from '../shared/grants';
import Notes from '../shared/notes';
import Tags from '../shared/tags';

import FunderHeader from './funder-header';

import { contacts } from '../../data/contacts';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Funders',
    url: '/app/funders',
  },
  {
    name: 'Ford Foundation',
    url: '/app/funder/123',
    active: true,
  },
];

class SingleFunderPage extends PureComponent {
  static propType = {
    grant: shape({
      id: string.isRequired,
      name: string.isRequired,
      location: string,
      missionFocus: string,
      annualGiving: number,
    }),
  };

  static defaultProps = {
    funder: {
      id: '123',
      name: 'Ford Foundation',
      missionFocus: 'Arts and Education',
      annualGiving: 10000,
      location: '123 Main St, Minneapolis, MN 55408',
      tags: ['tag1', 'tag2'],
      notes: 'Some funder notes',
      contacts,
    },
  };

  render() {
    const { funder } = this.props;

    return (
      <AppLayout
        title={funder.name}
        subtitle={
          <GoogleMapsLink address={funder.location}>
            {funder.location}
          </GoogleMapsLink>
        }
        breadcrumbs={breadcrumbs}
      >
        <FunderHeader
          annualGiving={funder.annualGiving}
          missionFocus={funder.missionFocus}
        />
        <Notes notes={funder.notes} />
        <Tags tags={funder.tags} />
        <Grants grants={funder.grants} />
        <Contacts contacts={funder.contacts} />
      </AppLayout>
    );
  }
}

export default SingleFunderPage;
