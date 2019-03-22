import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';

import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';

class SectionWithTitle extends PureComponent {
  static propTypes = {
    title: string,
    children: node.isRequired,
  };

  render() {
    const { children, title } = this.props;

    return (
      <Content>
        <Heading renderAs="h2" size={4}>
          {title}
        </Heading>
        {children}
      </Content>
    );
  }
}

export default SectionWithTitle;
