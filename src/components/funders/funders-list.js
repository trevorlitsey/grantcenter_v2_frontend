import React, { PureComponent } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import List from '../shared/list';

const KEYS = [
  {
    title: 'Name',
    key: 'name',
    to: '/app/funder/',
    id: 'id',
  },
  {
    title: 'Mission Focus',
    key: 'missionFocus',
  },
  {
    title: 'Annual Giving',
    key: 'annualGiving',
  },
];

class FundersList extends PureComponent {
  static propTypes = {
    grants: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        missionFocus: string,
        annualGiving: number,
      })
    ).isRequired,
  };

  static defaultProps = {
    funders: [
      {
        id: '123',
        name: 'Ford Foundation',
        missionFocus: 'Arts and Education',
        annualGiving: 10000,
      },
    ],
  };

  render() {
    const { funders } = this.props;

    const formattedFunders = funders.map(funder => ({
      ...funder,
      annualGiving: '$' + funder.annualGiving.toLocaleString(),
    }));

    return <List items={formattedFunders} keys={KEYS} />;
  }
}

export default FundersList;
