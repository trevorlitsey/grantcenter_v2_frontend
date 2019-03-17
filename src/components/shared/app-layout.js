import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';

class AppLayout extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    title: string.isRequired,
  };

  render() {
    const { children, title } = this.props;

    return (
      <Section>
        <Container>
          <Heading size={3}>{title}</Heading>
          {children}
        </Container>
      </Section>
    );
  }
}

export default AppLayout;
