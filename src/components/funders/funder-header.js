import React, { PureComponent } from 'react';
import { number, string } from 'prop-types';

import Level from 'react-bulma-components/lib/components/level';
import Box from 'react-bulma-components/lib/components/box';

import LevelItem from '../shared/level-item';

import { formatDollarAmount } from '../../helpers';

class FunderHeader extends PureComponent {
  static propTypes = {
    annualGiving: number,
    missionFocus: string,
  };

  static defaultProps = {
    annualGiving: 1000000,
    missionFocus: 'Arts and Education',
  };

  render() {
    const { annualGiving, missionFocus } = this.props;

    return (
      <Box>
        <Level>
          <LevelItem
            title="Annual Giving"
            text={formatDollarAmount(annualGiving)}
          />
          <LevelItem title="Mission Focus" text={missionFocus} />
        </Level>
      </Box>
    );
  }
}

export default FunderHeader;
