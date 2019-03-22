import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';
import { styled } from 'linaria/react';

import SectionWithTitle from './section-with-title';

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 20px;
`;

class CardList extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    title: string.isRequired,
  };

  render() {
    const { children, title } = this.props;

    return (
      <SectionWithTitle title={title}>
        <CardListWrapper>{children}</CardListWrapper>
      </SectionWithTitle>
    );
  }
}

export default CardList;
