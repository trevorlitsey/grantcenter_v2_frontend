import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import { Link } from 'gatsby';

class EditLink extends PureComponent {
  static propTypes = {
    to: string.isRequired,
  };

  render() {
    const { to, ...props } = this.props;

    return (
      <Link className="button" to={to} {...props}>
        Edit
      </Link>
    );
  }
}

export default EditLink;
