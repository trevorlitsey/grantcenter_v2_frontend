import React, { PureComponent } from 'react';
import { number, string } from 'prop-types';

import Level from 'react-bulma-components/lib/components/level';
import Box from 'react-bulma-components/lib/components/box';

import LevelItem from '../shared/level-item';

import { formatDate, formatDollarAmount } from '../../helpers';

class GrantHeader extends PureComponent {
  static propTypes = {
    awardAmount: number,
    confidence: number.isRequired,
    dueDate: string.isRequired,
    requestAmount: number.isRequired,
  };

  render() {
    const { dueDate, requestAmount, awardAmount, confidence } = this.props;

    return (
      <Box>
        <Level>
          <LevelItem text={formatDate(dueDate)} title="Due Date" />
          <LevelItem
            text={formatDollarAmount(requestAmount)}
            title="Request Amount"
          />
          <LevelItem
            text={awardAmount ? formatDollarAmount(awardAmount) : 'TBD'}
            title="Award Amount"
          />
          <LevelItem text={`${confidence}%`} title="Confidence" />
        </Level>
      </Box>
    );
  }
}

export default GrantHeader;
