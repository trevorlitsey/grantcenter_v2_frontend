import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import CardList from '../shared/card-list';
import MediaCard from '../shared/media-card';

const FunderCard = ({ id, name, missionFocus }) => (
  <MediaCard title={name} to={`/app/funder/${id}`}>
    <strong>Mission Focus:</strong> {missionFocus || <i>unknown</i>}
  </MediaCard>
);

class Funders extends PureComponent {
  static propTypes = {
    funders: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        missionFocus: string,
      })
    ).isRequired,
  };

  render() {
    const { funders } = this.props;

    return (
      <CardList title="Funders">
        {funders.map(funder => (
          <FunderCard key={funder.id} {...funder} />
        ))}
      </CardList>
    );
  }
}

export default Funders;
