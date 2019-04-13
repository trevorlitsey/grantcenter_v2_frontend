import React, { PureComponent } from 'react';
import { number, string } from 'prop-types';

import Level from 'react-bulma-components/lib/components/level';
import Box from 'react-bulma-components/lib/components/box';

import LevelItem from '../shared/level-item';

import { formatDate, formatDollarAmount } from '../../helpers';

class ReportHeader extends PureComponent {
  static propTypes = {
    awardAmount: number,
    dueDate: string.isRequired,
    requestAmount: number.isRequired,
  };

  render() {
    const { awardAmount, dueDate, requestAmount } = this.props;

    return (
      <Box>
        <Level>
          <LevelItem text={formatDate(dueDate)} title="Due Date" />
          {awardAmount ? (
            <LevelItem
              text={formatDollarAmount(awardAmount)}
              title="Grant Award Amount"
            />
          ) : (
            <LevelItem
              text={formatDollarAmount(requestAmount)}
              title="Grant Request Amount"
            />
          )}
        </Level>
      </Box>
    );
  }
}

export default ReportHeader;
