import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import CardList from '../shared/card-list';
import MediaCard from '../shared/media-card';

import { formatDate, formatDollarAmount } from '../../helpers';

import { grants } from '../../../seed';

const GrantCard = ({ dueDate, id, name, requestAmount }) => (
  <MediaCard title={name} to={`/app/grant/${id}`}>
    <strong>Due Date:</strong> {formatDate(dueDate)}
    <br />
    <strong>Request Amount:</strong> {formatDollarAmount(requestAmount)}
  </MediaCard>
);

class Grants extends PureComponent {
  static propTypes = {
    grants: arrayOf(
      shape({
        dueDate: string.isRequired,
        id: string.isRequired,
        name: string.isRequired,
        requestAmount: number.isRequired,
      })
    ),
  };

  static defaultProps = {
    grants,
  };

  render() {
    const { grants } = this.props;

    return (
      <CardList title="Grants">
        {grants.map(grant => (
          <GrantCard key={grant.id} {...grant} />
        ))}
      </CardList>
    );
  }
}

export default Grants;
