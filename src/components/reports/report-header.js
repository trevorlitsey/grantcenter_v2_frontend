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
          <LevelItem title="Due Date" text={formatDate(dueDate)} />
          {awardAmount ? (
            <LevelItem
              title="Grant Award Amount"
              text={formatDollarAmount(awardAmount)}
            />
          ) : (
            <LevelItem
              title="Grant Request Amount"
              text={formatDollarAmount(requestAmount)}
            />
          )}
        </Level>
      </Box>
    );
  }
}

export default ReportHeader;
