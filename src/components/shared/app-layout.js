import React, { PureComponent } from 'react';
import { arrayOf, bool, node, oneOfType, shape, string } from 'prop-types';

import Breadcrumb from 'react-bulma-components/lib/components/breadcrumb';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';

import Link from '../shared/link';

class AppLayout extends PureComponent {
  static propTypes = {
    breadcrumbs: arrayOf(
      shape({ active: bool, name: string.isRequired, url: string.isRequired })
        .isRequired
    ),
    callToAction: node,
    children: node.isRequired,
    subtitle: oneOfType([node, string]),
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
        active: true,
        name: 'Breadcrumb Types',
        url: '#3',
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
