import React, { PureComponent } from 'react';
import { arrayOf, node, shape, string } from 'prop-types';
import Breadcrumb from 'react-bulma-components/lib/components/breadcrumb';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';

class AppLayout extends PureComponent {
  static propTypes = {
    breadcrumbs: arrayOf(
      shape({ name: string.isRequired, url: string.isRequired }).isRequired
    ),
    children: node.isRequired,
    title: string.isRequired,
  };

  static defaultProps = {
    breadcrumbs: [
      {
        name: 'Storybook',
        url: '#1',
      },
      {
        name: 'Breadcrumb',
        url: '#2',
      },
      {
        name: 'Breadcrumb Types',
        url: '#3',
        active: true,
      },
    ],
  };

  render() {
    const { breadcrumbs, children, title } = this.props;

    return (
      <Section>
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        <Container>
          <Heading size={3}>{title}</Heading>
          {children}
        </Container>
      </Section>
    );
  }
}

export default AppLayout;
