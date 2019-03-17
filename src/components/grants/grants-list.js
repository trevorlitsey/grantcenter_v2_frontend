import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Link } from 'gatsby';
import Table from 'react-bulma-components/lib/components/table';

class GrantList extends PureComponent {
  static propTypes = {
    grants: arrayOf(
      shape({
        name: string.isRequired,
        funder: shape({
          name: string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  };

  static defaultProps = {
    grants: [
      {
        name: 'Summer 2018',
        funder: {
          name: 'Ford Foundation',
        },
      },
    ],
  };

  render() {
    const { grants } = this.props;

    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Funder</th>
          </tr>
        </thead>
        <tbody>
          {grants.map(grant => (
            <tr>
              <td>
                <strong>
                  <Link to="app/grant/123">{grant.name}</Link>
                </strong>
              </td>
              <td>
                <Link to="/app/funder/456" title="Ford Foundation">
                  {grant.funder.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default GrantList;
