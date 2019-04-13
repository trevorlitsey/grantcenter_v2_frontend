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

  render() {
    const { annualGiving, missionFocus } = this.props;

    return (
      <Box>
        <Level>
          <LevelItem
            text={formatDollarAmount(annualGiving)}
            title="Annual Giving"
          />
          <LevelItem text={missionFocus} title="Mission Focus" />
        </Level>
      </Box>
    );
  }
}

export default FunderHeader;
