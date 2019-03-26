import React, { PureComponent } from 'react';
import { arrayOf, object } from 'prop-types';

import Table from 'react-bulma-components/lib/components/table';

class List extends PureComponent {
  static propTypes = {
    items: arrayOf(object).isRequired,
  };

  render() {
    const { children, items } = this.props;

    return (
      <Table>
        <thead>
          <tr>
            {React.Children.map(children, ({ props }) => (
              <th key={props.source}>{props.title || props.source}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              {React.Children.map(children, child => {
                if (child.type.displayName !== 'Item') {
                  console.warn(
                    'Only <Item /> components can be children of <List />'
                  );
                }

                return React.cloneElement(child, { item });
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default List;
