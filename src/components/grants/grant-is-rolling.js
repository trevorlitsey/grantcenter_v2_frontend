import React, { PureComponent } from 'react';
import { bool } from 'prop-types';

import Tag from 'react-bulma-components/lib/components/tag';
import { Control } from 'react-bulma-components/lib/components/form';

class GrantIsRolling extends PureComponent {
  static propTypes = {
    isRolling: bool,
  };

  render() {
    const { isRolling } = this.props;

    const color = isRolling ? 'success' : 'light';

    return (
      <Control>
        <Tag.Group gapless>
          <Tag color="dark">Is Rolling</Tag>
          <Tag color={color}>{isRolling.toString()}</Tag>
        </Tag.Group>
      </Control>
    );
  }
}

export default GrantIsRolling;
