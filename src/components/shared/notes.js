import React, { PureComponent } from 'react';
import { string } from 'prop-types';

import SectionWithTitle from './section-with-title';

class Notes extends PureComponent {
  static propTypes = {
    notes: string,
  };

  render() {
    const { notes } = this.props;

    return (
      <SectionWithTitle title="Notes">{notes || <i>None</i>}</SectionWithTitle>
    );
  }
}

export default Notes;
