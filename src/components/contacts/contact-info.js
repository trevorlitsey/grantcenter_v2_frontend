import React, { PureComponent } from 'react';
import { string } from 'prop-types';

import SectionWithTitle from '../shared/section-with-title';

class ContactInfo extends PureComponent {
  static propTypes = {
    notes: string,
  };

  render() {
    const { email, phone } = this.props;

    return (
      <SectionWithTitle title="Contact Info">
        <strong>Email:</strong> {email}
        <br />
        <strong>Phone:</strong> {phone}
      </SectionWithTitle>
    );
  }
}

export default ContactInfo;
