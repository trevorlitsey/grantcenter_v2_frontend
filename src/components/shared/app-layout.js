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
              hrefAttr="to"
              items={breadcrumbs.map(breadcrumb => ({
                ...breadcrumb,
                to: breadcrumb.url,
              }))}
              renderAs={Link}
            />
          )}
          {callToAction && (
            <span className="is-pulled-right">{callToAction}</span>
          )}
          <Heading size={3}>{title}</Heading>
          {subtitle ? (
            <Heading renderAs="p" size={4} subtitle>
              {subtitle}
            </Heading>
          ) : null}
          {children}
        </Container>
      </Section>
    );
  }
}

export default AppLayout;
