import React, { PureComponent } from 'react';
import { arrayOf, object, shape, string } from 'prop-types';
import { Link } from 'gatsby';

import Table from 'react-bulma-components/lib/components/table';

const fallback = '--';

const getSubKey = (keyStr, obj) => {
  if (!keyStr) {
    throw new Error('invalid key or id string supplied to <List /> component.');
  }

  return keyStr.split('.').reduce((acc, subKey) => acc && acc[subKey], obj);
};

class List extends PureComponent {
  static propTypes = {
    items: arrayOf(object).isRequired,
    keys: arrayOf(
      shape({
        id: string,
        key: string.isRequired,
        title: string.isRequired,
        to: string,
      })
    ).isRequired,
  };

  render() {
    const { items, keys } = this.props;

    return (
      <Table>
        <thead>
          <tr>
            {keys.map(({ key, title }) => (
              <th key={key}>{title || key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              {keys.map(({ id, key, to }) => {
                const value = getSubKey(key, item);

                if (to) {
                  const linkId = getSubKey(id, item);

                  return (
                    <td key={key}>
                      <strong>
                        <Link
                          to={`${to}${to.endsWith('/') ? '' : '/'}${linkId}`}
                        >
                          {value}
                        </Link>
                      </strong>
                    </td>
                  );
                }

                return <td key={key}>{value || fallback}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default List;
