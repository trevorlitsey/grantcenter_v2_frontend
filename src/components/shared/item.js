import React, { PureComponent } from 'react';
import { object, string } from 'prop-types';
import { Link } from 'gatsby';

import { getNestedKey, substituteString } from '../../helpers/string';

const fallback = '--';

class Item extends PureComponent {
  static propTypes = {
    item: object,
    source: string.isRequired,
    title: string.isRequired,
    to: string,
  };

  render() {
    const { item, source, to } = this.props;

    const value = getNestedKey(source, item);

    if (to) {
      const url = substituteString(to, item);

      return (
        <td key={source}>
          <strong>
            <Link to={url}>{value}</Link>
          </strong>
        </td>
      );
    }

    return <td key={source}>{value || fallback}</td>;
  }
}

export default Item;
