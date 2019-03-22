import React, { PureComponent } from 'react';
import { arrayOf, bool, node, shape, string } from 'prop-types';
import { Link } from 'gatsby';

import Breadcrumb from 'react-bulma-components/lib/components/breadcrumb';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';

class AppLayout extends PureComponent {
  static propTypes = {
    breadcrumbs: arrayOf(
      shape({ name: string.isRequired, url: string.isRequired, active: bool })
        .isRequired
    ),
    children: node.isRequired,
    title: string.isRequired,
    subtitle: string,
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
    const { breadcrumbs, children, title, subtitle } = this.props;

    return (
      <Section>
        <Container>
          {breadcrumbs && (
            <Breadcrumb
              items={breadcrumbs.map(breadcrumb => ({
                ...breadcrumb,
                to: breadcrumb.url,
              }))}
              hrefAttr="to"
              renderAs={Link}
            />
          )}
          <Heading size={3}>{title}</Heading>
          <Heading size={4} subtitle renderAs="p">
            {subtitle}
          </Heading>
          {children}
        </Container>
      </Section>
    );
  }
}

export default AppLayout;
