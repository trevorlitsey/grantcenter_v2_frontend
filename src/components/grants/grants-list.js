import React, { PureComponent } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
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
        amount: number.isRequired,
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
        amount: 10000,
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
            <th>Request Amount</th>
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
              <td>${grant.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default GrantList;
