import React, { Fragment } from 'react';
import { object } from 'prop-types';
import { Link } from 'gatsby';
import Navbar from 'react-bulma-components/lib/components/navbar';

import Logo from './logo';

class Nav extends React.PureComponent {
  state = {
    open: false,
  };

  static propTypes = {
    currentUser: object,
  };

  static defaultProps = {
    currentUser: {},
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
          <Navbar.Burger active={open} onClick={this.toggleOpen} />
        </Navbar.Brand>
        <Navbar.Menu>
          {currentUser ? (
            <Navbar.Container>
              <Navbar.Item dropdown hoverable>
                <Navbar.Link renderAs={Link} to="/app">
                  App
                </Navbar.Link>
                <Navbar.Dropdown>
                  <Navbar.Item renderAs={Link} to="/app/grants">
                    Grants
                  </Navbar.Item>
                  <Navbar.Item renderAs={Link} to="/app/reports">
                    Reports
                  </Navbar.Item>
                  <Navbar.Item renderAs={Link} to="/app/funders">
                    Funders
                  </Navbar.Item>
                  <Navbar.Item renderAs={Link} to="/app/contacts">
                    Contacts
                  </Navbar.Item>
                  <Navbar.Item renderAs={Link} to="/app/projects">
                    Projects
                  </Navbar.Item>
                </Navbar.Dropdown>
              </Navbar.Item>
            </Navbar.Container>
          ) : null}
          <Navbar.Container position="end">
            {currentUser ? (
              <Navbar.Item renderAs={Link} to="/">
                Sign Out
              </Navbar.Item>
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

export default Nav;
