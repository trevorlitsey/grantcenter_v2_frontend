import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';
import { Link } from 'gatsby';

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';

class MediaCard extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    title: string.isRequired,
    viewLink: string.isRequired,
  };

  render() {
    const { children, title, viewLink } = this.props;

    return (
      <Card>
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading size={4} renderAs="h3">
                <Link to={viewLink}>{title}</Link>
              </Heading>
            </Media.Item>
          </Media>
          <Content>{children}</Content>
        </Card.Content>
        <Card.Footer>
          <Card.Footer.Item renderAs={Link} to={viewLink}>
            View
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    );
  }
}

export default MediaCard;
