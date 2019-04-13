import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import List from '../shared/list';
import Item from '../shared/item';

import { funders } from '../../../seed';

class FundersList extends PureComponent {
  static propTypes = {
    funders: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        missionFocus: string,
        annualGiving: number,
      })
    ).isRequired,
  };

  static defaultProps = {
    funders,
  };

  render() {
    const { funders } = this.props;

    const formattedFunders = funders.map(funder => ({
      ...funder,
      annualGiving: '$' + funder.annualGiving.toLocaleString(),
    }));

    return (
      <List items={formattedFunders}>
        <Item source="name" title="Name" to="/app/funder/{id}" />
        <Item source="missionFocus" title="Mission Focus" />
        <Item source="annualGiving" title="Annual Giving" />
      </List>
    );
  }
}

export default FundersList;
