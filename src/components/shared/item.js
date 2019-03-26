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
    const { href, item, source, to } = this.props;

    const value = getNestedKey(source, item);

    if (to || href) {
      return (
        <td key={source}>
          <strong>
            {to ? (
              <Link to={substituteString(to, item)}>{value}</Link>
            ) : (
              <a href={substituteString(href, item)}>{value}</a>
            )}
          </strong>
        </td>
      );
    }

    return <td key={source}>{value || fallback}</td>;
  }
}

export default Item;
