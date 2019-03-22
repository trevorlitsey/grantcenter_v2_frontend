import React, { PureComponent } from 'react';
import { string } from 'prop-types';

import SectionWithTitle from '../shared/section-with-title';

class GrantNotes extends PureComponent {
  static propTypes = {
    notes: string,
  };

  render() {
    const { notes } = this.props;

    return (
      <SectionWithTitle title="Notes">{notes || <i>None.</i>}</SectionWithTitle>
    );
  }
}

export default GrantNotes;
