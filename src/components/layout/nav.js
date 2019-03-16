import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import Navbar from 'react-bulma-components/lib/components/navbar';

import Logo from './Logo';

class Nav extends React.PureComponent {
  state = {
    open: false,
  };

  static propTypes = {
    currentUser: null,
  };

  static defaultProps = {
    currentUser: null,
  };

  render() {
    const { currentUser } = this.props;
    const { open } = this.state;

    return (
      <Navbar color="black" active={open}>
        <Navbar.Brand>
          <Navbar.Item>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Item>
          <Navbar.Burger
            active={open}
            onClick={() =>
              this.setState({
                open: !open,
              })
            }
          />
        </Navbar.Brand>
        <Navbar.Menu active={open}>
          <Navbar.Container position="end">
            {currentUser ? (
              <Navbar.Item href="#">App</Navbar.Item>
            ) : (
              <Fragment>
                <Navbar.Item href="#">Sign In</Navbar.Item>
                <Navbar.Item href="#">Sign Up</Navbar.Item>
              </Fragment>
            )}
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default Nav;
