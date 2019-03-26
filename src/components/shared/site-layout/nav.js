import React, { Fragment } from 'react';
import { object } from 'prop-types';
import { Location } from '@reach/router';
import Navbar from 'react-bulma-components/lib/components/navbar';

import Link from '../link';
import Logo from './logo';

class Nav extends React.PureComponent {
  state = {
    open: false,
  };

  static propTypes = {
    currentUser: object,
    location: object.isRequired,
  };

  static defaultProps = {
    currentUser: {},
  };

  componentDidUpdate = prevProps => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ open: false });
    }
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { currentUser } = this.props;
    const { open } = this.state;

    return (
      <Navbar color="black" active={open}>
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to="/">
            <Logo />
          </Navbar.Item>
          <Navbar.Burger onClick={this.toggleOpen} />
        </Navbar.Brand>
        <Navbar.Menu>
          {currentUser ? (
            <Navbar.Container>
              <Navbar.Item renderAs={Link} to="/app/grants">
                Grants
              </Navbar.Item>
              <Navbar.Item renderAs={Link} to="/app/funders">
                Funders
              </Navbar.Item>
              <Navbar.Item renderAs={Link} to="/app/contacts">
                Contacts
              </Navbar.Item>
              <Navbar.Item renderAs={Link} to="/app/reports">
                Reports
              </Navbar.Item>
              <Navbar.Item renderAs={Link} to="/app/projects">
                Projects
              </Navbar.Item>
            </Navbar.Container>
          ) : null}
          <Navbar.Container position="end">
            {currentUser ? (
              <Fragment>
                <hr className="is-marginless is-hidden-desktop" />
                <Navbar.Item
                  renderAs="a"
                  href="javascript:void(0)"
                  role="button"
                >
                  Sign Out
                </Navbar.Item>
              </Fragment>
            ) : (
              <Fragment>
                <Navbar.Item renderAs={Link} to="/signin">
                  Sign In
                </Navbar.Item>
                <Navbar.Item renderAs={Link} to="/signup">
                  Sign Up
                </Navbar.Item>
              </Fragment>
            )}
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default props => (
  <Location>
    {({ location }) => <Nav location={location} {...props} />}
  </Location>
);
