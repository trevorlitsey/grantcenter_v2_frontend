import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import CardList from './card-list';
import MediaCard from './media-card';

const RelationshipCard = ({ funder, title }) => (
  <MediaCard title={funder.name} to={`/app/funder/${funder.id}`}>
    <strong>Title:</strong> {title}
  </MediaCard>
);

class Relationships extends PureComponent {
  static propTypes = {
    relationships: arrayOf(
      shape({
        id: string.isRequired,
        funder: shape({
          id: string.isRequired,
          name: string.isRequired,
        }),
        title: string.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { relationships } = this.props;

    return (
      <CardList title="Relationships">
        {relationships.map(relationship => (
          <RelationshipCard key={relationship.id} {...relationship} />
        ))}
      </CardList>
    );
  }
}

export default Relationships;
