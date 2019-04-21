import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import AppLayout from '../shared/app-layout';
import Contacts from '../shared/contacts';
import CTAButton from '../shared/cta-button';
import GoogleMapsLink from '../shared/google-maps-link';
import Grants from '../shared/grants';
import Notes from '../shared/notes';
import Tags from '../shared/tags';
import Reports from '../shared/reports';

import FunderHeader from './funder-header';

import { funder } from '../../../seed';

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
    active: true,
    name: 'Ford Foundation',
    url: '/app/funder/123',
  },
];

class SingleFunderPage extends PureComponent {
  static propType = {
    grant: shape({
      annualGiving: number,
      id: string.isRequired,
      location: shape({
        address: string.isRequired,
        coordinates: arrayOf(number).isRequired,
      }),
      missionFocus: string,
      name: string.isRequired,
    }),
  };

  static defaultProps = {
    funder,
  };

  render() {
    const { funder } = this.props;

    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        callToAction={<CTAButton.Edit to={'/app/funder/123/edit'} />}
        subtitle={
          <GoogleMapsLink location={funder.location}>
            {funder.location.address}
          </GoogleMapsLink>
        }
        title={funder.name}
      >
        <FunderHeader
          annualGiving={funder.annualGiving}
          missionFocus={funder.missionFocus}
        />
        <Notes notes={funder.notes} />
        <Tags tags={funder.tags} />
        <Grants grants={funder.grants} />
        <Reports reports={funder.reports} />
        <Contacts contacts={funder.contacts} />
      </AppLayout>
    );
  }
}

export default SingleFunderPage;
