import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';

import Link from './link';

class MediaCard extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    title: string.isRequired,
    to: string.isRequired,
  };

  render() {
    const { children, title, subtitle, to } = this.props;

    return (
      <Card>
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading renderAs="h3" size={4}>
                <Link to={to}>{title}</Link>
              </Heading>
              {subtitle && (
                <Heading size={5} subtitle>
                  {subtitle}
                </Heading>
              )}
            </Media.Item>
          </Media>
          <Content>{children}</Content>
        </Card.Content>
        <Card.Footer>
          <Card.Footer.Item renderAs={Link} to={to}>
            View
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    );
  }
}

export default MediaCard;
