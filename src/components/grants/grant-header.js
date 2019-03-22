import React, { PureComponent } from 'react';
import { number, string } from 'prop-types';

import Level from 'react-bulma-components/lib/components/level';
import Box from 'react-bulma-components/lib/components/box';

import LevelItem from '../shared/level-item';

import { formatDate, formatDollarAmount } from '../../helpers';

class GrantHeader extends PureComponent {
  static propTypes = {
    dueDate: string.isRequired,
    requestAmount: number.isRequired,
    awardAmount: number,
    confidence: number.isRequired,
  };

  render() {
    const { dueDate, requestAmount, awardAmount, confidence } = this.props;

    return (
      <Box>
        <Level>
          <LevelItem title="Due Date" text={formatDate(dueDate)} />
          <LevelItem
            title="Request Amount"
            text={formatDollarAmount(requestAmount)}
          />
          <LevelItem
            title="Award Amount"
            text={awardAmount ? formatDollarAmount(awardAmount) : 'TBD'}
          />
          <LevelItem title="Confidence" text={`${confidence}%`} />
        </Level>
      </Box>
    );
  }
}

export default GrantHeader;
