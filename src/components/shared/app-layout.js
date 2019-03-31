import React, { PureComponent } from 'react';
import { arrayOf, bool, node, oneOfType, shape, string } from 'prop-types';

import Breadcrumb from 'react-bulma-components/lib/components/breadcrumb';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';

import Link from '../shared/link';

class AppLayout extends PureComponent {
  static propTypes = {
    callToAction: node,
    breadcrumbs: arrayOf(
      shape({ name: string.isRequired, url: string.isRequired, active: bool })
        .isRequired
    ),
    children: node.isRequired,
    title: string.isRequired,
    subtitle: oneOfType([node, string]),
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
    const { callToAction, breadcrumbs, children, title, subtitle } = this.props;

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
          {callToAction && (
            <span className="is-pulled-right">{callToAction}</span>
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
