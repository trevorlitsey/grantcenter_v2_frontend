import React, { PureComponent } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import { Link } from 'gatsby';
import Table from 'react-bulma-components/lib/components/table';

const fallback = '--';

class FundersList extends PureComponent {
  static propTypes = {
    grants: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        missionFocus: string,
        annualGiving: number,
      })
    ).isRequired,
  };

  static defaultProps = {
    funders: [
      {
        id: '123',
        name: 'Ford Foundation',
        missionFocus: 'Arts and Education',
        annualGiving: 10000,
      },
    ],
  };

  render() {
    const { funders } = this.props;

    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mission Focus</th>
            <th>Annual Giving</th>
          </tr>
        </thead>
        <tbody>
          {funders.map(funder => (
            <tr>
              <td>
                <strong>
                  <Link to={`app/funder/${funder.id}`}>{funder.name}</Link>
                </strong>
              </td>
              <td>{funder.missionFocus || fallback}</td>
              <td>
                {funder.annualGiving
                  ? `$${funder.annualGiving.toLocaleString()}`
                  : fallback}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default FundersList;
