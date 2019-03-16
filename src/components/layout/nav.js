import React, { Fragment } from 'react';
import { object } from 'prop-types';
import { Link } from 'gatsby';
import Navbar from 'react-bulma-components/lib/components/navbar';

import Logo from './Logo';

class Nav extends React.PureComponent {
  state = {
    open: false,
  };

  static propTypes = {
    currentUser: object,
  };

  static defaultProps = {
    currentUser: null,
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
          <Navbar.Container position="end">
            {currentUser ? (
              <Navbar.Item renderAs={Link} to="/app">
                App
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
